import styled from 'styled-components';

const PostContentText = styled.div`
  overflow: hidden;
  font-size: 13px;
  line-height: 18px;
  text-overflow: ellipsis;
  white-space: ${props => (props.full ? 'normal' : 'nowrap')};
  color: ${props => props.theme.mutedText};
  margin: ${props => (props.full ? '8px 0 16px' : '0')};
`;

export default PostContentText;
