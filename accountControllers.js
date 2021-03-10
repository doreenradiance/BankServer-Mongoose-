const {validationResult} = require ("express-validator")
const AccountModel = require("./accountModel");
//controllers
const listAccountController = (req, res) => {
    //list all banks
    const { id } = req.params;

    if (id) {
        AccountModel.find({ _id: id })
            .populate("bankId", "name location branch")
            .then(accounts => {
                res.json({ data: accounts })
            }).catch(err => console.log(err));
    } else {
        AccountModel.find().then(accounts => {
            res.json({ data: accounts })
        }).catch(err => console.log(err));
    }
}

const createAccountController = (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.json({error: errors.array()})
    }
    
    // create a bank

    const data = req.body;
    const account = new AccountModel(data)

    account.save().then(result => {
        if (result)
            res.json({ message: "Create account successful.", data: result });
        else (result)
        res.json({ message: "Failed to create account." });
    }).catch(error => console.log(error));
}

const updateAccountController = (req, res) => {
    // update a bank
    const { accountName, accountNumber, accountType, bank, id } = req.body;

    AccountModel.findById(id).then(account => {
        if (account) {
            account.accountName = accountName;
            account.accountNumber = accountNumber;
            account.accountType = accountType;
            account.bank = bank
            account.save();

            res.json({ message: "create account successful", data: account });
        }

        res.json({ message: "Account cannot be found" });
    }).catch(err => console.log(err));

    // const updatedAccount = AcountModel.update({ accountName, accountNumber,accountType,bank });
    // res.json({ message: "create account successful", data: updatedAccount });
    // }
 


}

const deleteAccountController = (req, res) => {
    // delete an account
    const { name } = req.body;
    const deletedAccount = AccountModel.delete({ name });
    res.json({ message: "deleted account", data: deletedAccount });
}

module.exports = {
    listAccountController,
    createAccountController,
    updateAccountController,
    deleteAccountController,
}
