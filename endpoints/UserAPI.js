const st = require("supertest");
const serverAPI = st('http://localhost:1234/v1');

function getUserByName(name) {
    return serverAPI.get('/users?name='+name)
    .set('Authorization','testing API')
    .set('Content-Type','applictaion/json')
    
}

function getUserById(id) {
    return serverAPI.get('/users/{'+id+'}')
    .set('Authorization','testing API')
    .set('Content-Type','applictaion/json')
    
}

function postUserCreate(payload) {
    return serverAPI.post('/users')
    .set('Authorization', 'Hahahahaha')
    .set('Content-Type', 'application/json').send(
        payload
    );
}
function updateUser(payload) {
    return serverAPI.put('/users')
    .set('Authorization', 'Hahahahaha')
    .set('Content-Type', 'application/json').send(
        payload
    );
}

function deleteUser(id) {
    return serverAPI.delete('/users/'+id);
}
module.exports = {
    getUserById,getUserByName,postUserCreate,updateUser,deleteUser
}