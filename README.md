# Two Column Questions
At Europe Direct Valcea, I had the task to hold a workshop, where me and my team had to teach 30 kids from the 6th grade, things about Europe. So I developed a web app, where 2 or more teams compete on selecting the correct question and answer. As an example, here on the left are important persons, and on the right, Europeean countries. The kids had to correctly match the person with the country.

![screenshot](https://github.com/palcu/twoColumnQuestions/raw/master/screenshots/s1_2colsq.png)

## Instalation
1. Edit in `js/script.js` the teams _(you can add as many as you want)_
```js
  //Edit here teams
  teams.push(new team("Penguins", 0));
  teams.push(new team("Geeks", 0));
```
2. Then edit the questions and answers
```js
  //Here edit questions and answers
  links.push(new link("Constantin Brancusi", "Romania"));
  links.push(new link("Wolfgang Amadeus Mozart", "Austria"));
  links.push(new link("Gerardus Mercator", "Belgia"));
  links.push(new link("Elias Canetti", "Bulgaria"));
```
3. Open `index.html` in a browser
4. Teams take turns: select an item on the left, and then one on the right, and press `check`. If it is correct, those items will disappear, and the score will be +1. After each turn, press `next` to select the next team.

## Tools used
* HTML5 Boilerplate
* jQuery

## Problems
* [spaghetti](https://github.com/palcu/twoColumnQuestions/blob/master/js/script.js) code _(I didn't hear about backbone.js when coded this)_
* options not working _(TODO: add html5 file api)_
* it's ugly _(TODO: use bootstrap)_

## License
Copyright (C) 2012 Alexandru Palcuie

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
