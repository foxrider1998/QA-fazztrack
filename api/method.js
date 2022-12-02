const httpCaller = require('supertest');
const serverAPI = httpCaller('http://localhost:1234');

function getUserbyId(inputId) {
    return serverAPI.get(`/v1/users/${inputId}`)
    .set('Connection','keep-alive')
    .set('Content-type','application/json');
}
function getUserbyName(inputName) {
    return serverAPI.get(`/v1/users`)
    .query({
        name : inputName,
    })
    .set('Connection','keep-alive')
    .set('Content-type','application/json');
}
function postUser(bodyRequestDataPost) {
    return serverAPI.post('/v1/users')
    .set('Connection', 'keep-alive')
    .set('Content-type', 'application/json')
    .send(bodyRequestDataPost);
}
function putUser(bodyRequestDataPut) {
    return serverAPI.put('/v1/users')
    .set('Connection', 'keep-alive')
    .set('Content-type', 'application/json')
    .send(bodyRequestDataPut);
}
function deleteUser(inputId) {
    return serverAPI.delete(`/v1/users/${inputId}`)
    .set('Connection','keep-alive')
    .set('Content-type','application/json');
}
function deleteUserAll() {
    return serverAPI.delete(`/v1/users/removeAll`)
    .set('Connection','keep-alive')
    .set('Content-type','application/json');
}

module.exports = {
    getUserbyId,
    getUserbyName,
    postUser,
    putUser,
    deleteUser,
    deleteUserAll,
}
