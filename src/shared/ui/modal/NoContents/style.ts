import { CommonTitle, Container } from '../common.style';
import styled from 'styled-components';

import { theme } from '@/shared/constants';

const Details = styled.div`
  display: flex;

  flex: 1;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  padding: 34px 0 26px;
`;

const Title = CommonTitle;

const DescriptionContainer = styled.div`
  margin-top: 10px;
`;

const Description = styled.p`
  color: ${theme.neutral['300']};
  text-align: center;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export default {
  Container,
  Details,
  Title,
  DescriptionContainer,
  Description,
};
