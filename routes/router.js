const { Router } = require('express');

const nameController = require('../controller/name');
const nameRoutes = Router()
    .get('/name',nameController.name)
    .get('/fullname',nameController.fullname);
    



module.exports = nameRoutes;
