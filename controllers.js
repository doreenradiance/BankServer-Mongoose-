const AccountModel = require("./accountModel");
const BankModel = require("./models");
//controllers
const listBanksController = (req, res) => {
    //list all banks
    const { id } = req.params;

    if (id) {
        BankModel.find({ _id: id }).then(banks => {
            res.json({ data: banks })
        }).catch(err => console.log(err));
    } else {
        BankModel.find().then(banks => {
            res.json({ data: banks })
        }).catch(err => console.log(err));
    }
}

const createBankController = (req, res) => {
    // create a bank
    const { name, location, branch, phone, address, accountNumber } = req.body;
    const bank = new BankModel({ name, location, branch, phone, address, accountNumber });

    bank.save().then(result => {
        res.json({ message: "create successful", data: result });
    }).catch(error => console.log(error));
}
const updateBankController = (req, res) => {
    // update a bank
    const { id, name, location, branch, phone, address, accountNumber } = req.body;

    BankModel.findById(id).then(bank => {
        if (bank) {
            banks.name = name;
            banks.location = location;
            banks.branch = branch;
            banks.phone = phone;
            banks.address = address;
            banks.accountNumber = accountNumber;


            bank.save();

            res.json({ message: "crea  te successful", data: bank });
        }

        res.json({ message: "Document cannot be found" });
    }).catch(err => console.log(err));

    // const updatedBank = BankModel.update({ name, location, branch, phone, address, accountNumber });
    // res.json({ message: "create successful", data: updatedBank });
}
const deleteBankController = (req, res) => {
    // delete a bank
    const { id } = req.body;
    BankModel.findByIdAndRemove(id).then(deletedBank => {
        if (deletedBank) {

AccountModel.deleteMany({bankId:deletedBank._id}).then(result =>{
    res.json({ message: "deleted bank", data: deletedBank });
}).catch(err => console.log(err)); 
           
            return;
        }
        res.json({ message: "bank not found" });
    });
}

module.exports = {
    listBanksController,
    createBankController,
    updateBankController,
    deleteBankController
}