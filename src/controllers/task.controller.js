const Task = require('../models/Task');

const getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.render('tasks/index', { user: req.user, tasks });
};

const createTask = async (req, res) => {
  const { title, details } = req.body;

  if (!title || !details) {
    const tasks = await Task.find({ user: req.user._id }).sort({ createdAt: -1 });
    return res.render('tasks/index', {
      user: req.user,
      tasks,
      error: 'Title and details are required.',
    });
  }

  await Task.create({
    title,
    details,
    user: req.user._id,
  });

  res.redirect('/');
};

const getTask = async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id, user: req.user._id });

  if (!task) {
    return res.redirect('/');
  }

  res.render('tasks/show', { user: req.user, task });
};

const getEditTask = async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id, user: req.user._id });

  if (!task) {
    return res.redirect('/');
  }

  res.render('tasks/edit', { user: req.user, task, error: null });
};

const updateTask = async (req, res) => {
  const { title, details } = req.body;
  const task = await Task.findOne({ _id: req.params.id, user: req.user._id });

  if (!task) {
    return res.redirect('/');
  }

  if (!title || !details) {
    return res.render('tasks/edit', {
      user: req.user,
      task,
      error: 'Title and details are required.',
    });
  }

  task.title = title;
  task.details = details;
  await task.save();

  res.redirect(`/tasks/${task._id}`);
};

const deleteTask = async (req, res) => {
  await Task.findOneAndDelete({ _id: req.params.id, user: req.user._id });
  res.redirect('/');
};

module.exports = {
  getTasks,
  createTask,
  getTask,
  getEditTask,
  updateTask,
  deleteTask,
};
