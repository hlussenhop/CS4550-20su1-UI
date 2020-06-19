
const login = (username, password) => {
    return fetch("https://neustudyserver.herokuapp.com/api/login", {
        body: JSON.stringify({
            username: username,
            password: password
        }),
        headers: {
            'content-type': 'application/json'
        },
        method: 'POST',
        credentials: "include"
    }).then(response => response.json())
}

const update = (uid, updatedUser) => {
    return fetch(`https://neustudyserver.herokuapp.com/api/users/${uid}`, {
        body: JSON.stringify(updatedUser),
        headers: {
            'content-type': 'application/json'
        },
        method: 'PUT',
        credentials: "include"
    }).then(response => response.json())
}

const logout = () => {
    return fetch("https://neustudyserver.herokuapp.com/api/logout", {
        method: 'POST',
        credentials: "include"
    }).then(response => response.json())
}

const signup = (newUser) => {
    return fetch("https://neustudyserver.herokuapp.com/api/register", {
        body: JSON.stringify(newUser),
        headers: {
            'content-type': 'application/json'
        },
        method: 'POST',
        credentials: "include"
    }).then(response => response.json())
}

const findUserById = (uid) =>
    fetch(`https://neustudyserver.herokuapp.com/api/users/${uid}/`)
        .then(response => response.json());

const fetchProfile = () =>
    fetch("https://neustudyserver.herokuapp.com/api/profile", {
        method: 'GET',
        credentials: "include"
    })
        .then(response => {
            return response.json()
        })


export default {
    login,
    logout,
    signup,
    findUserById,
    fetchProfile,
    update
}