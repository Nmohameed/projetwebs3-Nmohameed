//import the Module we need 
const express = require('express');
const objectChoice = require('../models/objectChoice'); // import the objectChoice modele
const router = express.Router();
const User = require('../models/user')
const mongoose = require('mongoose')
const db = 'mongodb://photographe-setting:hammouda55@ds247410.mlab.com:47410/photographe-setting' //I link my Database  

mongoose.connect(db, err => {  // I'm connected to mongodb

    if (err) {
        console.error('Error !' + err)
    } else {
        console.log('Connected to mangodb')
    }
})


router.get('/', (req, res) => {

    res.send('From api routes')
})


//Request Post for registration
router.post('/register', (req, res) => {

    let userData = req.body // holds parameters that are sent up from the client as part of a POST request and put it into UserData
    userData.email = userData.email.toLowerCase();
    let user = new User(userData) // create a new user
    user.save((error, registeredUser) => {  //save user in registeredUser information and send him into the database
        console.log(user);
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(registeredUser) //send register User data 
        }
    })
})



//Request Post for login User
router.post('/login', (req, res) => {
    let userData = req.body
    User.findOne({ email: userData.email.toLowerCase() }, (error, user) => { //find the email user if it's the same thing into the database 

        if (error) {
            console.log(error)
        } else {
            if (!user) {
                res.status(401).send('invalid E-mail') //if the email does not exist send message 'invalid e-mail'
            } else
                if (user.password !== userData.password) {
                    res.status(401).send('invalid password') //check the password if its the same into the database
                } else {
                    res.status(200).send(user)
                }
        }
    })
})



//Request Delete for deleting User account
router.delete('/account/:id', function (req, res) {

    User.findByIdAndRemove(req.params.id, function (err, user) { //find the id of user into the database and remove it
        if (err)
            return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User was deleted succefsfuly ");
    });
});



//Request Put for Modification User account
router.put('/account', (req, res) => {
    let userData = req.body
    User.findById(userData.id, (error, user) => { //find the user with her ID with the function findByID

        if (error) {      //testing if an error            
            console.log(error)
        } else {   
            user.email = userData.email;  // else updating email client       
            user.password = userData.password;  //and updating password client
            user.save(function (err) {   //save the new information into user object 
                if (err) {
                    res.send(err);
                }
                res.send({ message: 'account update succefuly' })
            })
        }
    })
})



//Request Post for adding a camera setting
router.post('/addCamera', (req, res) => {
    let choiceData = req.body
    let newObjectChoice = new objectChoice(choiceData); //creat a new objectChoice that is my modele and in parametre put the 

    newObjectChoice.save((err, Choice) => { // save the newObjectChoice information that the user choose it into adding camera 
        if (err) {
            console.log(err);
        } else {
            console.log(Choice);
            User.findOne({ _id: choiceData.creator }, (err, user) => { //find the user that id match with choiceData information 
                console.log(user);
                user.tableChoice.push(Choice); //push my data choice into tableChoice wich is my table who refer to my objectChoice modele
            })
        }
    })
    res.send('Device created seccufuly')
})



//Request Post for updating a camera setting
router.post('/update-setting', (req, res) => {
    let choiceData = req.body;
    objectChoice.findOne({markCamera:choiceData.mark, modelCamera: choiceData.model,typePhoto:choiceData.type,placePhoto:choiceData.place},(err, Choice) => { // find the objectChoice that the user choose it and modify it to update corresponding fields
 
        if (err) {
            console.log(err);
        } else {
            Choice.markCamera = choiceData.markCamera; 
            Choice.modelCamera = choiceData.modelCamera;
            Choice.typePhoto = choiceData.typePhoto;
            Choice.placePhoto = choiceData.placePhoto;
        } Choice.save((err)=>{ //save th new information data into choice object 
            if (err){
                console.error('Error !' + err)
            }else {
    
                res.status(200).send("updated choice")
            }    
        })
    })
})



////Request Delete for deleting a camera setting
router.delete('/setting/:markCamera/:modelCamera/:typePhoto/:placePhoto', function (req, res) {

    objectChoice.findOneAndRemove({markCamera:req.params.markCamera,modelCamera:req.params.modelCamera, typePhoto:req.params.typePhoto ,placePhoto:req.params.placePhoto}, function (err, user) { // I use the function findOneandremove to remove my choice 
        if (err)
            return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User was deleted succefsfuly ");
    });
});



//Request Get to Sort camera by place
router.get('/setting/:place', (req, res, next) => {
    let place = req.params.place;
    if (place === "all") {
        objectChoice.find(function (err, Mychoices){
            if (err) {
                res.send(err);
            }
            res.json(Mychoices);
        })
    } else {
     
        objectChoice.find({ placePhoto : place },function (err, Mychoices){
            if (err) {
                res.send(err);
            }
            res.json(Mychoices);
        })
       }
   
})



//Request Get to Sort camera by brand
router.get('/setting/:brand', (req, res) => {
    let brand = req.params.brand;
    if (brand === "all") {
        objectChoices.find(function (err, Mychoices){
            if (err) {
                res.send(err);
            }
            res.json(Mychoices);
        })
    } else {
        objectChoices.find({ markCamera : brand },function (err, Mychoices){
            if (err) {
                res.send(err);
            }
            res.json(Mychoices);

        })
    }
   
})
 

module.exports = router;

