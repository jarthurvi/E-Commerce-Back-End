const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
 try{
   const categoryData = await Category.findAll({
     include: [Product]
   })
   res.status(200).json(categoryData)
 } catch(err){
   res.status(500).json(err)
 }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  try{
    const categoryData = await Category.findOne({
      include: [Product]
    })
    res.status(200).json(categoryData)
  } catch(err){
    res.status(500).json(err)
  }
 });
  // be sure to include its associated Products


router.post('/', (req, res) => {
  // create a new category
  try{
    const categoryData = await Category.create({
      include: [Product]
    })
    res.status(200).json(categoryData)
  } catch(err){
    res.status(500).json(err)
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try{
    const categoryData = await Category.update({
      include: [Product]
    })
    res.status(200).json(categoryData)
  } catch(err){
    res.status(500).json(err)
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
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
