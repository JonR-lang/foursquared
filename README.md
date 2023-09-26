# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./screenshot.jpg)

![Desktop view] - (./images/card-details-desktop-view.png)
![Mobile view Portrait] - (./images/card-details-mobile-view-portrait.png)
![Mobile view Landscape] - (./images/card-details-mobile-view-landscape.png)
### Links

- Solution URL: [Add solution URL here](jonr-lang.github.io/foursquared)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- I always use a desktop first approach then work on the mobile view later.

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

This was really challenging for me, starting from the css! It was somewhat difficult creating a positioning that is responsive to different screen-sizes, including the landscape and portrait mode of these screen sizes! 

For the Html, I learned something new. I learned that you could add a maxlength attribute to the input tag, to specify the length of the characters that the user can type. I was initially racking my head on how to do with JavaScript and I remembered that one could actually achieve this with HTML. I really have no problem with writing a sexy and semantic markup.

For the CSS, the positioning was a bit tricky, so I tried to put the card elements in a container, give it a display of flex, direction of column and a gap. then I used a transform, translate property to shift one of the cards to the other side. I then used a position absolute and transform translate property to center the container in the middle of the screen. For the mobile view I gave it a different approach. I also learned that one could set media queries with max-height and not just max-width. I had to use max-height to maintain the height of the details container so that it would look good on the landscape mode in mobile view.

For the javascript, I do not even know where to start. You know that programming languages are very literal. You have to tell them every single piece of command neccessary for you to achieve your desired functionality. An instance is when filling in the card details. The numbers have to be in FOURs on the card, so I had to code for that, using a for loop iterates over every value and adds a space after every 4 characters. 

TMI?: I am a perfectionist, so I try my best to make my work look very much identical to the challenge I was presented with. I have not started learning react yet, so I am only conversant with vanilla languages and tailwind. Please I want you to look at my css code, javascript and tell me the areas where I might need improvement, including organizing my code so that It would be easier for other awesome developers like you to understand!



### Continued development

I want to understand more of javascript. Sometimes the behaviour is predictably unpredicatble if you get what I mean , lol.

### Useful resources

CHATGPT was a useful resourse as it helped me with some of the syntax which I had forgotten.


## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@iroelejohnny](https://www.twitter.com/iroelejohnny)

## Acknowledgments

I just want to give a shout out to Ozee Christine, my partner, who has been really supportive in my frontend development journey so far, I love you babe.
