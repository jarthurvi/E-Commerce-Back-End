const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  try{
    const tagData = await Tag.findAll({
      include: [Product]
    })
    res.status(200).json(tagData)
  } catch(err){
    res.status(500).json(err)
  }
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  try{
    const tagData = await Tag.findOne({
      include: [Product]
    })
    res.status(200).json(categoryData)
  } catch(err){
    res.status(500).json(err)
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  try{
    const categoryData = await Tag.create({
      include: [Product]
    })
    res.status(200).json(categoryData)
  } catch(err){
    res.status(500).json(err)
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  try{
    const categoryData = await Tag.update({
      include: [Product]
    })
    res.status(200).json(categoryData)
  } catch(err){
    res.status(500).json(err)
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try{
    const categoryData = await Category.delete({
      include: [Product]
    })
    res.status(200).json(categoryData)
  } catch(err){
    res.status(500).json(err)
  }
});

module.exports = router;
