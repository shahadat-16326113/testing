const functions = require('./testFunction');

test('adds 2 + 2 equal to 4', ()=>{

    expect(functions.add(2,2)).toBe(4);
});