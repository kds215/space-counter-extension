<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![project_license][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Here's a blank template to get started. To avoid retyping too much info, do a search and replace with your text editor for the following: `github_username`, `repo_name`, `twitter_handle`, `linkedin_username`, `email_client`, `email`, `project_title`, `project_description`, `project_license`

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With and by

* GEMINI-CLI
* In case you are wondering about the extension’s GGBK publisher name, 
  it stands for “Gemini-Guided-By-Klaus”.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



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
4. select the  "space-counter-0.0.x.vsix” file and click “install”.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

This VScode extension is for BLIND folks to get the leading spaces count from the line the cursor is on. 


<p align="right">(<a href="#readme-top">back to top</a>)</p>



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

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Top contributors:



<!-- LICENSE -->
## License

Distributed under the project_license. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Klaus Szyska - klaus@szyska.com

Project Link: [https://github.com/kds215/space-counter-extension](https://github.com/kds215/space-counter-extension)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* Gemini-cli
* Prakash

<p align="right">(<a href="#readme-top">back to top</a>)</p>
