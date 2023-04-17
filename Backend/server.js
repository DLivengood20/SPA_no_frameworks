const http = require('http');
const { getPosts, getPostById } = require("./controllers/PostController");

const server = http.createServer((req, res) => {
    if(req.url === '/posts' && req.method === "GET"){
        getPosts(req, res);
    } else if(req.url.match(/\/posts\/([0-9]+)/) && req.method === "GET"){
        const id = req.url.split("/")[2];
        console.log(id);
        getPostById(req, res, id);
    };
});

const PORT = process.env.PORT || 32501;

server.listen(PORT, () => {
    console.log("Server running on port: " + PORT);
});