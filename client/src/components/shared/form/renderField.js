import React from 'react';
import InputWrapper from './InputWrapper';
import Label from './Label';
import Error from './Error';
import SelectWrapper from './SelectWrapper';
import Input from './Input';

const renderField = field => (
  <InputWrapper>
    <Label>{field.label}</Label>
    {field.meta.touched && field.meta.error && (
      <Error>{field.meta.error}</Error>
    )}
    {field.type === 'select' ? (
      <SelectWrapper>
        <Input {...field.input} as='select' type='select'>
          {field.children}
        </Input>
      </SelectWrapper>
    ) : (
      <Input
        {...field.input}
        error={field.meta.touched && !!field.meta.error}
        type={field.type}
        placeholder={field.label}
        autoComplete='off'
      />
    )}
  </InputWrapper>
);

export default renderField;
