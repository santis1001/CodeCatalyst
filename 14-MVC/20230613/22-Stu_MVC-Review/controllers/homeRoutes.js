const router = require('express').Router();
const User = require('../models/User');
router.get('/', async (req, res) => {
  // TODO: Render template with Sequelize data
  try {
    const UserData = await User.findAll(
      {
        attributes: { exclude: ['password'] },
        order: [['name', 'ASC']]
      }
    );
    const users = UserData.map((project) => project.get({ plain: true }));
    res.render('homepage', { users });

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
