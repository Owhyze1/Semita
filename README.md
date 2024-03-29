# Screenshots of Application

![All Screens](https://user-images.githubusercontent.com/16492566/85144547-4c2a7980-b219-11ea-98b8-a26823aaa1bb.png)

# Current State of Application
The functionality of the application, Semita, is nearly a complete. 
The remaining portions that need to be complete are user interface elements, and the google maps application programming interface integration. 
Once these components are fulfilled, users will be able track longitude and latitude coordinates.

# Semita

Semita is a react native mobile application by UMUC students (see contributors section) for the CMSC 495 Capstone Class.
[![Backers on Open Collective](https://opencollective.com/create-react-native-app/backers/badge.svg)](#backers) [![Sponsors on Open Collective](https://opencollective.com/create-react-native-app/sponsors/badge.svg)](#sponsors) [![npm version](https://badge.fury.io/js/create-react-native-app.svg)](https://badge.fury.io/js/create-react-native-app)

Create React Native apps with no build configuration.

* [Getting Started](#getting-started)
* [User Guide](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md)

Once you're up and running with Create React Native App, visit [this tutorial](https://facebook.github.io/react-native/docs/tutorial.html) for more information on building apps with React Native.

## Quick Overview

Make sure you have Node v6 or later installed. No Xcode or Android Studio installation is required.

```sh
$ npm install -g create-react-native-app
$ create-react-native-app my-app
$ cd my-app/
$ npm start
```

Install the [Expo](https://expo.io) app on your iOS or Android phone, and use the QR code in the terminal to open your app. Find the QR scanner on the Projects tab of the app. When you're ready to share your project with others (for example, by deploying to an app store), read the [Sharing & Deployment](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md#sharing-and-deployment) section of the User Guide.

Create React Native App allows you to work with all of the [Components and APIs](https://facebook.github.io/react-native/docs/getting-started.html) in React Native, as well as most of the [JavaScript APIs](https://docs.expo.io/versions/latest/sdk/index.html) that the Expo App provides.

## Sections

* [Getting Started](#getting-started)
* [Support and Contact](#support-and-contact)
* [FAQs](#faqs)
* [Contributing](#contributing)

## Getting Started

### Installation

Install it once globally:

```sh
$ npm install -g create-react-native-app
  # or
$ yarn global add create-react-native-app
```

You'll need to have Node v6 or later on your machine. We strongly recommend using npm v3, v4, or a recent version of Yarn. Create React Native App does not currently work with npm v5 due to bugs in npm ([you can track the issue here](https://github.com/react-community/create-react-native-app/issues/233#issuecomment-305638103)).

### Creating an App

To create a new app, run:

```sh
$ create-react-native-app my-app
$ cd my-app
```

This will create a directory called `my-app` inside the current working directory. Inside `my-app`, this will generate the initial project structure and install all of its dependencies.

If you're familiar with React Native already, you won't find any `ios` or `android` directories in this project, just JavaScript. Once this installation is done, there are some commands you can run in the project directory:

#### `npm start`

Runs your app in development mode with an interactive prompt. To run it without a prompt, use the `--no-interactive` flag.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

#### `npm test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup).

#### `npm run eject`

This will start the process of "ejecting" from Create React Native App's build scripts. You'll be asked a couple of questions about how you'd like to build your project.

**Warning:** Running eject is a **permanent** action. Please use a version control system, such as git, so you can revert back if necessary. An ejected app will require you to have an [Xcode and/or Android Studio environment](https://facebook.github.io/react-native/docs/getting-started.html) set up.


## Support and Contact

If you're having issues with , please make sure:

* The issue is not covered in the [Getting Started](https://github.com/react-community/create-react-native-app#getting-started) or [User Guide](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md) documentation
* There is not already an [open issue](https://github.com/react-community/create-react-native-app/issues) for your particular problem

If you've checked the documentation and currently open issues, please either open a new GitHub issue, [find @dika10sune on Twitter](https://twitter.com/dika10sune), or ping `dikaiosune` on [Reactiflux](https://www.reactiflux.com/)'s #react-native channel on Discord. **Please do not DM or email project maintainers directly**, as it's very important that support takes place in public locations where others can benefit from the conversation.

## FAQs

### What API specification should I be looking at while developing?

Apps made with Create React Native App support everything in the Components and APIs sections of the [React Native Documentation](https://facebook.github.io/react-native/docs/getting-started.html).

Apps made with Create React Native App also support most of the JavaScript-to-Native APIs provided by the [Expo SDK](https://docs.expo.io/versions/latest/sdk/index.html), since they are loaded by the Expo app.

### What are the limitations of Semita?

The main limitation of the Semita project is that it must be written in pure JavaScript and not have any dependencies which rely on custom native code (i.e. ones which require running `react-native link` to work). This allows the projects to load directly on a phone without native compilation, and also means that it's not necessary to install or use Android Studio or Xcode.




## Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].
Jeremy Bowman
Tiffany Wise
Semeon Getachew

\
