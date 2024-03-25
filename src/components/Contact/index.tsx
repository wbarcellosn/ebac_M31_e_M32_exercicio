import * as S from './styles'
import { useDispatch } from 'react-redux'
import {
  deleteContact,
  editContact
} from '../../store/reducers/contactsReducer'
import ContactModel from '../../models/contactModel'
import { useEffect, useState } from 'react'

type Props = ContactModel

function Contact({ id, name, email, tel }: Props) {
  const dispatch = useDispatch()
  const [editedName, setEditedName] = useState('')
  const [editedEmail, setEditedEmail] = useState('')
  const [editedTel, setEditedTel] = useState('')
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    if (name.length && tel.length > 0) {
      setEditedName(name)
      setEditedEmail(email)
      setEditedTel(tel)
    }
  }, [name, email, tel])

  function delContact() {
    dispatch(deleteContact(id))
  }

  function editingContact() {
    setIsEditing(true)
  }

  function saveEdition() {
    if (editedName.length && editedTel.length > 0) {
      setIsEditing(false)
      dispatch(
        editContact({
          id,
          name: editedName,
          email: editedEmail,
          tel: editedTel
        })
      )
    }
  }

  function cancelEdition() {
    setIsEditing(false)
    setEditedName(name)
    setEditedEmail(email)
    setEditedTel(tel)
  }

  return (
    <S.ContactContainer>
      <S.DivStylized>
        <S.ContactLabel>Nome:</S.ContactLabel>
        {isEditing ? (
          <S.InputEditable
            type="text"
            placeholder={editedName}
            autoFocus
            onChange={(e) => setEditedName(e.target.value)}
          />
        ) : (
          <S.ContactData>{editedName}</S.ContactData>
        )}
      </S.DivStylized>

      <S.DivStylized>
        <S.ContactLabel>E-mail:</S.ContactLabel>
        {isEditing ? (
          <S.InputEditable
            type="text"
            placeholder={editedEmail}
            onChange={(e) => setEditedEmail(e.target.value)}
          />
        ) : (
          <S.ContactData>{editedEmail}</S.ContactData>
        )}
      </S.DivStylized>

      <S.DivStylized>
        <S.ContactLabel>Telefone:</S.ContactLabel>
        {isEditing ? (
          <S.InputEditable
            type="text"
            placeholder={editedTel}
            onChange={(e) => setEditedTel(e.target.value)}
          />
        ) : (
          <S.ContactData>{editedTel}</S.ContactData>
        )}
      </S.DivStylized>
      <S.IconsContainer>
        {isEditing ? (
          <>
            <S.CancelIcon onClick={cancelEdition} />
            <S.SaveIcon onClick={saveEdition} />
          </>
        ) : (
          <>
            <S.DeleteIcon title="Deletar" onClick={delContact} />
            <S.EditeIcon title="Editar" onClick={editingContact} />
          </>
        )}
      </S.IconsContainer>
    </S.ContactContainer>
  )
}

export default Contact
