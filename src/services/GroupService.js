const findGroupById = (groupId) =>
    fetch(`http://localhost:8080/api/studygroups/${groupId}/`)
        .then(response => response.json());

export default {
    findGroupById
}