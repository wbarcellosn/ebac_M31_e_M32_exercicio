import styled, { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
}

body {
  overflow: hidden;
}
`
export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`

export const Header = styled.header`
  padding: 32px;
  background-color: rgb(17, 169, 170);
  color: #fff;

  h1 {
    text-align: center;
  }
`
export const MainContainer = styled.main`
  height: 100vh;
  overflow-y: scroll;
`

export default globalStyle
