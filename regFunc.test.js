const functions = require('./regFunc');

test('User should be rafi ahmed objects', ()=>{

    expect(functions.createUser()).toEqual({
        firstName: 'shahadat',
        lastName: 'hossain',
        phone: '01714774471',
        password: '123',
        license: '15644',
        dob: '2/3/1994',
        city: 'dhaka',
        country: 'bangladesh'
    });
});