import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import ReactInputMask from 'react-input-mask'
import { v4 as uuidv4 } from 'uuid'

import * as S from './styles'
import { createContact } from '../../store/reducers/contactsReducer'
import RenderButton from '../../components/Button'

const id = uuidv4()

function Form() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactTel, setContactTel] = useState('')

  function registerContact(e: FormEvent) {
    e.preventDefault()

    dispatch(
      createContact({
        id,
        name: contactName,
        email: contactEmail,
        tel: contactTel
      })
    )
    navigate('/')
  }

  return (
    <>
      <S.FormTitle>Cadastro de novo contato</S.FormTitle>
      <S.Form onSubmit={registerContact}>
        <S.FormData>
          <label htmlFor="name">Nome: *</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Nome (obrigatório)"
            required
            onChange={(e) => setContactName(e.target.value)}
          />
        </S.FormData>
        <S.FormData>
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="E-mail"
            onChange={(e) => setContactEmail(e.target.value)}
          />
        </S.FormData>
        <S.FormData>
          <label htmlFor="tel">Telefone: *</label>
          <ReactInputMask
            name="tel"
            id="tel"
            mask={'(99) 99999-9999'}
            placeholder="Telefone (obrigatório)"
            required
            onChange={(e) => setContactTel(e.target.value)}
          />
        </S.FormData>
        <RenderButton>Cadastrar</RenderButton>
        <S.HomeBtn to={'/'}>Voltar</S.HomeBtn>
      </S.Form>
    </>
  )
}

export default Form
