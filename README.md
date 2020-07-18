## React Books

This project is an interface that allows you to search books via google books api, and save the books you want to check out later.


## Getting Started

You can either clone this repository, or download the zip folder to obtain this repository.  See deployment for notes on how to deploy the project.

## Prerequisites

You will need to have node installed on your computer, as well as mongodb.  For instructions on installing node js click here.

https://nodejs.org/en/download/

For instructions on installing mongodb, click here.

https://docs.mongodb.com/manual/installation/

On the back end, this application runs with axios, express, if-env, and mongoose.  These are already listed in the package.json, and will be installed from the terminal from navigate to the root folder, and running npm i.  

Similarly on the friend end, this is using react-router-dom, and axios, which can be installed the same way from the client folder.

## Running the tests

to run the tests for this, you will need to navigate to the scripts folder in the terminal, and run the following command "node seedDB.js"

This will run the code written within the seedDB.js file which connects to the local database, and creates the database if it doesn't exist, or connects if it does.  It deletes any data previously written in the database, and replaces it with the information listed as bookSeed.

The way it does this is it uses a variable called db, which is defined in the models folder under book.js  That creates a schema with the data model that we're using to define the attributes of the book within the database.  We have listed,
Title, Authors, Description, image, Link, and Date.  When making the api calls, it pulls that information from google books api to fill that info, and send it to the database when saving it.  In the seed, we're defining those attributes ourselves, and replacing the information with the info seeded.  I also have an event listener that catches errors if that fails.


## Deployment

To get this running on a live system, you can run npm start from the root folder.  Otherwise, you can deploy to Heroku, or AWS.  

Instructions for Heroku

https://devcenter.heroku.com/categories/deployment

Instructions for AWS

https://aws.amazon.com/getting-started/tutorials/deploy-code-vm/