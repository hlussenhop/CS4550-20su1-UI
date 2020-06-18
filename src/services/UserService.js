
const login = () => {
    return fetch("http://neustudyserver.herokuapp.com/api/login", {
        body: JSON.stringify({
            username: this.state.username,
            password: this.state.password
        }),
        headers: {
            'content-type': 'application/json'
        },
        method: 'POST',
        credentials: "include"
    }).then(response => response.json())
}

export default {
    login
}