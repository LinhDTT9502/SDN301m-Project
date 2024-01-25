const { Router } = require('express');
const router = Router();
const userControllers = require('../controllers/userControllers');
const updateUserControllers = require('../controllers/updateControllers');
router.get('/users', userControllers.getUsers);
router.get('/users/:id', userControllers.getUserById);
router.put('/users/delete', userControllers.deleteUser);
module.exports = router;
