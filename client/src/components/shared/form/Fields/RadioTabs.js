import React from 'react';
import styled from 'styled-components';

const RadioTabsWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
`;

const RadioTabItem = styled.button`
  background: ${props => (props.active ? props.theme.accent : 'transparent')};
  border: 1px solid ${props => props.theme.accent};
  color: ${props => (props.active ? props.theme.foreground : props.theme.accent)};
  cursor: pointer;
  display: block;
  flex: 1 1 100%;
  font-size: 12px;
  font-weight: 500;
  font-weight: 600;
  letter-spacing: 1px;
  outline: 0;
  padding: 8px;
  text-transform: uppercase;
  width: 100%;

  &:hover {
    background: ${props => props.theme.accent};
    color: ${props => props.theme.foreground};
  }

  &:first-child {
    border-radius: 4px 0 0 4px;
  }

  &:last-child {
    border-radius: 0 4px 4px 0;
  }

  &:not(:first-child) {
    border-left: 0;
  }
`;

function handleClick(e, value, fn) {
  e.preventDefault();
  fn(value);
}

function renderOptions(field) {
  return field.options.map((option, key) => (
    <RadioTabItem
      active={field.input.value === option.value}
      onClick={e => handleClick(e, option.value, field.input.onChange)}
      key={key}
    >
      {option.label}
    </RadioTabItem>
  ));
}

const RadioTabs = ({ field }) => (
  <RadioTabsWrapper>{renderOptions(field)}</RadioTabsWrapper>
);

export default RadioTabs;
