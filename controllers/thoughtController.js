const { User, Thought } = require("../models");

module.exports = {
    getThought(req, res) {
        Thought.find()
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));

    },
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select("-__v")
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: "No thought found" })
                    : res.json(thought)

            )


            .catch((err) => res.status(500).json(err));
    },
    createThought(req, res) {
        console.log(req.body)
        Thought.create(req.body)
            .then((thought) => {
                res.json(thought)
                // return User.findOneAndUpdate(
                //     { _id: req.body.userId },
                //     { $push: { thoughts: _id } },
                //     { new: true }
                // );
            })
            // .then((thought) => {
            //     console.log(thought)
            //     !thought
            //     ? res.status(404).json({ message: "No user found" })
            //     : res.json(thought)
            // }
                
            // )
            .catch((err) => res.status(500).json(err));
    },
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, New: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: "No thought found" })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: "No thought with ID" })
                    : User.findOneAndUpdate(
                        { thoughts: req.params.thoughtId },
                        { $pull: { thoughts: req.params.thoughtId } },
                        { new: true }
                    )
            )
            .then((User) =>
                !user
                    ? res.status(404).json({ message: 'Thought deleted, but no user' })
                    : res.json({ message: 'Thought Deleted' })
            )
            .catch((err) => res.status(500).json(err));
    },


    createReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: "No thoughts found" })
                    : req.json(thought)

            )
            .catch((err) => res.status(500).json(err));
    },

    deleteReaction(req,res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId},
            { $pull: {reactions: {reactionId: req.params.reactionId}}},
            { runValidators: true, new: true}

        )
        .then((thought) =>
        !thought
            ? res.status(404).json({ message: "No thought with this ID"})
            : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },


};