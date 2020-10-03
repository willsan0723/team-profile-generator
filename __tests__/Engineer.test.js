const Engineer = require('../lib/Engineer')

test('create engineer object', () => {
    const employee = new Engineer('Steve', 42, 'steve@steve.com', 'Engineer','github.com/steve')

    expect(employee.getName()).toBe('Steve');
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toEqual(expect.any(String));
    expect(employee.getRole()).toEqual('Engineer');
    expect(employee.getGit()).toEqual(expect.any(String));
})