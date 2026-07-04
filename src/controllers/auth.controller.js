const User = require('../models/User');
const { signToken, setAuthCookie, clearAuthCookie } = require('../middleware/auth.middleware');

const getLogin = (req, res) => {
  res.render('auth/login', { error: null });
};

const getRegister = (req, res) => {
  res.render('auth/register', { error: null });
};

const postRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.render('auth/register', { error: 'All fields are required.' });
    }

    if (password.length < 6) {
      return res.render('auth/register', { error: 'Password must be at least 6 characters.' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.render('auth/register', { error: 'Email is already registered.' });
    }

    const user = await User.create({ name, email, password });
    const token = signToken(user._id);
    setAuthCookie(res, token);

    res.redirect('/');
  } catch {
    res.render('auth/register', { error: 'Something went wrong. Please try again.' });
  }
};

const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.render('auth/login', { error: 'Email and password are required.' });
    }

    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.render('auth/login', { error: 'Invalid email or password.' });
    }

    const token = signToken(user._id);
    setAuthCookie(res, token);

    res.redirect('/');
  } catch {
    res.render('auth/login', { error: 'Something went wrong. Please try again.' });
  }
};

const postLogout = (req, res) => {
  clearAuthCookie(res);
  res.redirect('/login');
};

module.exports = {
  getLogin,
  getRegister,
  postRegister,
  postLogin,
  postLogout,
};
