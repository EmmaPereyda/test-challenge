// You already have the methods imported
const { default: expect } = require('expect');
const {getUser, getUsers} = require('../users');


// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

test ( "Returns info about the user 1",()=>{
    expect(getUser(1)).toStrictEqual({emanil: "sirious90@gmail.com", id: 1, password: "hArrydotCom", username: "hpLover4"})
})

test ( "Returns info about the user 2",()=>{
    expect(getUser(2)).toStrictEqual({emanil: "parkerdapete@gmail.com", id: 2, password: "2D$ASUHSBU", username: "hpLover4"})
})

test ( "Returns info about the user 3",()=>{
    expect(getUser(3)).toStrictEqual({emanil: "dotmyheart@gmail.com", id: 3, password: "12345abcde", username: "gosemotionless"})
})
// READ documentation