const router = require('express').Router();
const { route } = require('.');
const {
  getUsers,
  getSigninUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/user-controller');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/sign-in
router.route('/sign-in').post(getSigninUser);

// /api/users/:username
router.route('/:username').put(updateUser).delete(deleteUser);

module.exports = router;
