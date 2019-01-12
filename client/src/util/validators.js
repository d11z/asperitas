const maxLength = max => value =>
  value && value.length <= max
    ? undefined
    : `must be less than ${max} characters`;

const minLength = min => value =>
  value && value.length >= min
    ? undefined
    : `must be more than ${min} characters`;

const isTrimmed = value =>
  value.trim() === value ? undefined : 'cannot start or end with whitespace';

export const required = value => (value ? undefined : 'required');
export const usernameValidator = [required, maxLength(32), isTrimmed];
export const passwordValidator = [required, minLength(8), maxLength(72)];
