import * as vscode from 'vscode';
import { execSync } from 'child_process';

export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('space-counter.countLeadingSpaces', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }

        // 1. Save the selection state immediately.
        const originalSelection = editor.selection;

        const position = editor.selection.active;
        const line = editor.document.lineAt(position.line);
        const leadingSpaces = line.text.match(/^(\s*)/)?.[1].length || 0;
        const message = `${leadingSpaces} leading spaces`;

        try {
            // 2. Speak the message SYNCHRONOUSLY.
            // This blocks the extension until speech is complete.
            execSync(`say "${message}"`);
        } catch (err) {
            console.error(err);
            vscode.window.showErrorMessage("Failed to execute 'say' command.");
            return; // Exit if speech fails
        }

        // 3. Because the execution was synchronous, the editor state is preserved.
        // We can now safely restore the selection.
        const currentEditor = vscode.window.activeTextEditor;
        if (currentEditor) {
            currentEditor.selection = originalSelection;
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}