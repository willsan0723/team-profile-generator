const Employee = require('../lib/Employee')

test('create employee object', () => {
    const employee = new Employee('Steve', 42, 'steve@steve.com')

    expect(employee.getName()).toBe('Steve');
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toEqual(expect.any(String));
    expect(employee.getRole()).toEqual('Employee');
})