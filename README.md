# Mentor Places

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

Mentor places is a platform to view university courses. In order to view the content, it connects to Directus to access all the information and perform the desired searches.

### Built With

[![Next][Next.js]][Next-url]
[![Tremor][Tailwind]][Tremor-url]
[![Axios][Axios]][Axios-url]

<!-- GETTING STARTED -->

## Getting started

### Prerequisites

- Node.js 18+
- yarn 4.x.x

  ```
  npm install --global yarn
  ```

  Once yarn is installed, or you already had it installed, make sure is version 4. If not, run:

  ```
  corepack enable
  corepack prepare yarn@stable --activate
  ```

### Installation

1. Clone the repo:

   ```
   git@github.com:TailorHub-Mad/mentor-places-front.git
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

The application relies on an API for its functionality. For it to work correctly, you will have to connect it with the preproduction API or to set up the server locally.

### Development

To start the app in development mode:

```
yarn run dev
```

<!-- DEPLOYMENT -->

## Deployment

**Important**: If Vercel is used, it will be neccessary to add `ENABLE_EXPERIMENTAL_COREPACK=true` to environment variables. Also, a specific configuration have been done in order to make Vercel deployment work. For more information please visit: [Vercel Deploy Yarn 4 in Notion](https://www.notion.so/modulor/Vercel-Deploy-Yarn-4-11bb7f79b9ae8085a12afdfd64bdc0dd?pvs=4)

### Preproduction

_Pending - preproduction environment does not existe yet_

### Production

_Pending - production environment does not existe yet_

<!-- CONTACT -->

## Contact

- Email: gabriel-cebrian@tailor-hub.com

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Tailwind]: https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white
[Tremor-url]: https://tremor.so/
[Axios]: https://img.shields.io/badge/axios-671DDF?style=for-the-badge&logo=axios&logoColor=white
[Axios-url]: https://axios-http.com/es/docs/intro
