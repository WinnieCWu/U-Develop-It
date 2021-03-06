const express = require('express');
const router = express.Router();
// const apiRoutes = require('./routes/apiRoutes');

router.use(require('./candidateRoutes'));
router.use(require('./partyRoutes'));
router.use(require('./voterRoutes'));
router.use(require('./voteRoutes'));

module.exports = router;