import { env } from '../utils/env.js';
export const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc',
};

export const FIFTEEN_MINUTES = 15 * 60 * 1000;
export const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;

export const SMTP = {
  SMTP_HOST: env('SMTP_HOST'),
  SMTP_PORT: env('SMTP_PORT'),
  SMTP_USER: env('SMTP_USER'),
  SMTP_PASSWORD: env('SMTP_PASSWORD'),
  SMTP_FROM: env('SMTP_FROM'),
};
