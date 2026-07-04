const express = require('express');
const taskController = require('../controllers/task.controller');
const { protect } = require('../middleware/auth.middleware');

const router = express.Router();

router.use(protect);

router.get('/', taskController.getTasks);
router.post('/tasks', taskController.createTask);
router.get('/tasks/:id', taskController.getTask);
router.get('/tasks/:id/edit', taskController.getEditTask);
router.post('/tasks/:id', taskController.updateTask);
router.post('/tasks/:id/delete', taskController.deleteTask);

module.exports = router;
