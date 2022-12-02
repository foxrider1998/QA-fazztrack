const chai = require('chai');
const expect = chai.expect;
const api = require('../api/method');
const bodyRequestData = require('../data/dataUser.json');
const dataEditUser = require('../data/dataEditUser');
const jsonSchemas = require('../jsonSchema/jsonSchema.js')
const scenarios = require('../scenarios/editUser-scenario');


chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require('chai-json-schema'));



describe(scenarios.scenario.description, async () => {
    before(async()=>{
        console.log('Before Hook , Input User Data');
        let response = await api.postUser(bodyRequestData);
        dataEditUser.declareUserId = response.body.id; // menyimpan id ke dataEditUser.js
        expect(response.status).to.equal(200);
  

        
    })

    after(async()=>{
        console.log('After hook, Delete User');
        response = await api.deleteUser(dataEditUser.declareUserId);
        expect(response.status).to.equal(200);
    })

    it(scenarios.scenario.positive.case1,async ()=> {
        let response = await api.putUser(dataEditUser.editOccupationAndNationality(dataEditUser.declareUserId))
        expect(response.status).to.equal(200);
        expect(response.body.occupation).not.to.equal(bodyRequestData.occupation);
        expect(response.body.occupation).not.to.equal(bodyRequestData.occupation);
        expect(response.body).has.jsonSchema(jsonSchemas.editOccupationAndNationality);
    })

    it(scenarios.scenario.negative.case1,async () => {
        let response = await api.putUser(dataEditUser.ageIsZero);
        expect(response.status).to.equal(400);
        expect(response.body.errorCode).to.equal("ER-03");
        expect(response.body.message).to.equal('you must specify data for firstname, lastName, age, occupation, nationality, hobbies (at least 1), and gender');
        expect(response.body).has.jsonSchema(jsonSchemas.ageIsZero);
    });
    it(scenarios.scenario.negative.case2,async () => {
        let response = await api.putUser(dataEditUser.arrayIsEmpty);
        expect(response.status).to.equal(400);
        expect(response.body.errorCode).to.equal("ER-03");
        expect(response.body.message).to.equal('you must specify data for firstname, lastName, age, occupation, nationality, hobbies (at least 1), and gender');
        expect(response.body).has.jsonSchema(jsonSchemas.arrayIsEmpty);
    });
    it(scenarios.scenario.negative.case3,async () => {
        let response = await api.putUser(dataEditUser.idIsNull);
        expect(response.status).to.equal(404);
        expect(response.body.errorCode).to.equal("ER-01");
        expect(response.body.message).to.equal("user not found");
        expect(response.body).has.jsonSchema(jsonSchemas.idIsNull);
    });
});