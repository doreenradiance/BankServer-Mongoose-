const { createAccountController, listAccountController } = require("../controllers/account");


server.post('/account', createAccountController);

server.get('./accounts', listAccountController)