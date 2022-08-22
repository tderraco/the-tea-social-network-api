const router = require('express').Router();
const apiRoutes = require('./api');
//const userRoutes = require('../userRoute');


// http://localhost:3001/api
router.use('/api', apiRoutes);

//router.use("/users", userRoutes);

router.use((req, res) => {
  return res.send('Wrong route!');
});

module.exports = router;