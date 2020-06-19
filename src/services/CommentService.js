const findCommentsForPost = (pid) =>
    fetch(`https://neustudyserver.herokuapp.com/api/posts/${pid}/comments`)
        .then(response => response.json());

const findCommentById = (cid) =>
    fetch(`https://neustudyserver.herokuapp.com/api/comments/${cid}`)
        .then(response => response.json());

const createComment = (pid, comment) =>
    fetch(`https://neustudyserver.herokuapp.com/api/posts/${pid}/comments`, {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export default {
    findCommentById,
    createComment,
    findCommentsForPost
}