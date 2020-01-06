const express = require("express");
const router = express.Router();
const Ticket = require('../../models/Ticket');

//Create Ticket
router.route('/').post((req, res, next) => {
  Ticket.create(req.body, (error, data) => {
    if(error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

//Read Tickets
router.route('/').get((req, res) => {
  Ticket.find((error, data) => {
    if(error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

//Get One Ticket
router.route('/edit-ticket/:id').get((req, res) => {
  Ticket.findById(req.params.id, (error, data) => {
    if(error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

//Update Ticket
router.route('/update-ticket/:id').put((req, res, next) => {
  Ticket.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if(error) {
      return next(error);
    } else {
      res.json(data);
      console.log('Ticket updated successfully.')
    }
  });
});

//Delete Ticket
router.route('/delete-ticket/:id').delete((req, res, next) => {
  Ticket.findByIdAndRemove(req.params.id, (error, data) => {
    if(error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data
      })
    }
  });
});

module.exports = router
  
