const router = require('express').Router();
const {
    getUser,
    getSingleUser,
    createUser,
    updateUser,
    

} = require('../../controllers/userControl');

router.route('/').get(getUser).post(createUser);

router.route('/:userId')
.get(getSingleUser)
.put(updateUser)

router.route('/:userId/friends/:friendsId'
.post(addFriend)
)

module.exports = router;

