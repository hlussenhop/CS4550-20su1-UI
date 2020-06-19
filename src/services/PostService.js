const findPostsByStudyGroup = (gid) =>
    fetch(`https://neustudyserver.herokuapp.com/api/studygroups/${gid}/posts`)
        .then(response => response.json());

const findPostById = (pid) =>
    fetch(`https://neustudyserver.herokuapp.com/api/posts/${pid}`);

const findAllPosts = () =>
    fetch(`https://neustudyserver.herokuapp.com/api/posts/`)
        .then(response => response.json());


const updatePost = (pid, post) =>
    fetch(`https://neustudyserver.herokuapp.com/api/posts/${pid}`, {
        method: 'PUT', body: JSON.stringify(post),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const createPost = (gid, post) =>
    fetch(`https://neustudyserver.herokuapp.com/api/studygroups/${gid}/posts`,{
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

const deletePost = (pid) =>
    fetch(`https://neustudyserver.herokuapp.com/api/posts/${pid}`, {
        method: 'DELETE'
    })
        .then(response => response.json());

export default {
    findPostsByStudyGroup,
    findPostById,
    findAllPosts,
    createPost,
    updatePost,
    deletePost
}