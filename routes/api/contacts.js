const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/contacts");
const { validate } = require("../../middlewares");
const schemas = require("../../schemas/contacts");

router.get("/", ctrl.listContacts);

router.get("/:id", ctrl.getContactById);

router.post("/", validate(schemas.createContact), ctrl.addContact);

router.delete("/:id", ctrl.removeContact);

router.put("/:id", validate(schemas.updateContact), ctrl.updateContact);

module.exports = router;
