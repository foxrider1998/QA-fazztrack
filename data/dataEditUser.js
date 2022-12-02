const editOccupationAndNationality = (editId) => { 
  return {
  "id": editId,
  "firstName": "test",
  "lastName": "123",
  "age": 10,
  "occupation": "Polwan",
  "nationality": "Nigeria",
  "hobbies": [
    "makan"
  ],
  "gender": "MALE",
  "createdDate": "2022-08-10T09:56:55.959Z",
  "updatedDate": "2022-08-10T09:56:55.959Z"
} 
}
const ageIsZero = {
  "id": "800",
  "firstName": "test",
  "lastName": "123",
  "age": 0,
  "occupation": "astronot",
  "nationality": "rusia",
  "hobbies": [
    "makan"
  ],
  "gender": "MALE",
  "createdDate": "2022-08-10T09:56:55.959Z",
  "updatedDate": "2022-08-10T09:56:55.959Z"
  }
const arrayIsEmpty = {
  "id": "800",
  "firstName": "test",
  "lastName": "123",
  "age": 10,
  "occupation": "astronot",
  "nationality": "rusia",
  "hobbies": [],
  "gender": "MALE",
  "createdDate": "2022-08-10T09:56:55.959Z",
  "updatedDate": "2022-08-10T09:56:55.959Z"
  }

  const idIsNull = {
      "id": null,
      "firstName": "test",
      "lastName": "123",
      "age": 10,
      "occupation": "astronot",
      "nationality": "rusia",
      "hobbies": [
        "makan"
      ],
      "gender": "MALE",
      "createdDate": "2022-08-10T09:56:55.959Z",
      "updatedDate": "2022-08-10T09:56:55.959Z"
    }

  const declareUserId = '';

  module.exports = {
    editOccupationAndNationality,
    ageIsZero,
    arrayIsEmpty,
    idIsNull,
    declareUserId
  }