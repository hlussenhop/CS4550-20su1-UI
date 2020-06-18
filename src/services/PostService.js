const findPostsByStudyGroup = (gid) =>
    fetch(`http://localhost:8080/api/studygroups/${gid}/posts`)
        .then(response => response.json());

const findPostById = (pid) =>
    fetch(`http://localhost:8080/api/posts/${pid}`);

const updatePost = (pid, post) =>
    fetch(`https://tranquil-castle-29276.herokuapp.com/` + `http://localhost:8080/api/posts/${pid}`, {

    })

const createPost = (gid, post) =>
    fetch(`http://localhost:8080/api/studygroups/${gid}/posts`,{
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export default {
    findPostsByStudyGroup,
    findPostById,
    createPost
}