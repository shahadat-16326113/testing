const functions = require('./bookingFunc');

test('booking details shown', ()=>{

    expect(functions.userBooking()).toEqual({
        
        driver: 'shahadat',
        date: '25/7/2020',
        time: '01714774471',
        status: 'completed'

        
    });
});