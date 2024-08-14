import createError from 'http-errors';

export const notFoundHandler = (req, res, next) => {
  throw createError(
    res.status(404).json({
      status: 404,
      message: 'Route not found',
    }),
  );
};
