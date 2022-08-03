const router = require('express').Router();

const {
    getThought,
    getSingleThought,
    createThought,
    createReaction

} = require('../../controller/thoughtConttroller');
const { updateThought } = require('../controllers/userThought');
const { post } = require('./api');
//get and post thought
router.route('/').get(getThought).post(createThought);
//get one thought and put by id
router.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought);

router.route('/:thoughtId/reactions')
post(createReaction);

module.exports = router
