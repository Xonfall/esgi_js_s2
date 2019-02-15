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

export const callEvent = (title, dispatch) => {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    fetch('http://localhost:3000/events', {
        method: 'GET',
        mode: 'cors',
        headers: myHeaders,
    })
        .then(response => dispatch(getEvents(response.json())))
        .catch(error => console.log(error));

    return {
        type: 'REQUEST_GET_EVENTS',
        payload: {}
    }
};

export const addEvent = (title, dispatch) => {
    const data = {title};
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    fetch('http://localhost:3000/events', {
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