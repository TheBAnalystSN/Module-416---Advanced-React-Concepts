# React Counter with useEffect

## Project Overview

This project is an advanced React counter application created to demonstrate correct usage of React Hooks, specifically `useState` and `useEffect`. The application expands on basic counter functionality by implementing state dependencies, side effects, cleanup logic, keyboard event handling, and persistence using browser storage.

The primary goal of this lab is to show an understanding of how React manages state and side effects within functional components.

---

## Features Implemented

- Display current counter value
- Increment and decrement functionality
- Custom step value input
- Count history tracking
- Auto-save functionality using localStorage
- Keyboard controls (ArrowUp / ArrowDown)
- Reset mechanism
- Proper useEffect cleanup for side effects

---

## Technologies Used

- React (JavaScript)
- Vite
- React Hooks (`useState`, `useEffect`, `useCallback`)
- Browser Local Storage API
- JavaScript DOM Event Handling

---

## How to Run the Project

1. Clone the repository
2. Navigate into the project folder
3. Install dependencies:

   ```bash inside the Terminal

   ```npm install

## Start the development server

```bash inside the Terminal

npm run dev

Open the local development URL provided in the terminal

---

## Learning Focus

This project emphasizes:

Managing multiple pieces of state within a single component

Updating state using previous state values

Understanding when useEffect is necessary

Avoiding unnecessary effects for derived state

Cleaning up side effects such as timers and event listeners

Correct use of dependency arrays

---

## Resources Used

The following official and educational resources were used to complete this project. These sources were referenced for correct syntax, best practices, and conceptual understanding.

React Official Documentation

React useState Hook
https://react.dev/reference/react/useState

React useEffect Hook
https://react.dev/reference/react/useEffect

You Might Not Need an Effect
https://react.dev/learn/you-might-not-need-an-effect

Rules of Hooks
https://react.dev/reference/rules/rules-of-hooks

MDN Web Docs

JavaScript Event Handling
https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event

Window.localStorage
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

setTimeout and clearTimeout
https://developer.mozilla.org/en-US/docs/Web/API/setTimeout

Vite Documentation

Vite React Setup
https://vitejs.dev/guide/

Course & Classroom References

React Hooks lecture notes

In-class examples covering state updates and effects

Lab instructions provided for Module 416 – Advanced React Concepts