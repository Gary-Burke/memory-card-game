# Testing

> [!NOTE]
> Return back to the [README.md](README.md) file.

## Code Validation

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files and the results can also be seen in the URLs below.

| Directory | File | URL | Screenshot | Notes |
| --- | --- | --- | --- | --- |
| root | [index.html](https://github.com/Gary-Burke/memory-card-game/blob/main/index.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fgary-burke.github.io%2Fmemory-card-game%2Findex.html) | ![screenshot](documentation/validation/html/index.png) | No errors or warnings |
| root | [game.html](https://github.com/Gary-Burke/memory-card-game/blob/main/game.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fgary-burke.github.io%2Fmemory-card-game%2Fgame.html) | ![screenshot](documentation/validation/html/game.png) | No errors or warnings |
| root | [404.html](https://github.com/Gary-Burke/memory-card-game/blob/main/404.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fgary-burke.github.io%2Fmemory-card-game%2F404.html) | ![screenshot](documentation/validation/html/404.png) | No errors or warnings |


### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate my CSS file and the results can also be seen in the URL below.

| Directory | File | URL | Screenshot | Notes |
| --- | --- | --- | --- | --- |
| assets | [styles.css](https://github.com/Gary-Burke/memory-card-game/blob/main/assets/css/style.css) | [CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fgary-burke.github.io%2Fmemory-card-game%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en) | ![screenshot](documentation/validation/css/css.png) | All warnings were checked and can be safely ignored, as they are based on external libraries and frameworks.

## Responsiveness

I've tested my deployed project to check for responsiveness issues by using Google Chrome Dev Tools.

| Page | Mobile | Tablet | Desktop | Notes |
| --- | --- | --- | --- | --- |
| Home | ![screenshot](documentation/responsiveness/mobile-home.png) | ![screenshot](documentation/responsiveness/tablet-home.png) | ![screenshot](documentation/responsiveness/desktop-home.png) | Works as expected |
| Instructions | ![screenshot](documentation/responsiveness/mobile-instructions.png) | ![screenshot](documentation/responsiveness/tablet-instructions.png) | ![screenshot](documentation/responsiveness/desktop-instructions.png) | Works as expected |
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