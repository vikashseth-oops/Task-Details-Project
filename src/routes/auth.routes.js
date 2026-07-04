const express = require('express');
const authController = require('../controllers/auth.controller');
const { redirectIfAuthenticated } = require('../middleware/auth.middleware');

const router = express.Router();

router.get('/login', redirectIfAuthenticated, authController.getLogin);
router.post('/login', redirectIfAuthenticated, authController.postLogin);
router.get('/register', redirectIfAuthenticated, authController.getRegister);
router.post('/register', redirectIfAuthenticated, authController.postRegister);
router.post('/logout', authController.postLogout);

module.exports = router;
