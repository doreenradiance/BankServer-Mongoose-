const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    accountName: {
        type: String,
        required: true
    },
    accountNumber: {
        type: Number,
        required: true
    },
    accountType: {
        type: String,
        required: true
    },
    bankId: {
        type: Schema.Types.ObjectId,
        ref: "Bank",
        required: true 
    }
});

const AccountModel = mongoose.model("Account", AccountSchema)

module.exports = AccountModel;