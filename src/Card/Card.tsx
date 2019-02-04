import * as React from 'react'
import { withTheme } from 'styled-components'

import { getMainColor } from '../_internal/colors'
import Title from '../Title'

import CardProps from './Card.interface'
import { CardContainer, TitleContainer, SubtitleContainer, TitleCount } from './Card.style'

const Card: React.StatelessComponent<CardProps> = ({ headerPosition, action, title, titleCount, subtitle, children, ...props }) => (
  <React.Fragment>
    {
      title && headerPosition === 'outside' &&
      <TitleContainer>
        <Title size={3}>{ title }{titleCount ? <TitleCount>({ titleCount })</TitleCount> : null}</Title>
        { action }
      </TitleContainer>
    }
    <CardContainer {...props}>
      {
        title && headerPosition === 'inside' &&
        <TitleContainer>
          <Title size={3}>{ title }{(titleCount || titleCount === 0) ? <TitleCount>({ titleCount })</TitleCount> : null}</Title>
          { action }
        </TitleContainer>
      }
      {
        subtitle &&
        <SubtitleContainer>
          <Title size={4} color={getMainColor(props, { themeKey: 'neutral' })}>{ subtitle }</Title>
        </SubtitleContainer>
      }
      { children }
    </CardContainer>
  </React.Fragment>
)

Card.defaultProps = {
  headerPosition: 'inside'
}

export default withTheme(Card)
