import * as vscode from 'vscode';
import { execSync } from 'child_process';

let isCountModeActive = false;
let statusBarItem: vscode.StatusBarItem;
let lastLine: number | undefined;

function countAndSpeak(editor: vscode.TextEditor) {
    const position = editor.selection.active;
    const line = editor.document.lineAt(position.line);
    const leadingSpaces = line.text.match(/^(\s*)/)?.[1].length || 0;
    const message = `${leadingSpaces}`;

    try {
        if (process.platform === 'darwin') {
            execSync(`say "${message}"`);
        } else if (process.platform === 'win32') {
            execSync(`powershell -command "Add-Type -AssemblyName System.Speech; (New-Object System.Speech.Synthesis.SpeechSynthesizer).Speak('${message}');"`);
        }
    } catch (err) {
        console.error(err);
        vscode.window.showErrorMessage("Failed to execute text-to-speech command.");
    }
}

export function activate(context: vscode.ExtensionContext) {
    statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    statusBarItem.command = 'space-counter.countLeadingSpaces';
    context.subscriptions.push(statusBarItem);

    const commandDisposable = vscode.commands.registerCommand('space-counter.countLeadingSpaces', () => {
        isCountModeActive = !isCountModeActive;

        const editor = vscode.window.activeTextEditor;
        if (isCountModeActive) {
            statusBarItem.text = `$(megaphone) Space Counter: ON`;
            statusBarItem.show();
            if (editor) {
                lastLine = editor.selection.active.line;
                countAndSpeak(editor);
            }
        } else {
            statusBarItem.text = `$(mute) Space Counter: OFF`;
            statusBarItem.hide();
            lastLine = undefined;
        }
    });

    context.subscriptions.push(commandDisposable);

    const selectionDisposable = vscode.window.onDidChangeTextEditorSelection(event => {
        if (isCountModeActive && event.selections.length > 0) {
            const editor = event.textEditor;
            const position = event.selections[0].active;
            if (position.line !== lastLine) {
                lastLine = position.line;
                countAndSpeak(editor);
            }
        }
    });

    context.subscriptions.push(selectionDisposable);
}

export function deactivate() {
    if (statusBarItem) {
        statusBarItem.dispose();
    }
}