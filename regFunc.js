const functions = {
    createUser: () =>{
        const user = {firstName: 'shahadat'};
        user['lastName'] = 'hossain';
        user['phone'] = '01714774471';
        user['password'] = '123';
        user['license'] = '15644';
        user['dob'] = '2/3/1994';
        user['city'] = 'dhaka';
        user['country'] = 'bangladesh';
        return user;

    }
}

module.exports =functions ;