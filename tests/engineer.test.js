const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    test('checks to see if getRole returns Engineer', () => {
        const role = 'Engineer';
        const obj = new Engineer;
        const roleTest = obj.getRole();
        expect(roleTest).toEqual(role);

    }) 
})