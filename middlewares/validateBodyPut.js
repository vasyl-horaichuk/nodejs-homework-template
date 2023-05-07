const { HttpError } = require("../helpers");

const validateBodyPut = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      console.log(error.details);
      next(HttpError(400, `missing fields ${error.details[0].context.key}`));
    }
    next();
  };
  return func;
};

module.exports = validateBodyPut;
