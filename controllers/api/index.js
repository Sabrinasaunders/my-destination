const router = require('express').Router();
const userRoutes = require('./userRoutes');
const TravelPostRoutes = require('./TravelPostRoutes');

router.use('/users', userRoutes);
router.use('/TravelPosts', TravelPostRoutes);

module.exports = router;
