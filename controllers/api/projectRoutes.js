const router = require('express').Router();
const { TravelPost } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newTravelPost = await TravelPost.create({
      ...req.body,
    
      user_id: req.session.user_id,
    });

    res.status(200).json(newTravelPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const TravelPostData = await TravelPost.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!TravelPostData) {
      res.status(404).json({ message: 'No Travel post found with this id!' });
      return;
    }

    res.status(200).json(TravelPostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
