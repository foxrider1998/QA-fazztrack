const chai = require('chai');
const expect = chai.expect;
const api = require('../api/method');
const bodyRequestData = require('../data/dataUser.json');
const dataEditUser = require('../data/dataEditUser');
const jsonSchemas = require('../jsonSchema/jsonSchema.js');
const scenarios = require('../scenarios/getUser-scenario');

chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require('chai-json-schema'));

describe(scenarios.scenario.description, async () => {
    before(async()=> {
        console.log('Before Hook, Input User Data');
        let response = await api.postUser(bodyRequestData);
        dataEditUser.declareUserId = response.body.id
        expect(response.status).to.equal(200);
    })

    after(async()=>{
        console.log('After Hook,Delete User Data')
        let response = await api.deleteUser(dataEditUser.declareUserId);
        expect(response.status).to.equal(200);
    })
    it(scenarios.scenario.positive.case1,async ()=> {
        let response = await api.getUserbyId(dataEditUser.declareUserId);
        expect(response.status).to.equal(200);
        expect(response.body.id).to.equal(dataEditUser.declareUserId);
        expect(response.body).has.jsonSchema(jsonSchemas.getUser);
        
    })
    it(scenarios.scenario.negative.case1,async ()=> {
        let response = await api.getUserbyId('pastierror');
        expect(response.status).to.equal(404);
        expect(response.body.errorCode).to.equal('ER-01');
        expect(response.body.message).to.equal('user not found');
        expect(response.body).has.jsonSchema(jsonSchemas.invalidUserId);


    })
})