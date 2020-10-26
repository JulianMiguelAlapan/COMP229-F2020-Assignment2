let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');

let BusinessContacts = require('../models/businessContacts');

module.exports.DisplayBusinessContactsList = (req, res, next) => {
  
    BusinessContacts.Model.find( (err, data) => {
      if(err)
      {
        console.error(err);
        res.end()
      }
  
      res.render('index', { title: 'BusinessContacts List', businessContacts: data ,
      displayName: req.user ? req.user.displayName : ''});
    });
    
  }

module.exports.DisplayAddPage = (req, res, next)=> {
    res.render('index', { title: 'Add BusinessContacts' });
}

module.exports.ProcessAddPage = (req, res, next)=> {

    // instantiate a new object of type BusinessContacts
    let businessContacts = BusinessContacts.Model({
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    BusinessContacts.Model.create(businessContacts, (err, BusinessContacts) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        res.redirect('/businessContacts-list');
    });
}

module.exports.DisplayEditPage = (req, res, next)=> {
    let id = req.params.id;

    // pass id to the db 
    BusinessContacts.Model.findById(id, (err, BusinessContactsToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        // show the edit view
        res.render('index', { title: 'Edit BusinessContacts', data: BusinessContactsToEdit,
        displayName: req.user ? req.user.displayName : '' });
    });
}

module.exports.ProcessEditPage = (req, res, next)=> {
    let id = req.params.id;

     // instantiate a new object of type BusinessContacts
     let updatedBusinessContacts = BusinessContacts.Model({
        "_id": id, 
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    BusinessContacts.Model.updateOne({_id: id}, updatedBusinessContacts, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        res.redirect('/businessContacts-list');
    });
}

module.exports.ProcessDeletePage = (req, res, next)=> {
    let id = req.params.id;

    BusinessContacts.Model.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        // Delete Contact Info
        res.redirect('/businessContacts-list');
    });
}