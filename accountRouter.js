const router = require("express").Router();
const {listAccountController,
    createAccountController,
    updateAccountController,
    deleteAccountController} = require("./controllers")
//routes
// view account - get method
router.get("/accounts/:id?", listAccountController)
// // create account - post method
router.post("/account", createAccountController)
// update account - put / patch method
router.put("/account", updateAccountController)
// // delete account - delete method
// router.delete("/account", deleteAccountController)

module.exports = router;