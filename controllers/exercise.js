const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {


res.sendFile(path.join(__dirname, "../public/exercise.html"))
});

router.post('/', (req, res) => {


});

 module.exports = router;