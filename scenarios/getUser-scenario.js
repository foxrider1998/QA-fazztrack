const scenario =  {
    description : '[@getUserTest]Get User API Test',
    positive : {
        case1 : '[@positive-getUser] Get User Data with Valid Id'
    },
    negative : {
        case1 : '[@negative-getUser] Get User Data With invalid Id'
    }
}

module.exports = {
    scenario,
}