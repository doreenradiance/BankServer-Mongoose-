const express = require("express");
const router = express.Router();
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

module.exports = router;