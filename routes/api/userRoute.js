const router = require('express').Router();
const {
    getUser,
    getSingleUser,
    createUser,
    updateUser,
    

} = require('../../controllers/userController');


//http://localhost:3001/api/users/

router.route('/').get(getUser).post(createUser);

//http://localhost:3001/api/users/:userId
router.route('/:userId')
.get(getSingleUser)
.put(updateUser)

//http://localhost:3001/api/users/:userId/friends/:friendsId

//router.route('/:userId/friends/:friendsId'
//.post(addFriend)
//)

module.exports = router;

