import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? '#01bf71' : '#010606')};
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};

  &:hover {
    background: ${({ primary }) => (primary ? '#fff' : '#01bf71')};
  }
`;
