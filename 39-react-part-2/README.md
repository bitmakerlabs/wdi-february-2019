# Intro to React: Day 2

## Overview
Today we'll continue to learn about React, and to build on yesterday's Colour Palette application.

## Agenda
- Day 1 Recap (15 minutes)
- Create React App (15 minutes)
- Migrate Day 1 Exercise (15 minutes)
- React Developer Tools (5-10 minutes)
- Day 2 Exercise (45-50 minutes)
- Wrap Up (5-10 minutes)

We'll begin by exploring `create-react-app` and the React Developer Tools, which streamline the development and debugging processes respectively.

After that, we'll revisit React's `useState` hook, which allows us to make our UI components stateful. From there we'll introduce two new hooks: `useRef`; and `useEffect`.

Like `useState`, the `useRef` hook allows us define and access data that will persist even when our component is re-rendered. For today's exercise, we'll use this hook to extract user information directly from the DOM nodes within our UI.

In its simplest form, the `useEffect` hook allows us to invoke functions whenever a component is mounted, rendered, or unmounted. We'll use this hook to update the internal state of our components each time they receive new data.
