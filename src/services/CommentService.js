const findCommentsForPost = (pid) =>
    fetch(`https://neustudyserver.herokuapp.com/api/posts/${pid}/comments`)
        .then(response => response.json());

const findCommentById = (cid) =>
    fetch(`https://neustudyserver.herokuapp.com/api/comments/${cid}`)
        .then(response => response.json());

const createComment = (cid, comment) =>
    fetch(`https://neustudyserver.herokuapp.com/api/posts/${cid}/comments`, {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

const updateComment = (cid, comment) =>
    fetch(`https://neustudyserver.herokuapp.com/api/posts/${cid}`, {
        method: 'PUT', 
        body: JSON.stringify(comment),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const deleteComment = (cid) => {
    return fetch(`https://neustudyserver.herokuapp.com/api/comments/${cid}`, {
        method: 'DELETE',
    })
    .then(response => response.json())
}

export default {
    findCommentById,
    createComment,
    findCommentsForPost,
    updateComment,
    deleteComment
}