import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { link } from '../../../shared/helpers';

const PostContentDetailCommentsLink = styled(Link)`
  ${link({ underline: true })};
  
  color: ${props => props.theme.normalText};
`;

export default PostContentDetailCommentsLink;
