const findPostsByStudyGroup = (gid) =>
    fetch(`http://localhost:8080//api/studygroups/${gid}/posts`)
        .then(response => response.json());

const findPostById = (pid) =>
    fetch(`http://localhost:8080//api/posts/${pid}`);

const updatePost = (pid, post) =>
    fetch(`http://localhost:8080//api/posts/${pid}`, {
        method: 'PUT', body: JSON.stringify(post),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const createPost = (gid, post) =>
    fetch(`http://localhost:8080/api/studygroups/${gid}/posts`,{
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

const deletePost = (pid) =>
    fetch(`http://localhost:8080//api/posts/${pid}`, {
        method: 'DELETE'
    })
        .then(response => response.json());

export default {
    findPostsByStudyGroup,
    findPostById,
    createPost,
    updatePost,
    deletePost
}