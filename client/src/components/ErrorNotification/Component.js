import React from 'react';
import styled from 'styled-components/macro';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { transition } from '../shared/helpers';
import ErrorNotificationMessage from './Message';

const className = 'message';

const Wrapper = styled.div`
  ${transition('opacity', 'transform')};

  position: fixed;
  top: 16px;
  left: 0;
  right: 0;
  z-index: 100;
  text-align: center;
  pointer-events: none;

  &.${className}-enter {
    opacity: 0;
    transform: translateY(-25%);
  }

  &.${className}-enter-active {
    opacity: 1;
    transform: translateY(0);
  }

  &.${className}-exit {
    opacity: 1;
  }

  &.${className}-exit-active {
    opacity: 0;
  }
`;

class ErrorNotification extends React.Component {
  render() {
    return (
      <TransitionGroup component={null}>
        {this.props.error && (
          <CSSTransition classNames={className} timeout={300}>
            <Wrapper>
              <ErrorNotificationMessage>
                {this.props.error.message}
              </ErrorNotificationMessage>
            </Wrapper>
          </CSSTransition>
        )}
      </TransitionGroup>
    );
  }
}

export default ErrorNotification;
