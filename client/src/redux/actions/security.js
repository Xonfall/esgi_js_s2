const serverUrl = 'http://localhost:3000';

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
    fetch(serverUrl + '/login_check', {
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

/**
 *
 * @param firstName
 * @param lastName
 * @param email
 * @param password
 * @param dispatch
 * @returns {{payload: {}, type: string}}
 */
export const register = (firstName, lastName, email, password, dispatch) => {
    const data = {firstName, lastName, email, password};
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    fetch(serverUrl + '/register', {
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
