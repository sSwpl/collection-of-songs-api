const express = require('express');
const router = express.Router();
const collectionOfSongsService = require('../service/collectionOfSongsService');

router.get('/', async function(req, res, next) {
  try {
    res.json(await collectionOfSongsService.getAll());
  } catch (error) {
    console.error(`Error while fetching map data.`, error.message);
	next(error);
  }
});

router.post('/', async function(req, res, next) {
  try {
	res.json(await collectionOfSongsService.save(req.body));
  } catch (err) {
    console.error('Songs data saving error.', err.message);
	next(err);
  }
});

router.delete('/', async function(req, res, next) {
  try {
    res.json(await collectionOfSongsService.del(req.body));
  } catch (err) {
    console.error('Songs data delete error.', err.message);
	next(err);
  }
});

router.put('/', async function(req, res, next) {
  try {
	res.json(await collectionOfSongsService.edit(req.body));
  } catch (err) {
	console.error('Songs data edit error.', err.message);
	next(err);
  }
});

module.exports = router;