const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

// POST API to store blog details
router.post('/blogs', async (req, res) => {
    try {
        const blog = new Blog(req.body);
        await blog.save();
        res.status(201).send(blog);
    } catch (error) {
        res.status(400).send(error);
    }
});

// GET API to fetch all blogs
router.get('/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.send(blogs);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
