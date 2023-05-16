const express = require('express');
const commentController = require('../controllers/commentController');
const postController = require('../controllers/postController');

const router = express.Router();

// Define the routes
router.get('/comments', commentController.getComments);
router.get('/posts', postController.getPosts);

module.exports = router;
