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

        deleteUser(req,res) {
            User.findOneAndDelete({ _id: req.params.userId })
            .then((user) =>
            !user
                ? res.status(404).json({ message: "No User found wit this ID"})
                : Thought.deleteMany({ _id: { $in: user.thoughts}})
                )
                .then(() => res.json({ message: "User thought deleted"}))
                .catch((err) => res.status(500).json(err));
        },

        addFriend(req,res) {
            User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends:req.params.friendId}},
                { runValidators: true, new:true }
                
            )
            .then((user) =>
            !user
            ? re.status(404).json({ message: "No user found with this ID"})
            : res.json(user)
            .catch((err) => res.status(500).json(err)));
        },
        deleteFriend(req,res) {
            User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: req.params.friendId }},
                { new: true }
            )
            .then(
                ((user) =>
                !user
                    ? res.status(404).json({ message:"No user found with ID"})
                    : res.json(user)
                    )
                    .catch((err) => res.status(500).json(err))
            )
            
        },

    };
