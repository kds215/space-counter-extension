<!-- PROJECT SHIELDS -->
<!-- TABLE OF CONTENTS -->

### VScode 'Space-Counter' Extension for the BLIND

This VScode Extension 'Space-Counter' for the BLIND users
to hear the number of leading space from the line their cursor is on.
The extension toggles on/off and continues to speeks the leading 
spaces count until turned off (activated again).

### Built With and by

* GEMINI-CLI
* In case you are wondering about the extension’s GGBK publisher name, 
  it stands for “Gemini-Guided-By-Klaus”.

<!-- GETTING STARTED -->
## Getting Started

Now for a quick test, Show Explorer “ctrl+shift+e” and open an existing
python or javascript file, than position your cursor some place within a line of code.
Use “ctrl+shift+p” and select “Count Leading Spaces” from the command drop down menu.

The extension is modal and it will toggle on. You should hear the number of leading spaces from 
the line your cursor is on and when the cursor is moved to another line it speaks
again its leading space count. On the next 'Count Leading Spaces' command 
the extension will toogle off.

### Mapping to Short-Cut-Keys

Next, map the “Count Leading Spaces” extension to a shortcut-key-squence you like.
Use for example map “shift+alt+z” by updating the “keybindings.json” file.

1. open the command palette: “ctrl+shift+p” and from menu
2. select "Preferences: Open Keyboard Shortcuts (JSON)”
3. append this code below,
   {
        "key": “alt+shift+z",
        "command": "space-counter.countLeadingSpaces",
        "when": "editorTextFocus"
   }
4. you need to add a comma at the last current {} entry.
This “keybindings.json” file starts with a left square-bracket \[ and
ends with a right square-bracket \] and in-between are {} data sections
separated by comma. 

Save the updated, still open “keybindings.json” file in VScode with “ctrl+s”.

You should now be able to use your shortcut-key to get the leading spaces count
whenever your cursor is inside the editor window.

### Prerequisites

install latest Microsoft VScode Studio for macOS or Windows.

### Installation

use VScode (on macOS or Windows):
1. click Show Extensions (ctrl+shift+x) icon in the left most narrow menu.
2. navigate to the Extensions top header bar that has on its right side a “…” drop down menu
   with the “Install from VSIX…” as last option.
3. click “Install from VSIX…” to bring up the file manager.
4. select the  "space-counter-0.0.3.vsix” file and click “install”.

<!-- USAGE EXAMPLES -->
## Usage

This VScode extension is for BLIND folks to get the leading spaces count from the line the cursor is on. 

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/kds215/space-counter-extension/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


### Top contributors:


<!-- LICENSE -->
## License

Distributed under the project_license. See `LICENSE.txt` for more information.

<!-- CONTACT -->
## Contact

Klaus Szyska - klaus@szyska.com

Project Link: [https://github.com/kds215/space-counter-extension](https://github.com/kds215/space-counter-extension)

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* Gemini-cli
* Prakash

<p align="right">(<a href="#readme-top">back to top</a>)</p>
