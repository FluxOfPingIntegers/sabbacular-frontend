# Sabbacular Front End

This is a React-Native/Typescript based front end for the vacation planning app Sabbacular.  It relies on JSON data pulled from the [Sabbacular back end](https://github.com/FluxOfPingIntegers/sabbacular-backend).

## Getting started

• Step 1: Sign in or create a user account

• Step 2: Start planning a vacation by selecting a date range and destination

• Step 3: Lookup and enter events by date while maintaining a budget

• Step 4: Plan all of your activities and have fun!

## Installation

• First: You will need developer software, I used Visual Studio Code. Depending on your operating system you should follow these instructions: [Windows](https://code.visualstudio.com/docs/setup/windows) -OR- [macOS](https://code.visualstudio.com/docs/setup/mac) -OR- [Linux](https://code.visualstudio.com/docs/setup/linux)

• Second: You will need to clone the repo for this software and pull it up in VS Code. In your terminal please navigate to the folder you would like the files for this software to be and type
```bash
git clone git@github.com:FluxOfPingIntegers/sabbacular-frontend.git
```
then switch to the folder you just created by typing
```bash
cd sabbacular-frontend
```
finally you will need to fire up VS code by entering
```bash
code .
```
• Third: Once inside VS code this app requires you to create a .env file to your root directory and add it to your .gitignore file.  Once this is done you will need to set an ENV variable called LOCAL_API in order to communicate with the backend.  Instructions to do this can be found [here](https://create-react-app.dev/docs/adding-custom-environment-variables/).  This need to be set like the following inside your .env file:
```
REACT_APP_LOCAL_API=http://localhost:3000
```
DIRECTIONS FOR URL CONFIGURATION NEEDED
```
const url = process.env.REACT_APP_PRODUCTION_API
```
to the following:
```
const url = process.env.REACT_APP_LOCAL_API
```
then you will also need to navigate to package.json within your root folder for this app and on line 19 change it from:
```
"start": "react-scripts start",
```
to the following:
```
"start": "PORT=3001 react-scripts start",
```

• Fourth: You will need to clone/run the repo for the backend for this software. Instructions can be found in the README [here](https://github.com/FluxOfPingIntegers/sabbacular-backend)

• Fifth: After starting up the associated backend Rails server, go back within this repo.  Inside VS code within the main folder type 
```bash
npm install
```
and then once that finishes its process type
```bash
npm start
```
the app should then boot within your browser (chrome in my case).

• Finally you are ready to proceed to the Getting Started section of this README

## Contributing
This is a personal project I am building for fun and practice. As such I am not looking for contributions at this time. This may change in the future.

## Author

Ryan Schleck – Full Stack Developer - [LinkedIn](https://www.linkedin.com/in/ryan-schleck/) | [Blog](https://ryan-m-schleck.medium.com/)

## License

[MIT](https://choosealicense.com/licenses/mit/)