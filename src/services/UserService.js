
const login = (username, password) => {
    return fetch("http://localhost:8080/api/login", {
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
    return fetch("http://localhost:8080/api/register", {
        body: JSON.stringify(newUser),
        headers: {
            'content-type': 'application/json'
        },
        method: 'POST',
        credentials: "include"
    }).then(response => response.json())
}

const findUserById = (uid) =>
    fetch(`http://localhost:8080/api/users/${uid}/`)
        .then(response => response.json());

const fetchProfile = () =>
    fetch("http://localhost:8080/api/profile", {
        method: 'POST',
        credentials: "include"
    })
        .then(response => {
            return response.json()
        })

export default {
    login,
    signup,
    findUserById,
    fetchProfile
}