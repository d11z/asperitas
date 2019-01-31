const max = len => value =>
  value && value.length <= len
    ? undefined
    : `must be less than ${len} characters`;

const min = len => value =>
  value && value.length >= len
    ? undefined
    : `must be more than ${len} characters`;

const validChars = value =>
  /^[a-zA-Z0-9_-]+$/.test(value) ? undefined : 'contains invalid characters';

const trimmed = value =>
  value.trim() === value ? undefined : 'cannot start or end with whitespace';

const validUrl = value => {
  try {
    new URL(value);
    return undefined;
  } catch (error) {
    return 'must be a valid url';
  }
};

export const required = value => (value ? undefined : 'required');
export const usernameValidator = [required, max(32), validChars, trimmed];
export const passwordValidator = [required, min(8), max(72)];
export const titleValidator = [required, max(100)];
export const urlValidator = [required, validUrl];
