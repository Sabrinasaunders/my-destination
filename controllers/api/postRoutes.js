const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,

      user_id: req.session.user_id,
    });

    res
      .status(201)
      .json({ message: "Post created successfully", data: newPost });
  } catch (err) {
    console.error(err); // Improved error logging
    res
      .status(400)
      .json({ message: "Error creating post", error: err.message });
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: "No Travel post found with this id!" });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    console.error(err); // Improved error logging
    res
      .status(500)
      .json({ message: "Error deleting post", error: err.message });
  }
});

module.exports = router;
