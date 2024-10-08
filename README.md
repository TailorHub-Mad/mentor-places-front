# Trading SaaS

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#configuration">Configuration</a></li>
        <li><a href="#development">Development</a></li>
      </ul>
    </li>
    <li>
        <a href="#deployment">Deployment</a>
        <ul>
          <li><a href="#preproduction">Preproduction</a></li>
          <li><a href="#production">Production</a></li>
        </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About

Dashboard with relevant information for the investor or trader. Includes news, charts, economic calendar and asset information.

### Built With

[![Next][Next.js]][Next-url]
[![Tremor][Tailwind]][Tremor-url]
[![Axios][Axios]][Axios-url]


<!-- GETTING STARTED -->
## Getting started

### Prerequisites

- yarn
    ```
    npm install --global yarn
    ```


### Installation

1. Clone the repo:
    ```
    git@github.com:TailorHub-Mad/trading-saas-panel.git
    ```

2. Install dependencies:

    ```
    yarn
    ```


### Configuration

Add required environment variables
```
NEXT_PUBLIC_API_URL
```

The application relies on an API for its functionality. For it to work correctly, you will have to connect it with the preproduction API or to set up the server locally. For the second case please refer to the [API repository](https://github.com/TailorHub-Mad/trading-saas-api) and follow the instructions.

### Development

To start the app in development mode:

```
yarn run dev
```

<!-- DEPLOYMENT -->
## Deployment

### Preproduction

*Pending - preproduction environment does not existe yet*

### Production

*Pending - production environment does not existe yet*

<!-- CONTACT -->
## Contact
- Email: laura.decos@tailor-hub.com or gabriel.cebrian@tailor-hub.com




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Tailwind]: https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white
[Tremor-url]: https://tremor.so/
[Axios]:https://img.shields.io/badge/axios-671DDF?style=for-the-badge&logo=axios&logoColor=white
[Axios-url]: https://axios-http.com/es/docs/intro

