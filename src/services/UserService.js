
const login = (username, password) => {
<<<<<<< HEAD
    return fetch("https://neustudyserver.herokuapp.com/api/login", {
=======
    return fetch("http://localhost:8080/api/login", {
>>>>>>> a0e4cc003787a99f552fc9aa412d3ee34d5a0a08
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
    fetchProfile
}