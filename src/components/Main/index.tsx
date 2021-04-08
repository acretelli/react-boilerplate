import * as S from './styles'

const Main = ({
  title = 'A Beautiful and Useful Next.js Boilerplate',
  description = 'TypeScript, ReactJS, NextJS and Styled Components'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um disco voador capturando um extraterrestre, enquanto outro observa assustado."
    />
  </S.Wrapper>
)

export default Main
