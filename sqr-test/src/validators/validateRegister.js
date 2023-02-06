import Joi from 'joi';

const registerSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .required()
    .messages({ 'string.empty': 'First name is required' }),
  lastName: Joi.string()
    .trim()
    .required()
    .messages({ 'string.empty': 'Last name is required' }),
  email: Joi.string()
    .email({ tlds: false })
    .messages({ 'string.empty': 'Email is required' }),
  password: Joi.string().alphanum().min(8).required().trim().messages({
    'string.empty': 'Password is required',
    'string.alphanum': 'Password must contain number or alphabet',
    'string.min': 'Password must have at least 8 characters',
  }),
  confirmPassword: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .trim()
    .messages({
      'any.only': 'Password and Confirm password did not match',
      'string.empty': 'Confirm password is required',
    }),
});

const validateRegister = input => {
  // part the input(parameter) from input to validate
  const { error } = registerSchema.validate(input, {
    abortEarly: false,
  });
  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    // change from array to object // this part is to show the err under the box
    return result;
  }
};

export default validateRegister;
