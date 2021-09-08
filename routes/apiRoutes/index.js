const router = require('express').Router();
const zookeeperRoutes = require('./zookeeperRoutes');
const animalRoutes = require('./animalRoutes');


router.use(animalRoutes);
router.use(zookeeperRoutes);


module.exports = router;