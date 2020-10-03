const Manager = require('../lib/Manager')

test('create engineer object', () => {
    const employee = new Manager('Steve', 42, 'steve@steve.com', 'Manager', '801-801-8888')

    expect(employee.getName()).toBe('Steve');
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toEqual(expect.any(String));
    expect(employee.getRole()).toEqual('Manager');
    expect(employee.getOfficeNumber()).toEqual(expect.any(String));
})