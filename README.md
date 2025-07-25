<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



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



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/bpfullerton/eng-amro-dict">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h1 align="center">English-Amro Bilingual Dictionary</h1>

  <p align="center">
    A web-based, Next.js-powered bilingual dictionary between English and my own constructed language, Amro.
    <br />
    <a href="https://github.com/bpfullerton/eng-amro-dict"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/bpfullerton/eng-amro-dict">View Demo</a>
    &middot;
    <a href="https://github.com/bpfullerton/eng-amro-dict/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/bpfullerton/eng-amro-dict/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



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

Welcome! This web application acts as an electronic bilingual dictionary that can help translate between English and my constructed language, Amro. It's a simple app that allows you to look up an English word and get dictionary-style entries for the Amro translations (if they exist), and vice-versa for looking up an Amro word.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

* [![Next][Next.js]][Next-url]
* [![Prisma][Prisma]][Prisma-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

When you first run the app, you are brought to a home page that contains a search bar. In this search bar, you can type in an English word and click "Search" or hit Enter to get the corresponding Amro term(s). If you know any Amro words, you can enter one of these as well, and providing they are spelled right, you will get the corresponding English translation(s). Amro words are semantically broader than English ones, so it is common for an Amro search to return multiple English translations and for English words to return only one Amro translation.

*This is an early version of the app, so bidirectional translation is the only functionality right now. Refinements are needed in the database (which I am doing manually) as well as the UI, and I plan to add additional pages containing more information and context. This is an open-source project, so feel free to help me out! More information under the "Contributing" section.*

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

Follow these steps to run the project locally.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/bpfullerton/eng-amro-dict.git
   ```
2. Install NPM packages
   ```sh
   npm install
   npm install prisma
   npm install axios
   ```
3. Change git remote url to push changes to this repo
   ```sh
   git remote set-url origin bpfullerton/eng-amro-dict
   git remote -v # confirm the changes
   ```

#### Optional API Information
The only third-party API this app uses is the Merriam-Webster Collegiate Dictionary API, used for seeding the database and establishing connections between Amro words and English words. The English word database was initially seeded upon publishing this app, so future API requests will only be necessary when updates are needed to the database. **If you would like to use the API and make changes/contribute to the database, please contact me first.** Here are instructions for setting up the API, which you should do along with installation.
1. Get a free API Key at [Merriam-Webster Developer Center](https://dictionaryapi.com/register/index), selecting "Collegiate Dictionary" under "Request API Key (1)".
2. Add your API key in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature

See the [open issues](https://github.com/bpfullerton/eng-amro-dict/issues) for a full list of proposed features (and known issues).

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

<a href="https://github.com/bpfullerton/eng-amro-dict/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=bpfullerton/eng-amro-dict" alt="contrib.rocks image" />
</a>



<!-- LICENSE -->
## License

Distributed under the project_license. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Brendan Fullerton - memorychannelproject@gmail.com

Project Link: [https://github.com/bpfullerton/eng-amro-dict](https://github.com/bpfullerton/eng-amro-dict)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* []()
* []()
* []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/bpfullerton/eng-amro-dict.svg?style=for-the-badge
[contributors-url]: https://github.com/bpfullerton/eng-amro-dict/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/bpfullerton/eng-amro-dict.svg?style=for-the-badge
[forks-url]: https://github.com/bpfullerton/eng-amro-dict/network/members
[stars-shield]: https://img.shields.io/github/stars/bpfullerton/eng-amro-dict.svg?style=for-the-badge
[stars-url]: https://github.com/bpfullerton/eng-amro-dict/stargazers
[issues-shield]: https://img.shields.io/github/issues/bpfullerton/eng-amro-dict.svg?style=for-the-badge
[issues-url]: https://github.com/bpfullerton/eng-amro-dict/issues
[license-shield]: https://img.shields.io/github/license/bpfullerton/eng-amro-dict.svg?style=for-the-badge
[license-url]: https://github.com/bpfullerton/eng-amro-dict/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/brendan-fullerton-a3911b250
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Prisma]: https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white
[Prisma-url]: https://www.prisma.io/
