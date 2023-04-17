const Post = require("../models/PostModel");

async function getPosts(req, res) {
    try {
        const response = await Post.findAll();
        res.writeHead(200, {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        });
        res.end(JSON.stringify({ posts: response }));
    } catch (error) {
        console.log(error);
    }
}

async function getPostById(req, res, id) {
    try {
        const response = await Post.findById(id);
        res.writeHead(200, {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        });
        res.end(response);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getPosts,
    getPostById
}