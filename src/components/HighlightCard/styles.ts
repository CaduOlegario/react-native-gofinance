import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from "styled-components/native";
import { Feather } from '@expo/vector-icons'

interface TypeProps {
  type: 'up' | 'down' | 'total';
}

export const Container = styled.View<TypeProps>`
  background-color: ${({ theme }) => theme.colors.shape};
  
  width: ${RFValue(300)}px;
  height: auto;
  border-radius: 5px;

  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin: 0 16px;

  ${({ type }) => type === 'total' && css`
    background-color: ${({theme }) => theme.colors.secondary};
  `}
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text<TypeProps>`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.textDark};

  ${({ type }) => type === 'total' && css`
    color: ${({theme }) => theme.colors.shape};
  `}
`;

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(40)}px;

  ${({ type }) => type === 'up' && css`
    color: ${({theme }) => theme.colors.success};
  `}

  ${({ type }) => type === 'down' && css`
    color: ${({theme }) => theme.colors.error};
  `}

  ${({ type }) => type === 'total' && css`
    color: ${({theme }) => theme.colors.shape};
  `}
`;

export const Content = styled.View`
`;

export const Amount = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;

  color: ${({ theme }) => theme.colors.textDark};
  margin-top: 38px;

  ${({ type }) => type === 'total' && css`
    color: ${({theme }) => theme.colors.shape};
  `}
`;

export const LastTransaction = styled.Text<TypeProps>`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.text};

  ${({ type }) => type === 'total' && css`
    color: ${({theme }) => theme.colors.shape};
  `}
`;