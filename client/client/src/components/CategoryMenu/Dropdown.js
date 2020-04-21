import React from 'react';
import styled from 'styled-components/macro';
import categories from '../../categories';
import SelectWrapper from '../shared/form/SelectWrapper';

const Dropdown = styled.select`
  border: none;
  border-radius: 0;
  width: 100%;
  padding: 8px 16px;
  background-color: ${props => props.theme.foreground};
  font-size: 15px;
  color: ${props => props.theme.normalText};
  appearance: none;
`;

class CategoryMenuDropdown extends React.Component {
  mapCategories = () =>
    ['all', ...categories].map((category, index) => (
      <option key={index} value={category}>
        {category}
      </option>
    ));

  handleOnChange = event => {
    const category = event.target.value;
    if (category !== this.props.category) {
      const url = category === 'all' ? '/' : `/a/${category}`;
      this.props.history.push(url);
    }
  };

  render() {
    return (
      <SelectWrapper flex>
        <Dropdown value={this.props.category} onChange={this.handleOnChange}>
          {this.mapCategories()}
        </Dropdown>
      </SelectWrapper>
    );
  }
}

export default CategoryMenuDropdown;
