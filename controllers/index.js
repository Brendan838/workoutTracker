const router = require('express').Router();
const home = require('./home');
const stats =require('./stats')
const exercise = require('./exercise')

router.use('/', home);
router.use('/exercise', exercise);
router.use('/stats', stats);

module.exports = router;



