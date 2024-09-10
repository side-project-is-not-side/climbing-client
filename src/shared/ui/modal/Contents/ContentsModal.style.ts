import { CommonTitle } from '../common.style';
import { TLayout } from '../common/common.types';
import styled from 'styled-components';

import { theme } from '@/shared/constants';

export type TStyleContainerProps = {
  visible: boolean;
} & TLayout;

const Container = styled.dialog<TStyleContainerProps>`
  position: absolute;

  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'flex' : 'none')};

  flex-direction: column;

  width: ${(props) => props.width ?? `calc(100% - 40px)`};
  height: ${(props) => props.height};
  padding: 32px 20px;
  margin: 0 auto;
  overflow: hidden;

  border: none;
  border-radius: ${(props) => props.borderRadius ?? '6px'};
  background-color:${theme.neutral['700']}

  &::backdrop {
    background: rgb(0 0 0 / 50%);
  }
`;

const Details = styled.div`
  display: flex;

  flex-direction: column;

  align-items: center;
  justify-content: center;

  margin-bottom: 28px;
`;

const Title = CommonTitle;

const DescriptionContainer = styled.div`
  margin-top: 8px;
`;

const Description = styled.p`
  color: ${theme.neutral[300]};
  text-align: center;

  /* Text 2 */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export type TStyleContentsContainerProps = {
  scrollable?: boolean;
};

const ContentsContainer = styled.div<TStyleContentsContainerProps>`
  flex: 1;

  width: 100%;
  overflow-y: ${(props) => (props.scrollable ? 'scroll' : 'hidden')};
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default {
  Container,
  Details,
  Title,
  DescriptionContainer,
  Description,
  ContentsContainer,
};
