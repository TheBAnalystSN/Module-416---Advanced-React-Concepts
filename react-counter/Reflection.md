# Reflection – React Counter with useEffect

## Overview

This project helped reinforce my understanding of how React state and side effects work together. While the counter itself appears simple, implementing advanced features required careful consideration of state dependencies, effect execution order, and cleanup functions.

## useState Learning Outcomes

I used multiple `useState` hooks to manage different aspects of the application, including the counter value, history tracking, step input, and save status. This reinforced the idea that state should be broken into logical pieces instead of combined into one object.

Using previous state values when updating the counter was especially important to avoid incorrect updates and ensure React handled changes correctly.

## useEffect Learning Outcomes

The `useEffect` hook was used for multiple side effects:

- Tracking count history
- Saving data to localStorage
- Managing keyboard event listeners

I learned that dependency arrays control when effects run and that missing or incorrect dependencies can cause unexpected behavior. Cleanup functions were especially important for removing event listeners and canceling pending saves.

## Challenges Faced

One of the main challenges was understanding when and why cleanup functions run. At first, it was not obvious how React cancels effects when state changes quickly. Using cleanup functions helped prevent multiple saves and ensured event listeners did not stack.

Another challenge was deciding what data should trigger effects, which required careful thinking about dependencies.

## Key Takeaways

- `useState` and `useEffect` must be used together thoughtfully
- Cleanup functions are essential for preventing bugs and memory leaks
- Side effects should not directly change state without considering dependencies
- Breaking features into smaller steps makes complex components easier to manage

## Conclusion

This lab strengthened my confidence in using React Hooks correctly and helped me understand how React manages component lifecycle behavior. The project emphasized functional correctness over visual design, which made it a valuable learning experience.
