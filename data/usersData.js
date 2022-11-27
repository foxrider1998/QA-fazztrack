const createUserData = function(payload) {
    return {
        id: payload.id,
        firstName: payload.firstName,
        lastName: payload.lastName,
        age: payload.age,
        occupation: payload.occupation,
        nationality: payload.nationality,
        hobbies: payload.hobbies,
        gender: payload.gender,
        createdDate: Date.now,
        updatedDate: null
    }
}

const updateUserData = function(payload ) {
    return {
        id: payload.id,
        firstName: payload.firstName,
        lastName: payload.lastName,
        age: payload.age,
        occupation: payload.occupation,
        nationality: payload.nationality,
        hobbies: payload.hobbies,
        gender: payload.gender,
        createdDate: payload.createdDate,
        updatedDate: Date.now
    }
}

const standardData = function() {
    return {
        id: "65bcc1f1-5ce6-4ad4-8277-ecb5b5de36e7",
        firstName: "Aris",
        lastName: "Saputra",
        age: 24,
        occupation: "karyawan",
        nationality: "Indonesia",
        hobbies: [
            "Manga", "Sales", "Selling", "tawuran"
        ],
        gender: "MALE",
        createdDate: "2022-11-26T03:04:09.638Z",
        updatedDate: "2022-11-26T03:04:09.638Z"
    }
}




module.exports = {
    createUserData,updateUserData,standardData
}