const scenarioTest = {
    "CreateUser" : {
        description : "[@CU] Create user API",
        positive : {
            casePositive1 : "User succces creating account"
        },
        negative : {
            case1 :"[@CU] User failed updating age = 0 ", 
            case2 :"[@CU] User failed updating hobbies = empty " ,
            case3 :"[@CU] User failed updating when id  = null " 
        }
    },

    "UpdateUser" : {
        description : "[@UU] Update user API",
        positive : {
            casePositive1 : "User succes updating data Occupation and Nationality"
        },
        negative : {
            case1 :"[@UU] User failed updating age = 0 ", 
            case2 :"[@UU] User failed updating hobbies = [] " ,
            case3 :"[@UU] User failed updating when id  = null " 
        }
    }
}
module.exports = {scenarioTest}