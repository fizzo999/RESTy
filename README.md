# RESTy react app - swagger clone

react app in 4 stages:

- 1.) text input - transfered to state - printed on screen on same page - add to it GET POST PUT DELETE buttons and display the choice of button clicked on the same page

- 3.) add if module conditional, start on history readout with individual buttons, so user can quickly search same search again; add modal with spinner (work in progress, not done yet)

- 4.) add router - based pages (home, history and help); store the results in local storage for persistence; retrieve the searches (url, method, body) from local storage; update state so onClick of a button can re execute search

## Author: Fizzo Pannosch

**Version**: 1.4.0

<!-- (increment the patch/fix version number if you make more commits past your first submission) -->

## links and resources

## <center> [sandbox deployed site](https://t0stu.csb.app/) </center>

## <center> [netlify deployed link](https://60adc328de636832fc8357ac--nifty-bartik-ec9bd4.netlify.app/) </center>

<hr>

### <center> UML - simple </center>

![UML - simple](public/assets/RESTy-1-UML.jpg)

### <center> UML - including state </center>

![UML - including state](public/assets/RESTy-2-UML.jpg)

#### <center> [github link](https://github.com/fizzo999/RESTy) </center>

#### <center> [github README.md](https://github.com/fizzo999/RESTy/blob/main/README.md) </center>

#### <center> [merged pull request - github](https://github.com/fizzo999/auth-api/pull/2) </center>

<!-- ## <center> UML DIAGRAM </center>

![web request response cycle diagram 001](./src/assets/1693signup-UMI.PNG)
![web request response cycle diagram 002](./src/assets/1692signin-UMI.PNG)
![web request response cycle diagram 003](./src/assets/1691users-UMI.PNG) -->

## Overview

react app in 4 stages:

- 1.) text input - transfered to state - printed on screen on same page - add to it GET POST PUT DELETE buttons and display the choice of button clicked on the same page

## Setup

git clone repo from github link:
https://github.com/fizzo999/RESTy.git

npm install
(to install dependencies: react, react-dom, react-scripts)

Running the app
npm run start (will run react-scripts start)

## Tests

npm run test

- will run the command "react-scripts test --verbose --coverage"

## Architecture

react based jsx frontend that displays user input (as a runner up to server REST / CRUD request methods (POST, GET, PUT, DELETE))

tests performed with jest through react-scripts

## Change Log

05-24-2021 9:59pm - Application now has a fully-functional frontend displaying user input plus choice of REST method - buttons to show up as h2/h3 on the page - all managed through state - transfered up through use of a class method/ function.

05-25-2021 9:59pm - phase 2 completed - ability to GET requests and display JSON data that comes back - also tests done - also deploy through Netlify (and github started) and sandbox updated

05-27-2021 109:59pm - phase 4 - 75% completed - ability to navigate to different pages; ability to make GET POST PUT DELETE requests; have search results stored in state AND local storage; have search results (url, method, body) stored and retrieved from local storage, display a button to that stored search; re route to the home page and set the results into state - ready to search again deploys to Netlify and sandbox updated.

06-01-2021 1:00am - phase 4 - 100% completed - local storage and state issues fixed (now only new and unique values are added to local storage and state.history); modal pop up implemented (instead of a boring spinner); submit button styled with keyframes, modal close button styled with keyframes; manual testing; history works; history click now prepopulates the homepage form - just click on submit to re submit API call;

## Credits and Collaborations

- Number and name of feature: setup file structure, write index.html, index,js, App.js, Form.js, Header.js, Footer.js PLUS all the scss files (for each file)- repo on github and deploy to sandbox
- Estimate of time needed to complete: 2 hours
- Start time: 4:00 pm
- Finish time: 8:00 pm
- Actual time needed to complete: 4 hours

- Number and name of feature: phase 2 completed - ability to GET requests and display JSON data that comes back - also tests done - also deploy through Netlify (and github started) and sandbox updated
- Estimate of time needed to complete: 4 hours
- Start time: 3:00 pm
- Finish time: 10:00 pm
- Actual time needed to complete: 6 hours

- Number and name of feature: phase 3 - half way through it
- Estimate of time needed to complete: 4 hours
- Start time: 6:00 pm
- Finish time: 11:00 pm
- Actual time needed to complete: 5 hours

- Number and name of feature: phase 4 - 75% way through it
- Estimate of time needed to complete: 4 hours
- Start time: 3:00 pm
- Finish time: 10:00 pm
- Actual time needed to complete: 7 hours

- Number and name of feature: phase 4 - 100% way through it: local storage issues fixed, state issues fixed, history click issues fixed, modal fixed, added keyframes animation to search button
- Estimate of time needed to complete: 4 hours
- Start time: 6:00 pm
- Finish time: 1:00 am
- Actual time needed to complete: 7 hours
