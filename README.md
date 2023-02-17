# e-commerce-back-end-jk13

# <font color="gold">E-Commerce Back End</font>
# 
 
 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://mit-license.org/)

## Description
In this project, the task is to build the back end for an e-commerce site by modifying starter code and configure a working Express.js API to use Sequelize to interact with a MySQL database.


## Table of Contents

  * [User Story](#userstory)
  * [Acceptance Criteria](#acceptance)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Links](#links)
  * [Mockup](#mockup)
  * [License](#license)


## User Story
  <a name="userstory"></a>
AS A manager at an internet retail company<br />
I WANT a back end for my e-commerce website that uses the latest technologies<br />
SO THAT my company can compete with other e-commerce companies<br />


## Acceptance Criteria
  <a name="acceptance"></a>
GIVEN a functional Express.js API<br />
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file<br />
THEN I am able to connect to a database using Sequelize<br />
WHEN I enter schema and seed commands<br />
THEN a development database is created and is seeded with test data<br />
WHEN I enter the command to invoke the application<br />
THEN my server is started and the Sequelize models are synced to the MySQL database<br />
WHEN I open API GET routes in Insomnia for categories, products, or tags<br />
THEN the data for each of these routes is displayed in a formatted JSON<br />
WHEN I test API POST, PUT, and DELETE routes in Insomnia<br />
THEN I am able to successfully create, update, and delete data in my database<br />

## Installation 
  <a name="installation"></a>
    1) User can copy repository from github at: (https://github.com/jckutch/e-commerce-back-end-jk13)<br />
    2) Then install all dependencies with `npm i` in terminal.<br />
    3) Then enter personal mysql username and password in `.env.`<br />
    4) Then log into MySQL by entering `mysql -u root -p` in the command line, using your personal password.<br />
    5) Then execute database by entering `SOURCE db/schema.sql`.<br />
    5) Then enter `quit` in MySQL and enter `npm run seed` in terminal to run application.<br />
    6) Then enter `npm start` to start database.<br />


## Usage
  <a name="usage"></a>
User can view, add, delete and update employee information from the database.<br />


## Tests
  <a name="tests"></a>
API POST, PUT, and DELETE in Insomnia.


## Links
  <a name="links"></a>
Repository Link:  https://github.com/jckutch/e-commerce-back-end-jk13<br />


## Mockup
  <a name="mockup"></a>
  Link to Mockup VIDEO:<br />
   https://drive.google.com/file/d/1L1Xgq5HAwbMLTqjYoSyl20qOpnUvdqPt/view<br />
   <br />


## License 
  <a name="license"></a> License
Licensed under <br /> [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://mit-license.org/).
