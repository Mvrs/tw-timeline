<!-- Please update value in the {}  -->

<h1 align="center">tw-timeline</h1>

<div align="center">
   Something I built to see what's the hype for Prisma 😎
</div>

<br>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Roadmap](#roadmap)
- [How to use](#how-to-use)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- OVERVIEW -->

## Overview

![screenshot](https://user-images.githubusercontent.com/5723692/125141660-82f45b80-e0ca-11eb-8a15-38a9bca1b58a.png)

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [Emotion CSS](https://emotion.sh/docs/introduction)

## Requirements

- Node >= `13+`
- TypeScript >= `4.2.+`
- React >= `17.0.0+`
- Prisma >= `v2`

## Roadmap

### Milestone 1

- [x] Anyone can send a Tweet
- [x] Setup databse cluster on Digital Ocean
- [x] Style UI with Emotion
- [x] Set Correct Date Time

### Milestone 2

- [ ] Change Theme from Dark to Light
- [ ] Create and Store Users
- [ ] Setup OAuth to enable Authentication
- [ ] Allow Users to remain anonymous
- [ ] Allow Users to tweet GIFs and Photos
- [ ] Everyone can create their own AVIs
- [ ] React Query for an optimistic UI experience

## How To Use

<!-- Example: -->

```bash
# Clone this repository
$ git clone https://github.com/your-user-name/tw-timeline

# Install dependencies
$ npm install # or yarn install

# Run the app
$ npm run dev # or yarn dev

# Dont forget to migrate the database
# After you run prisma migrate it will generate a .env file
DATABASE_URL="postgres://${NAME_OF_DATABASE}"

# Next is to populate some data to the database
# which I wrote in the seed.ts file
$ npx prisma db seed --preview-feature

# Then spin up the database and see the results
$ npx prisma studio

```

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example: -->

- [Google](https://www.google.com/)

## Contact

- [Twitter](https://{twitter.com/saschamars})
