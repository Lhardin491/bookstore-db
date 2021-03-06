# Bookstore 
#### Bookstore Frontend/Backend for CSE3330
<img src="https://raw.githubusercontent.com/Lhardin491/bookstore-db/master/img/book.png" alt="Bookstore Logo" height="200px" />

#### Created by: [Jake Nissley](https://github.com/jakenissley), [Luke Hardin](https://github.com/lhardin491), and [Andrew Hernandez](https://github.com/dreamlap)
-------------------------------------------------------------------------------------------------------------------------------------------
| Table of Contents                            |
|----------------------------------------------|
| 1. [Introduction](#intro)                    |
| 2. [Framework/Dependencies](#information)    |
| 3. [Instructions](#instructions)             |

## Introduction <a name="intro"></a>
A frontend/backend web interface designed for a project in CSE330 - Databases. This is designed for a hypothetical bookstore with the 
ability to keep track of items, customers, staff, sales, and other needs. Uses node.js and Express to connect to a SQL database.

## Framework/Dependencies <a name="information"></a>
* [jQuery](https://jquery.com/)
* [MySQL](https://www.mysql.com/)
* [Bootstrap](https://getbootstrap.com/)
* [node.js](https://nodejs.org/en/)
* [DataTables](https://datatables.net/)
* [Express](https://expressjs.com/)

## Instructions <a name="instructions"></a>
To run the program please make sure you have [node.js](https://nodejs.org/en/) installed and some sort of SQL server (preferably [MAMP](https://www.mamp.info/en/downloads/)). 
1. Install dependencies, using node.js run the following command in the '/bookstore' directory to install dependencies:
```
npm install
```
2. Then, start up your SQL server, set the port to 8889, and create a database 'BOOKSTORE', then import the database information from 'bookstore.sql' located in the main directory.
3. Using node.js, make sure you are in the '/bookstore' directory and run the command: 
```
node ./server.js
```
4. Once all of the backend is up and running, go ahead and open the home.html file with any web browser located in the '/bookstore' 
directory and everything should be running!
