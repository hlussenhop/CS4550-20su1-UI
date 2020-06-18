const login = (username, password) => {
    return fetch("http://neustudyserver.herokuapp.com/api/login", {
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

const signup = (newUser) => {
    return fetch("http://neustudyserver.herokuapp.com/api/register", {
        body: JSON.stringify(newUser),
        headers: {
            'content-type': 'application/json'
        },
        method: 'POST',
        credentials: "include"
    }).then(response => response.json())
}

const getUserById = (uid) =>
    fetch(`http://localhost:8080/api/users/${uid}/`)
        .then(response => response.json());

export default {
    login,
    signup,
    getUserById
}