const router = require('express').Router();
const users = require("./api/users");
const tickets = require("./api/tickets");

router.use('/api/users', users);
router.use('/api/tickets', tickets);

module.exports = router