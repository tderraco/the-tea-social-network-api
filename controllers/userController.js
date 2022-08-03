const {User, Thought} = require("../models");

module.exports = {
    //get users
    getUser(req,res) {
        User.find({})
        .then ((user) + res.json(user))
        .catch((err) => res.status(500).json(err));

    },
    getSingleUser(req,res) {
        User.findOne({ _is: req.params.userId })
        .populate("thoughts")
        .populate("friends")
        .select("-__v")
        .then((user) => 
        !user
        ? res.status(404).json({ message: "No user found"})
        : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },

    createUser(req, res) {
       User.create(req, body)
            .then((user) =>
           req.json(user))
           .catch((err) => {
            console.log(err);
            return res.status(500).jacon(err);
           });
        },
        updateUser(req, res) {
            User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runvalidators: true, new:true}
            )
            .then((user) =>
            !user
            ? res.status(404).json({message:"No user found"})
            : req.json(user)
            
            )
            .catch((err) => res.status(500).json(err));
        },

    }
