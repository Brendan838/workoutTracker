const router = require('express').Router();
const home = require('./home');
const stats =require('./stats')
const exercise = require('./exercise')
const api = require('./api')

router.use('/', home);
router.use('/exercise', exercise);
router.use('/stats', stats);
router.use('/api', api);

module.exports = router;



