import React from 'react';

import HighlightCard from '../../components/HighlightCard';

import * as S from './styles';


export const Dashboard = () => {
  return (
    <S.ContainerView>
      <S.Header>
        <S.UserWrapper>
          <S.UserInfo>
            <S.Photo source={{ uri: "https://avatars.githubusercontent.com/u/69859248?v=4" }} />
            <S.User>
              <S.UserGretting>Olá, </S.UserGretting>
              <S.UserName>Cadu</S.UserName>
            </S.User>
          </S.UserInfo>
          <S.Icon name="power" />
        </S.UserWrapper>
      </S.Header>

      <S.HighlightCards>
        <HighlightCard
          title='Entradas'
          amount='R$ 17.400,00'
          lastTransaction='Última entrada dia 13 de abril'
          type='up'
        />
        <HighlightCard
          title='Saídas'
          amount='R$ 1.4259,00'
          lastTransaction='Última saída dia 03 de abril'
          type='down'
        />
        <HighlightCard
          title='Total'
          amount='R$ 16.141,00'
          lastTransaction='01 à 16 de abril'
          type='total'
        />
      </S.HighlightCards>
    </S.ContainerView>
  )
}
