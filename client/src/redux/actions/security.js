const logUser = (data) => {
    return {
        type: 'LOGIN',
        payload: data
    }
}

const registerUser = (data) => {
    return {
        type: 'REGISTER',
        payload: data
    }
}

export const login = (email, password, dispatch) => {
    const data = {email, password};
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    fetch('http://localhost:3000/login_check', {
        method: 'POST',
        mode: 'cors',
        headers: myHeaders,
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => dispatch(logUser(data)))
    .catch(error => console.log(error))

    return {
        type: 'REQUEST_LOGIN',
        payload: {}
    }
};

export const register = (fisrstName, lastName, email, password, dispatch) => {
    const data = {fisrstName, lastName, email, password};
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    fetch('http://localhost:3000/register', {
        method: 'POST',
        mode: 'cors',
        headers: myHeaders,
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => dispatch(registerUser(data)))
    .catch(error => console.log(error))

    return {
        type: 'REQUEST_REGISTER',
        payload: {}
    }
}