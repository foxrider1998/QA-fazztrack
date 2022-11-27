const APIUsers = require('../endpoints/UserAPI');
const ch = require('chai');
const APIData = require('../data/usersData');
const scenarios = require('../scenarios/scenarios');
const  {expect,assert} = require('chai').use(require('chai-json-schema'));

const requestBody = require('../dataJson/dataJson.json');
const resposeSchema = require('../schema/schema.json');
const checkSchema = require('chai-json-schema');
const { after } = require('mocha');

describe(scenarios.scenarioTest.CreateUser.positive.casePositive1, async()=>{
    let response;
    before(()=>{console.log("before")}); 
   
    it(scenarios.scenarioTest.CreateUser.description, async()=>{
        const payload = APIData.standardData()
        const dataCreateUser =APIData.createUserData(payload);
         response = await APIUsers.postUserCreate(dataCreateUser);
        const {firstName , lastname } = dataCreateUser;
        
        expect(response.body.firstName).to.equal(firstName);
        expect(response.body).to.have.jsonSchema(checkSchema)
    });

     after(async()=>{
        await APIUsers.deleteUser(response.body.id)
        console.log("ini after untuk delete data hasil test create user")});
   
});



describe(scenarios.scenarioTest.UpdateUser.description, async()=>{


    it(scenarios.scenarioTest.UpdateUser.positive.casePositive1, async()=>{
        const data = await APIUsers.getUserByName("Aris");
        const dataChange = data.body.data[0] ;
        dataChange.nationality = "Arab Saudi";
        dataChange.occupation = "Quality Assurance";
        const response = await APIUsers.updateUser(dataChange);

        delete dataChange.updatedDate;
        delete dataChange.hobbies;

        expect(response.statusCode).to.equal(200)    
        expect(response.body).to.includes(dataChange);
        expect(response.body).to.have.jsonSchema(checkSchema)
    });

});

describe(scenarios.scenarioTest.UpdateUser.description, async()=>{
    it(scenarios.scenarioTest.UpdateUser.negative.case1, async()=>{
       const data = await APIUsers.getUserByName("Aris");
        const dataChange = data.body.data[0] ;
        dataChange.age = 0;
        const response = await APIUsers.updateUser(dataChange);
        const {nationality, occupation } = dataChange;
  
        expect(response.body.statusCode).to.equal(400);
        expect(response.body.errorCode).to.equal('ER-03');
        expect(response.body.message).to.include("you must specify data");

    });

    it(scenarios.scenarioTest.UpdateUser.negative.case2, async()=>{
        const data = await APIUsers.getUserByName("Aris");
         const dataChange = data.body.data[0] ;
         dataChange.hobbies = [];
         const response = await APIUsers.updateUser(dataChange);
   
         expect(response.body.statusCode).to.equal(400);
         expect(response.body.errorCode).to.equal('ER-03');
         expect(response.body.message).to.include("you must specify data");
 
     });
    
     it(scenarios.scenarioTest.UpdateUser.negative.case3, async()=>{
        const data = await APIUsers.getUserByName("Aris");
         const dataChange = data.body.data[0] ;
         dataChange.id = null;
         const response = await APIUsers.updateUser(dataChange);

         expect(response.body.statusCode).to.equal(404);
         expect(response.body.errorCode).to.equal('ER-01');
         expect(response.body.message).to.include("not found");
 
     });
    


});