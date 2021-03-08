const functions = require('./loginFunc');

test('User phone no check', ()=>{

    expect(functions.checkUserAuth()).toEqual({
        phone: '01575475879',
        
    });
});