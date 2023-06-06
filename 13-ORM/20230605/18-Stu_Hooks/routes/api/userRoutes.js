const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');

// GET one user
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST create a new user
router.post('/', async (req, res) => {
  try {
    const new_user = req.body;
    new_user.password = await bcrypt.hash(req.body.password, 10);
    const userData = await User.create(new_user);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT update a user
router.put('/:id/password/:password', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: 'Login failed. Please try again!' });
      return;
    }
    const old_password = req.query.password;

    const isPassword = await bcrypt.compare(
      old_password,
      userData.password
    );
    console.log(old_password);
    if (!isPassword) {
      res.status(400).json({ message: 'Password do not Match' });
      return;
    }
    const new_user = req.body;
    new_user.password = await bcrypt.hash(req.body.password, 10);

    userData = await User.update(new_user, {
      where: {
        id: req.params.id,
      },
      individualHooks: true
    });
    if (!userData[0]) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
