const router = require("express").Router();
const {listBanksController,
    createBankController,
    updateBankController,
    deleteBankController} = require("./controllers")
//routes
// view bank - get method
router.get("/bank/:id?", listBanksController)
// // create bank - post method
router.post("/bank", createBankController)
// update bank - put / patch method
router.put("/bank", updateBankController)
// // delete bank - delete method
// router.delete("/bank", deleteBankController)

// connect database and start server
// mongoose.connect("mongodb+srv://codetrainUser:doreen1@cluster0.dlih7.mongodb.net/codetrain?retryWrites=true&w=majority",
// {useNewUrlParser: true, userUnified:  true, useUnifiedTopology: true}
// )

module.exports = router;