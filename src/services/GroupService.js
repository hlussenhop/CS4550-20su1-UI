const findGroupById = (groupId) =>
    fetch(`https://neustudyserver.herokuapp.com/api/studygroups/${groupId}/`)
        .then(response => response.json());

const findAllGroups = () =>
    fetch(`https://neustudyserver.herokuapp.com/api/studygroups`)
        .then(response => response.json());

const updateGroup = (groupId, group) =>
    fetch(`https://neustudyserver.herokuapp.com/api/studygroups/${groupId}/`, {
        method: 'PUT',
        body: JSON.stringify(group),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json);

const createGroup = (group) =>
    fetch(`https://neustudyserver.herokuapp.com/api/studygroups`, {
        method: 'POST',
        body: JSON.stringify(group),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json);

export default {
    findGroupById,
    findAllGroups,
    updateGroup,
    createGroup
}