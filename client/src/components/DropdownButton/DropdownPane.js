import React from 'react';
import styled from 'styled-components/macro';
import HeaderNavLink from '../Header/NavLink';

const DDPane = styled.div`
  position: absolute;
	top: 3rem;
  left: -0.05rem;
  width: 250px;
	border: 1px solid ${props => props.theme.foreground};
	box-shadow: 0 4px 12px ${props => props.theme.shadow};
	min-height: 100px;
  visibility: hidden;
  opacity: 0;
	background: ${props => props.theme.activeBackground};
	transition .3s visibility, opacity .3s linear;

	@media(max-width: 425px) {
		top: 2.5rem;
	}
`;

const DDPaneLink = styled(HeaderNavLink)`
  height: 50px;
`;

const DropdownPane = ({ options }) => {
  if (!options) {
    throw new Error('Dropdown options not provided: <DropdownPane/>');
  }

  return (
    <DDPane className='DDPane'>
      {Object.entries(options).map(([name, route]) => (
        <DDPaneLink key={name} to={route}>
          {name}
        </DDPaneLink>
      ))}
    </DDPane>
  );
};

export default DropdownPane;
