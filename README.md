This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisite

* Basic knowledge of JavaScript syntax
* Basic knowledge of working with JSON and JavaScript objects.

[View Demo](https://teri.netlify.com/)

<hr />

## Deploy your React app in less than 5 minutes with Firebase Hosting

Since I already have my create-react-app created, this is the step by step tutorial

### Install the Firebase tools that will allow you deploy your app. Run this in your terminal
```
npm install firebase-tools -g
```

### Login to Firebase
For this process to work, you must be in your root directory of your React app. For me, it is **~/teyenike/devandgit/github-portfolio**. Also you will be prompted to enter your email and password for authentication.
Run the following in terminal
```
firebase Login
```

### Initialize Firebase in your React app
Now that you're logged in, you will need to initialize Firebase in your React application. Run the following
```
firebase init
```

A series of questions are asked for the initialization of your app.


### Final step

Deployment of your app to Firebase with the following command.
```
firebase deploy
```

Link to the deployed app, [click here](https://github-port.firebaseapp.com/)

<hr />

### Goals

Being comfortable writing and building a simple Github user portfolio app that connects to the [Github API](https://api.github.com/users/terieyenike). <br />It retrieves the data with JavaScript, and displays it on the front end of a website(client-side).


### Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Install the dependencies on your local environment

```
npm install
```

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
