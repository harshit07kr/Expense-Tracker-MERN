const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    password: {
        type: String,
        required: true,
    },
    incomes:[{type: mongoose.Schema.Types.ObjectId,ref :"income"}],
    expenses:[{type: mongoose.Schema.Types.ObjectId,ref :"expense"}],
}, { timestamps: true });

const User = mongoose.model("User",UserSchema);

module.exports=User;
