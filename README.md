# BreathEZ
BreathEZ is an app that informs users of air quality where they live, and in other cities across the US. It's a Progressive Web Application designed for mobile use and is currently deployed [here](https://breath-ez.vercel.app/).

## Installation
To install this app: 
```
git clone <<url>>
cd ~/breath-ez
npm i
```

Once all the dependancies are installed run `npm start` and the site should be accessible at `http://localhost:3000/`.

## Technologies
This app is built in `React` using the `create-react-app` boilerplate. It also uses... 

-`react-router-dom`

-`react-collapsible`

-`node-sass`

-`fetch api`

-`HTML5`

-`cypress`

## API
This app relies on the [AirVisual API](https://api-docs.iqair.com/) run by IQAir. This is an amazing API that lets us access reliable air quality and weather data. We're using the community (free) version, which puts limits on how many API calls the user can make per day, minute, and second. We've intentionally designed this app to slow the user down just enough that they shouldn't run into this problem, but if they do we have dynamic error handling that makes the process user-friendly. 

## Features 
Upon visiting BreathEZ the user will see air quality and weather information for the available city nearest to them. If they would like to view data for a different city they can select a state and city using a drop-down menu. The list of available states fetches on page load, and when you select a state the app will fetch a list of available cities within that state.

The user can also click "FAQ" in the upper righthand corner if they have questions about how air quality is rated in the US, what kinds of pollutants our app can measure, and the effectiveness of different kinds of masks. Most importantly our FAQ page contains information on what AQI levels to worry about based on your health and medical history. 

![Using the app on mobile](https://media.giphy.com/media/uub3o9zv9lyBOTHOGh/giphy.gif)
![Viewing the FAQ on mobile](https://media.giphy.com/media/6TsktaRfyQG9gopjc8/giphy.gif)
![Using the app on a desktop](https://media.giphy.com/media/5okKzUEN3oHUOP3RcV/giphy.gif)

## Testing 
We use [cypress](https://www.cypress.io/) for end to end and integration testing. In order to test the site run `npm run cypress` and you should be brought to a testing suite. The tests use stubbed api calls, but do expect the site to run locally. Make sure you've run `npm start` in an open tab and can visit the site before testing. 

## `sw.js` and `runRegistration.js`
We originally used boilerplate service worker and registration logic provided to us by a `create-react-app` template. Eventually we converted this to a service worker of our own design that operates a little differently. This worker lives in our `public` directory, not `src` and the registration is called directly in `index.html`. This approach allowed us to slim down to only the code we needed to run this (relatively simple) app, and by hosting the files in `public` we aim to improve offline performance. 

## Future Iterations
There are number of improvements that could be made to this app. In addition to resolving the iOS bug we might decide to... 

-Improve the desktop and tablet views, perhaps by adding more detailed information. 

-Add logic that can slow down API calls to prevent users from hitting limits. Doing this would likely involve adding a loading screen. 

-Add cached data files that can store information such as a list of available states so that the app doesn't have to fetch this information every time. We can easily mock this up with dummy data, but would need to add logic that lets the cache automatically update. 

## Contributors 
This app was a group project for Module 3 of the Front End Engineering Program at [the Turing School of Software and Design](https://turing.io/). Our assignment was to design and build an app using unfamiliar technology, and we chose to design a PWA. 

## Authors
<table>
    <tr>
        <td> Thao Ma <a href="https://github.com/thaomonster">GH</td>
        <td> Boone Epstein <a href="https://github.com/deadbelly">GH</td>
        <td> Eric Campbell <a href="https://github.com/mainlyetcetera">GH</td>
    </tr>
 <td><img src="https://avatars3.githubusercontent.com/u/67611512?s=400&u=ef3bac38d4f7d6d8a899d26ce1f0eb169f11bb9b&v=4" alt="Ms. Turtle"
 width="150" height="auto" /></td>
 <td><img src="https://ca.slack-edge.com/T029P2S9M-U0184VA96K1-cf7535e7ceed-512" alt="Mr. Epstein"
 width="150" height="auto" /></td>
 <td><img src="https://avatars0.githubusercontent.com/u/70294115?s=460&u=b24fae5febb30e7d1c9507c51ee760dba5e396e5&v=4" alt="Mr. Campbell"
 width="150" height="auto" /></td>
</table>
