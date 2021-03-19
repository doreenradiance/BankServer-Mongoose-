const router = require("express").Router();
const { body } = require('express-validator')
const { listBanksController,
    createBankController,
    updateBankController,
    deleteBankController } = require("../controllers/bank")



//routes
// view bank - get method
router.get("/bank/:id?", listBanksController)
// // create bank - post method
router.post("/bank",
    [body("name").trim().not().isEmpty().withMessage("Account Name required"),
    body("location").notEmpty().withMessage("Account Location required"),
    body("branch").notEmpty().withMessage("Account Branch required"),
    body("address").not().isEmpty().withMessage("Address required"),
    body("accountNumber").not().isEmpty().withMessage("AccountNumber required")],
    createBankController)
// update bank - put / patch method
router.put("/bank", updateBankController)
// // delete bank - delete method
router.delete("/bank", deleteBankController)


module.exports = router;