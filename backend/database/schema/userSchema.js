const { model, Schema} = require('mongoose');

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
})

const UserModel = model("User", UserSchema);

module.exports = UserModel;