# BattleShips

### [Demo](https://arfacod-battleships.vercel.app/) | [Storybook](https://develop--6486a99e62c3ba59643b6104.chromatic.com)

## Description
This is a simple battleships game made with Next.js and React. It is a work in progress.

## How to Use

### Install Dependencies

```bash
npm install
```

### Run on Terminal

```bash
npm run start:cli
```

### Run Dev Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```



### Build for Production and Run Server

```bash
> npm run build
> npm run start
```


## Run Jest Tests

```bash
npm test
```

## Change Log

### 09-06-2023

- I started this project today. I have created the basic structure of the project using Next.js with Jest and React Testing Library for testing.

- I have also created the basic entities for the ship, the board and the game with some basic methods.

- I have created tests for the entities and the methods. Then I used TDD to create the methods and the basic logic for the game.

### 10-06-2023

- I have refactored the code by making separate modules for the entities.

- I have separated tests for the entities.

- I have created an index.ts file to play the game in the web console.

- I have used some design patterns like the factory pattern to create the ships and the builder pattern to build the board.

- I have created a node console interface to play the game in the terminal using the `@inquirer/prompts` package.

- I have renamed the entities and other things for better abstraction and readability. 

### 11-06-2023

- I have used more design patterns to improve the code.

- I have created a basic UI using React and Next.js.

- I have set up storybook to create the UI components.

- I have set up Chromatic to test the UI components.

## Roadmap 

- more Design Patterns

- add more features to the game (players, score, etc.)

- improve UI (add animations, add sounds, etc.)

- improve tests

- improve documentation
