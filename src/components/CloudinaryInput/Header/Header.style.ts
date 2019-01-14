import styled from 'styled-components'

import { colors } from '../../../theme'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 48px;

  height: 48px;
  padding: 0 16px;

  background-color: ${colors.trueBlue};
  color: ${colors.white};
`

export const Title = styled.div`
  margin-left: 24px;
  user-select: none;
  flex: 0 0 auto;
`

export const Uploader = styled.div`
  flex: 1 1 100%;
  text-align: right;

  & input {
    display: none;
  }
`
