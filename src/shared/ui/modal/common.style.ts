import { TLayout } from './common/common.types';
import styled from 'styled-components';

import { theme } from '@/shared/constants';

export type TStyleContainerProps = {
  visible?: boolean;
} & TLayout;

export const Container = styled.dialog<TStyleContainerProps>`
  position: absolute;

  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'flex' : 'none')};

  flex-direction: column;

  width: ${(props) => props.width ?? '300px'};
  height: ${(props) => props.height};

  margin: 0 auto;

  border: none;
  border-radius: 10px;
  background-color: ${theme.neutral['700']};
`;

export const CommonTitle = styled.h4`
  color: var(--Neutral-White, #fff);
  text-align: center;

  /* Header 2 */
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const DefaultStyles = {
  actionTextColor: theme.red['400'],
  cancelTextColor: theme.neutral.white,
};
