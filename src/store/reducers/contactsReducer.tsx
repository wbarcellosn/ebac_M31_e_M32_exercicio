import ContactModel from '../../models/contactModel'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type contactState = {
  itens: ContactModel[]
}

const initialState: contactState = {
  itens: [
    {
      id: 1,
      name: 'Contato 1',
      email: 'contato1@gmail.com',
      tel: '(27) 9999-5658'
    },
    {
      id: 2,
      name: 'Contato 2',
      email: 'contato2@gmail.com',
      tel: '(27) 9999-5659'
    },
    {
      id: 3,
      name: 'Contato 3',
      email: 'contato3@gmail.com',
      tel: '(27) 9999-5660'
    }
  ]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    createContact: (state, action: PayloadAction<ContactModel>) => {
      const contactAlreadyExists = state.itens.find(
        (contact) => contact.tel === action.payload.tel
      )
      if (contactAlreadyExists) {
        alert('Este telefone já foi cadastrado!')
      } else {
        const newContact = action.payload
        state.itens.push(newContact)
      }
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contact) => contact.id !== action.payload)
      ]
    },
    editContact: (state, action: PayloadAction<ContactModel>) => {
      const indexContact = state.itens.findIndex(
        (item) => item.id === action.payload.id
      )

      if (indexContact >= 0) {
        state.itens[indexContact] = action.payload
      }
    }
  }
})

export const { createContact, deleteContact, editContact } =
  contactsSlice.actions
export default contactsSlice.reducer
