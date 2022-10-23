const Intern = require('../lib/intern');

describe('Intern', () => {
    test('checks to see if getRole returns Intern', () => {
        const obj = new Intern;
        const internRole = obj.getRole();
        const role = 'Intern';
        expect(internRole).toEqual(role);
    })
})