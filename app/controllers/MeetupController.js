//var mongoose = require('mongoose');
var Meetup = require('../models/MeetupModel');//load model

//var ObjectId = mongoose.Types.ObjectId;

exports.create = function(req,res){
    console.log(req.body);
    var meetup = new Meetup(req.body);
    meetup.save(function(err,result){
        res.json(result);
    });
};

exports.getAll = function(req,res){
    Meetup.find({},function(err,results){
        res.json(results);
    });
};

exports.get = function(req,res){

};

exports.update = function(req,res){

};

exports.delete = function(req,res){

};

