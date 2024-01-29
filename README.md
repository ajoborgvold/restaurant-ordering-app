# Reastaurant ordering app
An online ordering app from the virtual (i.e. fake) diner "Ajo's Diner". Browse through the menu, add and remove items from your shopping cart, get a meal deal discount by ordering specific items from the menu, and place and pay for your order by filling out a form with controlled inputs, checking that you are in fact typing a name, a (potential) card number and a (potentiel) CCV.

## In this document
1. [App URL](#app-url)
2. [App screenshot](#app-screenshot)
3. [Technologies used](#technologies-used)
4. [Accessibility considerations](#accessibility-considerations)
5. [UI design]("UI-design)
6. [Stumbling and learning points](#stumbling-and-learning-points)

## App URL
[https://ajos-diner.netlify.app/](https://ajos-diner.netlify.app/)

## App screenshots
Coming soon

## Technologies used
1. [React.js](https://react.dev/)
2. [React Router](https://reactrouter.com/en/main)
3. [Tailwind CSS](https://tailwindcss.com/)
4. [TypeScript](https://www.typescriptlang.org/)

## Accessibility considerations
### Navigation
Every interactive element is accessible with touch, mouse and keyboard navigation. Interactive icons, i.e. the `+` and `-` signs for adding/removing cart items have aria-labels conveying there function to assistive technologies. The payment modal can be closed in various ways: by clicking outside the modal, by pressing `esc`, or by clickiing the `close` button.
### HTML structure
Semantic HTML is used throughout the app, e.g.: heading levels are followed, menu and order are rendered as `ul` elements with `li` items.
### Color contrasts
All colors pass the WCAG AAA contrast check.

## UI design
The app exists in a light and a dark mode version, and the user's color mode preference is fetched from their OS. The design is minimalistic yet engaging, featuring subtle enhancements such as background gradients on hover/focus and alternating styling on lists for added visual appeal.

## Stumbling and learning points
### Tailwind CSS
This is the first ever project I have built using Tailwind CSS. Just to mention a few, I have worked with things like:
  - Installing and configuring Tailwind
  - Editing/updating `tailwind.config.js`
  - Various modifiers for e.g.: responsive breakpoints, hover/focus, odd/even, group, dark
### TypeScript
This is also the first ever project I have built using TypeScript. Along the way, I have worked with things like:
  - Primitive types, arrays, objects, JSX elements, various event types
  - Interfaces
  - TS in combination with both the React Context API and React props
