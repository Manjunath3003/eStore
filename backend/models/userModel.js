import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = Schema({
    name: {
        type: String,
        required: true      
    },
    email: {
        type: String,
        required: true,
        unique:true
    },

    password: {
        type: String,
        required: true      
    },

    isAdmin: {
        type: Boolean,
        required: true,
        default: false    
    }

},{
    timestamps: true // created and updated time automatically
})

const User = mongoose.model('User', userSchema);

export default User