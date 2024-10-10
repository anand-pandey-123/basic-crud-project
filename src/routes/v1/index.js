const express= require("express");
const router= express.Router();
const crudRoutes = require('./crud-routes');

router.use('/crud', crudRoutes);


module.exports = router;