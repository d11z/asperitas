import React from 'react';
import Label from './Label';
import Error from './Error';
import Input from './Input';

const renderField = field => (
  <Label>
    {field.label}
    {field.meta.touched && field.meta.error && (
      <Error>{field.meta.error}</Error>
    )}
    {field.type === 'select' ? (
      <Input as='select' {...field.input}>
        {field.children}
      </Input>
    ) : (
      <Input
        {...field.input}
        error={field.meta.touched && !!field.meta.error}
        type={field.type}
        placeholder={field.label}
        autoComplete='off'
      />
    )}
  </Label>
);

export default renderField;
