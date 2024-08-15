import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'Name should be a string',
    'string.min': 'Name should have at least 3 characters',
    'string.max': 'Name should have at most 20 characters',
  }),
  phoneNumber: Joi.string()
    .pattern(/^\+?[0-9]{10,15}$/)
    .messages({
      'string.pattern.base':
        'Invalid phone format. Ensure the number contains only digits and start with +.',
      'string.empty': 'Phone number cannot be empty.',
    }),
  email: Joi.string().email().messages({
    'string.email': 'Invalid email format.',
    'string.empty': 'Email cannot be empty.',
  }),
  isFavourite: Joi.boolean().messages({
    'boolean.base': 'The value must be either true or false.',
  }),
  contactType: Joi.string().valid('work', 'home', 'personal').messages({
    'any.only':
      'The value ContactType must be one of the following: "work", "home" or "personal".',
    'string.empty': 'Contact type cannot be empty.',
  }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Name should be a string',
    'string.min': 'Name should have at least 3 characters',
    'string.max': 'Name should have at most 20 characters',
    'any.required': 'Name is required',
  }),
  phoneNumber: Joi.string()
    .pattern(/^\+?[0-9]{10,15}$/)
    .required()
    .messages({
      'string.pattern.base':
        'Invalid phone format. Ensure the number contains only digits and start with +.',
      'string.empty': 'Phone number cannot be empty.',
      'any.required': 'Phone number is required.',
    }),
  email: Joi.string().email().messages({
    'string.email': 'Invalid email format.',
    'string.empty': 'Email cannot be empty.',
  }),
  isFavourite: Joi.boolean().messages({
    'boolean.base': 'The value must be either true or false.',
  }),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .required()
    .messages({
      'any.only':
        'The value must be one of the following: "work", "home" or "personal".',
      'string.empty': 'Contact type cannot be empty.',
      'any.required': 'Contact type is required.',
    }),
});
