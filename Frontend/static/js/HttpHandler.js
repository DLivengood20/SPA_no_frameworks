const url = "http://localhost:32501/";

export async function getPost(id) {
    const target = url + "posts/" + id;
    return await $.get(target).then(post => {
        return post.post;
    }).then(
        data => {
            return data;
        }
    );
}