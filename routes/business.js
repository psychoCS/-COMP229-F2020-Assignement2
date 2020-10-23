/* 
  COMP 229 - Web Application Development (SEC. 003)
  Fall 2020 - Assignment 1
  Thiago Luiz Batista - Student Number 301110966
  Work completed on 09/10/2020
  business.js Assignment 1 File
*/

let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');

let Business = require('../models/business');

/* GET Business Contacts page. */
router.get('/', function (req, res, next) {
  
  Business.Model.find( (err, data) =>{
    if(err){
      console.error(err);
      res.end()
    }
   
    console.table(data, ['contactLastName', 'contactFirstName','contactNumber', 'emailAddress']);

    res.render('business', {
      title: 'Business Contacts', business: data });
  });
});

/* GET Add page. */
router.get('/add', (req, res, next) => {

});

/* POST process the Add page. CREATE */
router.post('/add', (req, res, next) => {

});


/* GET Edit page */
router.get('/edit/:id', (req, res, next) => {

});


/* POST process the Edit page */
router.post('/edit/:id', (req, res, next) => {

});

/* GET process the Delete page */
router.get('/delete/:id', (req, res, next) => {

});

module.exports = router;