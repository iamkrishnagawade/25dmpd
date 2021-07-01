<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/iamkrishnagawade/25dmpd">
      <img src="images/logo.png" alt="Logo" width="80" height="80">
   </a>
  <h3 align="center">App - Stock Market Tracker - 25DMPD - [In Development]</h3>
  <p align="center">
    This is my first project on Github, and it is quite fun.
  </p>
</p>




<!-- ABOUT THE PROJECT -->
## About The Project
The idea behind this project is to track the stock prices UP and DOWN and collect news, make the relation between news and price, and find out why the prices are changing. 

### Key features 
* See all prices info on one page.

### Built With
* [React JS](https://reactjs.org)
* [Node JS](https://nodejs.org/en)
* [Express](http://expressjs.com)
* [Bootstrap](https://react-bootstrap.github.io)
* [MySQL](https://www.mysql.com)

### First Look
![Test Image 1](images/Mobile-View.png)


<!-- GETTING STARTED -->
## Getting Started
To get a local copy up and running follow these simple steps.

### Prerequisites
You need Node JS, MySQL. you must create new databases.

* npm
  ```sh
  npm install npm@latest -g
  ```
  
### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:iamkrishnagawade/25dmpd.git
   ```
2. Install NPM packages
   ```sh
   npm run all-install
   ```
3. Enter your API in `db.config.js`
   ```JS
   const HOST = 'ENTER YOUR HOST';
   const USER = 'ENTER YOUR USER';
   const PASSWORD = 'ENTER YOUR PASSWORD';
   const DB = 'ENTER YOUR DBNAME';
   ```

<!-- USAGE EXAMPLES -->
## Usage

### Steps

1. For run Client and Server
   ```sh
   npm start
   ```
2. For Service
   ```sh
   npm run service-spy-pricefeeds
   ```
3. Add your companies in `service.config.js`
   ```JS
   companies: [
            { dispId: 'ICI02', seType: 'BSE' },
            { dispId: 'ICI02', seType: 'NSE' },
            { dispId: 'IEI01', seType: 'BSE' },
            { dispId: 'IEI01', seType: 'NSE' },
            { dispId: 'IG04', seType: 'BSE' },
            { dispId: 'IG04', seType: 'NSE' },
        ]
   ```
