# Reastaurant ordering app
An online ordering app from the virtual (i.e. fake) diner "Ajo's Diner". Browse through the menu, add and remove items from your shopping cart, get a meal deal discount by ordering specific items from the menu, and place and pay for your order by filling out a form with controlled inputs, checking that you are in fact typing a name, a (potential) card number and a (potentiel) CCV.

## In this document
1. [App URL](#app-url)
2. [App demo](#app-demo)
3. [Technologies used](#technologies-used)
4. [Accessibility considerations](#accessibility-considerations)
5. [UI design]("UI-design)
6. [Stumbling and learning points](#stumbling-and-learning-points)

## App URL
[https://ajos-diner.netlify.app/](https://ajos-diner.netlify.app/)

## App demo
Coming soon

## Technologies used
1. [React.js](https://react.dev/)
2. [React Router](https://reactrouter.com/en/main)
3. [Tailwind CSS](https://tailwindcss.com/)
4. [TypeScript](https://www.typescriptlang.org/)

## Accessibility considerations
### Navigation
Every interactive element is accessible with touch, mouse and keyboard navigation. Interactive icons, e.g. the `+` and `-` signs for adding/removing cart items, have an `aria-label` conveying their function to assistive technologies.
### HTML structure
Semantic HTML is used throughout the app, e.g.: heading levels are followed, and menu and order are rendered as `ul` elements with `li` items.
### Color contrasts
All colors pass the WCAG AAA contrast check.

## UI design
The app exists in a light and a dark mode version, and the user's color mode preference is fetched from their OS. The design is minimalistic yet engaging, featuring subtle enhancements such as background gradients on hover/focus and alternating styling on lists for added visual appeal.

## Stumbling and learning points
### Creating an accessible modal
The payment modal is created using the native HTML `dialog element`, and this improves the accessibility compared to a modal created with a `div element`. Yet there are still lots of things to consider, such as:
1. Making all `input fields` required, using regular expressions to define the allowed pattern of the various `input values`, and conveying clear, concise, and accessible information to the user about how to make the values valid
2. Disabling the `pay button` as long as the `input values` are invalid, and conveying clear and accessible information to the user about how to enable the `button`
3. Ensuring that the user can easily close the modal without having to fill out the form and click the `pay button`. There are three ways to close the modal: by clicking the `close button`, by clicking anywhere outside the modal, by pressing the `esc key`

### New technologies
This is the first ever project that I have built using Tailwind CSS and TypeScript. Along the way, I have learned how to work with a whole lot of new things.
#### Tailwind CSS:
1. Installing and configuring Tailwind
2. Editing/updating `tailwind.config.js`
3. The Tailwind units
4. Various modifiers for e.g.: responsive breakpoints, `hover`/`focus`, `odd`/`even`, `group`, `dark`
#### TypeScript:
1. Various TS types: `primitive types`, `arrays`, `objects`, `JSX elements`, various `event` types
2. Interfaces
3. TS in combination with both the `React Context API` and `React props`
