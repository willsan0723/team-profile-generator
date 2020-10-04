const Intern = require('../lib/Intern')

test('create intern object', () => {
    const employee = new Intern('Steve', 42, 'steve@steve.com', 'UofU')

    expect(employee.getName()).toBe('Steve');
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toEqual(expect.any(String));
    expect(employee.getRole()).toEqual('Intern');
    expect(employee.getSchool()).toEqual(expect.any(String));
})