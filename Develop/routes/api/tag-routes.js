const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findAll();
    res.status(200).json(tags);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tag = await Tag.findOne({
      where: { id: req.params.id },
      include: [Product],
    });
    res.status(200).json(tag);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }

});

router.post("/", async (req, res) => {
  try {
    const tag = new Tag(req.body);
    await tag.save();
    res.status(200).json(tag);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tag = await Tag.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json(tag);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!tag) {
      res.status(404).json({ message: "Tag not found" });
      return;
    }
    res.status(200).json({ message: "Tag deleted" });
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

module.exports = router;