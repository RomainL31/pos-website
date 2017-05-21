// app/routes.js

// grab the nerd model we just created
var User = require('./models/user');
var Picture = require('./models/picture');
var Message = require('./models/message');
var path = require('path');
var express = require('express');
var router = express.Router();


module.exports = function(app) {

// server routes ===========================================================
     
// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// **************************************************** //
// routes to handle Users
// **************************************************** //

router.route('/users')

        .post( function(req, res) {
            // create a new instance of the User model
            var user = new User(); 

            console.log(req.body.name);
            // set the user name (comes from the request)
            user.name = req.body.name;  

            // save the user and check for errors
            user.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'User created!' });
            });
        })

        .get( function(req, res) {
            // use mongoose to get all users in the database
            User.find(function(err, users) {

                // if there is an error retrieving, send the error. 
                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(users); // return all users in JSON format
            });
        });

router.route('/users/:user_id')

        .get( function(req, res) {
            User.findById(req.params.user_id, function(err, user) {
                if (err)
                    res.send(err);
                res.json(user);
            });
        })

        .put( function(req, res) {
            // use our user model to find the user we want
            User.findById(req.params.user_id, function(err, user) {

                if (err)
                    res.send(err);

                // update the user's info
                user.name = req.body.name;  

                // save the user
                user.save(function(err) {
                    if (err)
                        res.send(err);

                    res.json({ message: 'User updated!' });
                });

            });
        })

        .delete(function(req, res) {
            User.remove({
                _id: req.params.user_id
            }, function(err, user) {
                if (err)
                    res.send(err);

                res.json({ message: 'Successfully deleted' });
            });
        });

// **************************************************** //
// routes to handle Pictures
// **************************************************** //

router.route('/pictures')
        .post( function(req, res) {
            // create a new instance of the Picture model
            var picture = new Picture(); 

            // set the picture name (comes from the request)
            picture.name = req.body.name;  

            // save the picture and check for errors
            picture.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Picture created!' });
            });
        })

        .get( function(req, res) {
            // use mongoose to get all users in the database
            Picture.find(function(err, users) {

                // if there is an error retrieving, send the error. 
                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(users); // return all users in JSON format
            });
        });

router.route('/users/:picture_id')

        .get( function(req, res) {
            Picture.findById(req.params.picture_id, function(err, picture) {
                if (err)
                    res.send(err);
                res.json(picture);
            });
        })

        .put( function(req, res) {
            // use our picture model to find the picture we want
            Picture.findById(req.params.picture_id, function(err, picture) {

                if (err)
                    res.send(err);

                // update the picture's info
                picture.name = req.body.name;  

                // save the picture
                picture.save(function(err) {
                    if (err)
                        res.send(err);

                    res.json({ message: 'Picture updated!' });
                });

            });
        })

        .delete(function(req, res) {
            Picture.remove({
                _id: req.params.picture_id
            }, function(err, picture) {
                if (err)
                    res.send(err);

                res.json({ message: 'Successfully deleted' });
            });
        });

// **************************************************** //
// routes to handle Messages
// **************************************************** //

router.route('/messages')
        .post( function(req, res) {
            // create a new instance of the Message model
            var message = new Message(); 

            // set the message name (comes from the request)
            message.name = req.body.name;  

            // save the message and check for errors
            message.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Message created!' });
            });
        })

        .get( function(req, res) {
            // use mongoose to get all users in the database
            Message.find(function(err, users) {

                // if there is an error retrieving, send the error. 
                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(users); // return all users in JSON format
            });
        });

router.route('/users/:message_id')

        .get( function(req, res) {
            Message.findById(req.params.message_id, function(err, message) {
                if (err)
                    res.send(err);
                res.json(message);
            });
        })

        .put( function(req, res) {
            // use our message model to find the message we want
            Message.findById(req.params.message_id, function(err, message) {

                if (err)
                    res.send(err);

                // update the message's info
                message.name = req.body.name;  

                // save the message
                message.save(function(err) {
                    if (err)
                        res.send(err);

                    res.json({ message: 'Message updated!' });
                });

            });
        })

        .delete(function(req, res) {
            Message.remove({
                _id: req.params.message_id
            }, function(err, message) {
                if (err)
                    res.send(err);

                res.json({ message: 'Successfully deleted' });
            });
        });


// front-end routes ===========================================================

 app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html'); // load our public/index.html file
        });

// register our routes ========================================================

// all of our routes will be prefixed with /api
app.use('/api', router);

};