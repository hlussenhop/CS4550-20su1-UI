const findCommentsForPost = (pid) =>
    fetch(`http://localhost:8080/api/posts/${pid}/comments`)
        .then(response => response.json());

const findCommentById = (cid) =>
    fetch(`http://localhost:8080/api/comments/${cid}`)
        .then(response => response.json());

const createComment = (pid, comment) =>
    fetch(`http://localhost:8080/api/posts/${pid}/comments`, {
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