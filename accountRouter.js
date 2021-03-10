const router = require("express").Router();
const {body,validationResult} = require("express-validator");

const {listAccountController,
    createAccountController,
    updateAccountController,
    deleteAccountController} = require("./accountControllers")
//routes
// view account - get method
// router.get("/accounts/:id?",listAccountController)

// // create account - post method
router.post("/account", 
[body("accountName").notEmpty().withMessage("Account Name required"), 
body("accountNumber").isNumeric().not().isEmpty().withMessage("Account Number required"),
body("accountType").not().isEmpty().withMessage("Account Type required"),
body("bankId").not().isEmpty().withMessage("bankId required")],
createAccountController)

// update account - put / patch method
router.put("/account",updateAccountController)
// // delete account - delete method
// router.delete("/account", deleteAccountController)

module.exports = router;