function findAll() {
    console.log("PostModel.findAll called")
    return new Promise((resolve, reject) => {
        resolve("POST");
    });
};

function findById(id) {
    console.log("PostModel.findById called")
    return new Promise((resolve, reject) => {
        resolve(JSON.stringify({post: id}));
    });
}

module.exports = {
    findAll,
    findById
}