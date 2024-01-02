# React + TypeScript + Vite

I enjoyed coding this technical exam challenge! The following are some bullet points of my work on this project:

- I was able to complete a working prototype meeting all requirements detailed in the PDF built in React with Typescript using React Redux for state management
- Although some refactoring was done, due to time constraints, I was not able to refactor and document the code to the level I would've liked to
- Some notes on the automated testing:
  - Due to time constraints, I was not able to write as much test coverage as I would've liked
  - I opted to write integration tests on the main Home page to cover user functionality as I felt my time would be better served in this case doing that instead of starting with more granular unit tests
  - The limited tests written also impacted the amount of refactoring I completed as I normally would like to have written a full test suite for greater confidence during refactoring
  - I'd like to note that I am a fan of TDD but have more comfort/experience at this time with TLD, so I fell back on TLD as opposed to TDD to ensure completion of a full working prototype
- I styled this project with styled-components (CSS-in-JS) as that has been my default in React but can also style using Sass/SCSS, TailwindCSS, MaterialUI or Bootstrap
- A nice to have with this project would've been to also build a backend API for the React UI to interact with and have persistent data but at the risk of sounding like a broken record, time did not permit for me to do that

Thank you for the opportunity to complete and submit this technical exam. I hope you enjoy reviewing my work and I am excited about the prospect of working with your company!

## Installation and Test Running Guide

1. Clone Github repo or download and extract files into a local folder on a machine with Node/NPM installed
2. Open a terminal and make sure you are in the folder where the repo was cloned/files were extracted to
3. At the command prompt, type `npm install` and press enter. This will install app dependencies and create node_modules folder
4. Once that's been done, to run the app, type `npm run dev` this will start the server
5. To view the app in browser, go to http://localhost:5173/
6. To stop the server, at the command prompt click CTRL+C on Windows/Mac/Linux
7. To run tests, at the command prompt type `npm run test`. When this command is run, the test runner will continue to run and 'watch' for any file changes and auto run the tests with each change
8. To manually re-run the tests, type `a` and to exit the test process, type `d`
