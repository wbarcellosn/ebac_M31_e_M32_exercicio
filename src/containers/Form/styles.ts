import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const FormTitle = styled.h3`
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  margin-top: 16px;
`

export const Form = styled.form`
  max-width: 50%;
  margin: 0 auto;
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;

  button {
    max-width: 30%;
    width: 100%;
    padding: 8px;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    background-color: rgb(17, 169, 170);
    color: #fff;
    cursor: pointer;
  }
`
export const FormData = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  label {
    font-weight: bold;
  }

  input {
    padding: 8px;
    border-radius: 8px;
    border: 0.5px solid rgb(229 231 235);
  }
`
export const HomeBtn = styled(Link)`
  font-size: 16px;
  text-align: center;
  color: #b2bec3;
`
