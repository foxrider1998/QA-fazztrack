const scenario =  {
    description : '[@editUsertest]Edit User API Test',
    positive : {
        case1 : '[@positive-editUser] User Succsesfully updated data Occupation and Nationality'
    },
    negative : {
        case1 : '[@negative-ageIsZero] User Failed to Update Data When Age is Zero  ',
        case2 : '[@negative-arrayIsEmpty] User Failed To Update Data When Array is Empty',
        case3 : '[@negative-idIsNull] User Failed To Update Data When Id Is Null',
    }
}

module.exports = {
    scenario,
}