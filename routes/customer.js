var express = require('express');
var connection = require('../dbConnection');
var router = express.Router();

router.get('/all', function (req, res) {
  const query = "SELECT * FROM customer";
  connection.query(query, function (err, rows, fields) {
    if (err) {
      //console.log(err);
      res.status(400).send("customer/all error: error retrieving customer table");
    } else {
      if (rows.length > 0) {
        let returnData = {}; 
        returnData['sEcho'] = 1;
        returnData['iTotalRecords'] = rows.length;
        returnData['iTotalDisplayRecords'] = rows.length;
        returnData['data'] = rows;
        res.send(JSON.stringify(returnData));
      } else {
        res.status(204).send("No Content.")
      }
    }
  });
});

// Inserts customer into database
router.post('/', function (req, res) {
  var newCustomer = {
    Name: req.body.name,
    Id_no: "default", //mysql handles what id to give customer
    Phone_no: req.body.phone,
    Address: req.body.address,
    Username: req.body.username,
    Password: req.body.password,
    //Created_date: "NOW()", // mysql command for current date
    Email: req.body.email
  };

  if (newCustomer.Name == "" || newCustomer.Phone_no == "" || newCustomer.Address == "" || newCustomer.Username == "" || newCustomer.Password == ""
    || newCustomer.Email == "") {
    res.status(406).send("Blank input.");
  }
  else {
    connection.query('INSERT INTO customer SET ?', newCustomer, function (err, resp) {
      if (err) {
        console.log(err);
        res.status(400).send("Insertion error.");
      } else {
        res.send('Save succesfull');
      }
    });
  }
});

router.put('/', function (req, res) {
  console.log('got here');
  res.send('complete');
});
module.exports = router;
