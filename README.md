# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](preview.jpg)


### Links

- Solution URL: [https://github.com/BCEESAY10/tip-calculator-app](https://github.com/BCEESAY10/tip-calculator-app)
- Live Site URL: [https://bceesay10.github.io/tip-calculator-app/](https://bceesay10.github.io/tip-calculator-app/)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

I've learned about refactoring in JavaScript. Separating input validations from main functions. I've also understand adding click event to buttons and dynamicaaly updating the DOM from an input field.

To see how you can add code snippets, see below:

```js
const validations = {
  bill: (value) => {
    const num = Number(value);
    return value.trim() !== "" && !isNaN(num) && num > 0;
  },
  person: (value) => {
    const num = Number(value);
    return value.trim() !== "" && !isNaN(num) && num > 0;
  },
};

const dataIsValid = (key, value) => {
  return validations[key](value);
};
```
``` JS
const customInput = document.querySelector(".my-4 input");
if (customInput) {
  customInput.addEventListener("input", function () {
    showAns(customInput.value);
  });
}
```


### Continued development

I want to keep learning and developing


### Useful resources

- My biggest assistant on the JavaScript area is **GitHub Copilot**


## Author

- Website - [My Portfolio](https://bamfa-portfolio.vercel.app)
- Frontend Mentor - [@BCEESAY10](https://www.frontendmentor.io/profile/BCEESAY10)

