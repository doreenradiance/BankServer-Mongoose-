const express = require('express');
const { createAccountController, listAccountController } = require("../controllers/account");
const router = express.Router();

    // // create account - post method
    router.post("/account", 
    [body("accountName").notEmpty().withMessage("Account Name required"), 
    body("accountType").notEmpty().withMessage("Account Location required"),
    body("accountNumber").not().isEmpty().withMessage("Account Number required"),
    body("bankId").not().isEmpty().withMessage("bankId required")],
    createAccountController)
    
    

router.post('/account', createAccountController);
router.get('./account', listAccountController)

module.exports = router;