import React from 'react';
import styled from 'styled-components';
import RadioGroupOption from './Option';

const RadioGroupWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  
  input[type=radio] {
    display: none;
  }
`;

function handleClick (e, value, fn) {
  e.preventDefault();
  fn(value);
}

const renderOptions = field => {
  return field.options.map((option, key) => (
    <RadioGroupOption
      {...option}
      active={field.input.value === option.value}
      onClick={e => handleClick(e, option.value, field.input.onChange)}
      key={key}
    />
  ));
};

const RadioGroup = ({ field }) => (
  <RadioGroupWrapper>{renderOptions(field)}</RadioGroupWrapper>
);

export default RadioGroup;
