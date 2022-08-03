const router = require ('express').Router();
const thoughtsRoute = require ('./thoughtRoute');
const usersRoute = require('./userRoute');
//http://localhost:3001/api/users
router.use ('/thoughts', thoughtsRoute);
router.use('/users', usersRoute);

module.exports = router;