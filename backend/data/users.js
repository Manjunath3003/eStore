import bcrypt from 'bcryptjs'

const users=[
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: 'Manju',
        email: 'manju@example.com',
        password: bcrypt.hashSync('123456',10),
       
    },
    {
        name: 'Mohan',
        email: 'mohan@example.com',
        password: bcrypt.hashSync('123456',10),
       
    }
]
export default users