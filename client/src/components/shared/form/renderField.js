import React from 'react';
import InputWrapper from './InputWrapper';
import Label from './Label';
import Error from './Error';
import SelectWrapper from './SelectWrapper';
import Input from './Input';
import RadioTabs from './Fields/RadioTabs';

const VariableField = field => {
  switch (field.type) {
    case 'select':
      return (
        <InputWrapper>
          <Label>{field.label}</Label>
          {field.meta.touched && field.meta.error && (
            <Error>{field.meta.error}</Error>
          )}
          <SelectWrapper>
            <Input {...field.input} as='select' type='select'>
              {field.children}
            </Input>
          </SelectWrapper>
        </InputWrapper>
      );

    case 'radio-tabs':
      return (
        <InputWrapper>
          <RadioTabs field={field} />
        </InputWrapper>
      );

    default:
      return (
        <InputWrapper>
          <Label>{field.label}</Label>
          {field.meta.touched && field.meta.error && (
            <Error>{field.meta.error}</Error>
          )}
          <Input
            {...field.input}
            error={field.meta.touched && !!field.meta.error}
            type={field.type}
            placeholder={field.label}
            autoComplete='off'
          />
        </InputWrapper>
      );
  }
};

const renderField = field => {
  return <VariableField {...field} />;
};

export default renderField;
