import Joi from 'joi';

export const create = Joi.object({
  task: Joi.string().required(),
  duration: Joi.string().required(),
});

export const update = Joi.object({
  id: Joi.string().required()
});

export const deleteQuery = Joi.object({
  hard: Joi.bool(),
});

export const paramIdQuery = Joi.object({
  id: Joi.string(),
});

export const getQuery = Joi.object({
  active: Joi.string(),
});
