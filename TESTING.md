# Testing

> [!NOTE]
> Return back to the [README.md](README.md) file.

## Code Validation

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files and the results can also be seen in the URLs below.

| Directory | File | URL | Screenshot | Notes |
| --- | --- | --- | --- | --- |
| root | [index.html](https://github.com/Gary-Burke/memory-card-game/blob/main/index.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fgary-burke.github.io%2Fmemory-card-game%2Findex.html) | ![screenshot](documentation/validation/html/index.png) | No errors or warnings. However the console reports a warning for aria-hidden on an element but this is due to the Bootstrap modal but it's used correctly. |
| root | [game.html](https://github.com/Gary-Burke/memory-card-game/blob/main/game.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fgary-burke.github.io%2Fmemory-card-game%2Fgame.html) | ![screenshot](documentation/validation/html/game.png) | No errors or warnings |
| root | [404.html](https://github.com/Gary-Burke/memory-card-game/blob/main/404.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fgary-burke.github.io%2Fmemory-card-game%2F404.html) | ![screenshot](documentation/validation/html/404.png) | No errors or warnings |

### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate my CSS file and the results can also be seen in the URL below.

| Directory | File | URL | Screenshot | Notes |
| --- | --- | --- | --- | --- |
| assets | [styles.css](https://github.com/Gary-Burke/memory-card-game/blob/main/assets/css/style.css) | [CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fgary-burke.github.io%2Fmemory-card-game%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en) | ![screenshot](documentation/validation/css/css.png) | All warnings were checked and can be safely ignored, as they are based on CSS font variables.

### JS

I have used the recommended [JSHint Validator](https://jshint.com/) to validate my JS code and the results can be seen below. 

| Directory | File | Screenshot | Notes |
| --- | --- | --- | --- |
| assets | [script.js](https://github.com/Gary-Burke/memory-card-game/blob/main/assets/js/script.js) | ![screenshot](documentation/validation/js/js.png) | No errors or warnings |

## Responsiveness

I've tested my deployed project to check for responsiveness issues by using Google Chrome Dev Tools.

| Page | Mobile | Tablet | Desktop | Notes |
| --- | --- | --- | --- | --- |
| Home | ![screenshot](documentation/responsiveness/mobile-home.png) | ![screenshot](documentation/responsiveness/tablet-home.png) | ![screenshot](documentation/responsiveness/desktop-home.png) | Works as expected |
| Instructions | ![screenshot](documentation/responsiveness/mobile-instructions.png) | ![screenshot](documentation/responsiveness/tablet-instructions.png) | ![screenshot](documentation/responsiveness/desktop-instructions.png) | Works as expected |
| Backside Patterns | ![screenshot](documentation/responsiveness/mobile-backside.png) | ![screenshot](documentation/responsiveness/tablet-backside.png) | ![screenshot](documentation/responsiveness/desktop-backside.png) | Works as expected |
| Game | ![screenshot](documentation/responsiveness/mobile-game.png) | ![screenshot](documentation/responsiveness/tablet-game.png) | ![screenshot](documentation/responsiveness/desktop-game.png) | Works as expected |
| Game Over | ![screenshot](documentation/responsiveness/mobile-game-over.png) | ![screenshot](documentation/responsiveness/tablet-game-over.png) | ![screenshot](documentation/responsiveness/desktop-game-over.png) | Works as expected |
| 404 | ![screenshot](documentation/responsiveness/mobile-404.png) | ![screenshot](documentation/responsiveness/tablet-404.png) | ![screenshot](documentation/responsiveness/desktop-404.png) | Works as expected |

## Browser Compatibility

I've tested my deployed project on three different browsers to check for compatibility issues.

| Page | Chrome | Firefox | Edge | Notes |
| --- | --- | --- | --- | --- |
| Home | ![screenshot](documentation/browsers/chrome-index.png) | ![screenshot](documentation/browsers/firefox-index.png) | ![screenshot](documentation/browsers/edge-index.png) | Works as expected |
| Instructions | ![screenshot](documentation/browsers/chrome-instructions.png) | ![screenshot](documentation/browsers/firefox-instructions.png) | ![screenshot](documentation/browsers/edge-instructions.png) | Works as expected |
| Game | ![screenshot](documentation/browsers/chrome-game.png) | ![screenshot](documentation/browsers/firefox-game.png) | ![screenshot](documentation/browsers/edge-game.png) | Works as expected |
| Game Over | ![screenshot](documentation/browsers/chrome-game-over.png) | ![screenshot](documentation/browsers/firefox-game-over.png) | ![screenshot](documentation/browsers/edge-game-over.png) | Works as expected |
| 404 | ![screenshot](documentation/browsers/chrome-404.png) | ![screenshot](documentation/browsers/firefox-404.png) | ![screenshot](documentation/browsers/edge-404.png) | Works as expected |

## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues. Some warnings are outside of my control, and mobile results tend to be lower than desktop.

| Page | Mobile | Desktop |
| --- | --- | --- |
| Home | ![screenshot](documentation/lighthouse/mobile-index.png) | ![screenshot](documentation/lighthouse/desktop-index.png) |
| Game | ![screenshot](documentation/lighthouse/mobile-game.png) | ![screenshot](documentation/lighthouse/desktop-game.png) |
| 404 | ![screenshot](documentation/lighthouse/mobile-404.png) | ![screenshot](documentation/lighthouse/desktop-404.png) |

## Defensive Programming
Defensive programming was manually tested and implemented for the following scenarios:
> [!NOTE]
> No screenshots have been provided, as this is a dynamic testing, which can't be shown by static screenshots.

- The game should block/ignore all clicks from the player, if the player clicks on the same card repetitively.
- The game should block/ignore all clicks from the player, while the cards are being turned around.

## User Story Testing

| Target | Expectation | Outcome | Screenshot | 
| --- | --- | --- | --- | 
| As a first-time player | I would like to be able to find instructions very easily on the home page | so that I don’t get overwhelmed or confused. | ![screenshot](documentation/features/home-page.png) |
| As an experienced player | I would like to be able to start the game without having to read through the instructions | so that I can immediately start to have fun. | ![screenshot](documentation/features/home-page.png) |
| As a first-time player | I would like the option of ending the game without having to complete it  | in case I get frustrated and want to start over | ![screenshot](documentation/features/header.png) |
| As a player | there needs to be some form a visual confirmation when a matching pair has been found, so that it gets removed from the active selection choices/game | without changing the remaining card positions. | ![screenshot](documentation/features/matching-pairs.png) |
| As an experienced player |  I would like to have a score count | so that I can try and beat my best score. | ![screenshot](documentation/features/header.png) |
| As a player |  it would be useful to have a home button when a 404 error message is displayed | so that I can easily navigate back. | ![screenshot](documentation/features/404.png) |
| As a player | it would be amusing to see a different type of message displayed | depending on the final score. | ![screenshot](documentation/features/game-over-alt.png) |

## Bugs

### Fixed Bugs

[![GitHub issue custom search](https://img.shields.io/github/issues-search/Gary-Burke/memory-card-game?query=is%3Aissue%20is%3Aclosed%20label%3Abug&label=Fixed%20Bugs&color=green)](https://www.github.com/Gary-Burke/memory-card-game/issues?q=is%3Aissue+is%3Aclosed+label%3Abug)

I've used [GitHub Issues](https://www.github.com/Gary-Burke/memory-card-game/issues) to track and manage bugs and issues during the development stages of my project.

All previously closed/fixed bugs can be tracked [here](https://www.github.com/Gary-Burke/memory-card-game/issues?q=is%3Aissue+is%3Aclosed+label%3Abug).

![screenshot](documentation/gh-issues/bugs.png)

### Unfixed Bugs

[![GitHub issue custom search](https://img.shields.io/github/issues-search/Gary-Burke/memory-card-game?query=is%3Aissue%2Bis%3Aopen%2Blabel%3Abug&label=Unfixed%20Bugs&color=red)](https://www.github.com/Gary-Burke/memory-card-game/issues?q=is%3Aissue+is%3Aopen+label%3Abug)

Any remaining open issues can be tracked [here](https://www.github.com/Gary-Burke/memory-card-game/issues?q=is%3Aissue+is%3Aopen+label%3Abug).

> [!IMPORTANT]  
> There are no remaining bugs that I am aware of, though, even after thor