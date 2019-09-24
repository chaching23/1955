const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = {
    index: function(req, res) {
        User.find({}, function(err, x){

            res.json({users: x});
        })
},



    delete: function(req, res) {
        User.remove({name: req.params.name}, function(err){
            console.log('removed')
        });
        res.json('User is being deleted');
        
    },



   show: function(req, res) {
    User.findOne({name: req.params.name}, function(err, x) {
        res.json( {data: x});
        });
},



    add: function(req, res) {
        var user = new User({name: req.params.name});
        user.save(function(err) {
        if(err){
            console.log("We have an error!", err);
            for(var key in err.errors){
                req.flash('registration', err.errors[key].message);
            }
            res.json('/');
        }
        else {
            res.json({data: user});
        }
    });
    },
}


    
 




