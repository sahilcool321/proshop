import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'admin User',
        email: 'admin@example.com',
        passsword: bcryptjs.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'john@example.com',
        passsword: bcryptjs.hashSync('123456', 10),
    },
    {
        name: 'Jane Doe',
        email: 'Jane@example.com',
        passsword: bcryptjs.hashSync('123456', 10),
    },
]

export default users 