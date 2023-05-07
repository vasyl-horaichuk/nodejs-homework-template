const contacts = require("../models/contacts.js");
const { ctrlWrapper } = require("../helpers");
const { HttpError } = require("../helpers");

const listContacts = async (req, res) => {
  const result = await contacts.listContacts();
  res.json(result);
};

const getContactById = async (req, res) => {
  const params = req.params.id;
  const result = await contacts.getContactById(params);
  if (!result) {
    throw HttpError(404, "Not found");
    // const error = new Error("Not found");
    // error.status = 404;
    // throw error;
    // return res.status(404).json({ message: "Not found" });
    //
  }
  res.json(result);
};

const addContact = async (req, res) => {
  const result = await contacts.addContact(req.body);
  if (!result.length) {
    throw HttpError(400, "Not found ,l;,s;lvv,sd;l,v");
    // const error = new Error("Not found");
    // error.status = 404;
    // throw error;
    // return res.status(404).json({ message: "Not found" });
  }
  res.status(201).json(result);
};

const removeContact = async (req, res) => {
  const params = req.params.id;
  const result = await contacts.removeContact(params);
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.status(200).json({ message: "Delete success" });
};

const updateContact = async (req, res) => {
  const params = req.params.id;
  const result = await contacts.updateContact(params, req.body);
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.json(result);
};

module.exports = {
  listContacts: ctrlWrapper(listContacts),
  getContactById: ctrlWrapper(getContactById),
  addContact: ctrlWrapper(addContact),
  removeContact: ctrlWrapper(removeContact),
  updateContact: ctrlWrapper(updateContact),
};
