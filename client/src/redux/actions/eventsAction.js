const getEvents = (data) => {
    return {
        type: 'GET_EVENTS',
        payload: data
    }
};

const postEvent = (data) => {
    return {
        type: 'POST_EVENT',
        payload: data
    }
};

export const callEvent = (dispatch) => {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    fetch('http://localhost:3000/events', {
        method: 'GET',
        mode: 'cors',
        headers: myHeaders,
    })
        .then(response => response.json())
        .then(data => dispatch(getEvents(data)))
        .catch(error => console.log(error));

    return {
        type: 'REQUEST_GET_EVENTS',
        payload: {}
    }
};

export const addEvent = (data, dispatch) => {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    fetch('http://localhost:3000/events/create', {
        method: 'POST',
        mode: 'cors',
        headers: myHeaders,
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => dispatch(postEvent(data)))
        .catch(error => console.log(error));

    return {
        type: 'REQUEST_POST_EVENT',
        payload: {}
    }
};