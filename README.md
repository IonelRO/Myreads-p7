# Project Overview - MyReads Project

The Udacity *MyReads - A Book Tracking App* project is part of both the *Front-end Web Development* Nanodegree and the *React Fundamentals* course. It was created based on a starter template provided by Udacity. Students were expected to add interactivity to the app by refactoring the static code in the template.

## Instructions

1. Download or clone this repository
2. Install all project dependencies with `npm install`
3. Start the development server with `npm start`

## The App

The app is a basic library that allows the user to search for and categorize books. Books can be added to one of three shelves ("Currently Reading", "Want to Read" and "Read") or removed from the main page ("None").

## Backend Server

The backend server is provided by Udacity. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

* `getAll`
* `update`
* `search`

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found [SEARCH_TERMS.md](https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing
This repository is the starter code for all Udacity students. Therefore, we most likely will not accept pull requests.