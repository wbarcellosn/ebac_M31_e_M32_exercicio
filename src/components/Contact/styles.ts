import styled from 'styled-components'

import { RiDeleteBin2Line } from 'react-icons/ri'
import { FiEdit } from 'react-icons/fi'
import { IoSaveOutline } from 'react-icons/io5'
import { MdOutlineCancel } from 'react-icons/md'

export const ContactContainer = styled.div`
  max-width: 100%;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid rgb(229 231 235);
  background-color: #fff;
`
export const DivStylized = styled.div`
  max-width: 30%;
  width: 100%;
`
export const ContactLabel = styled.span`
  display: block;
  font-weight: bold;
`
export const ContactData = styled.span`
  display: block;
`
export const IconsContainer = styled.div`
  font-size: 24px;
  display: flex;
  gap: 8px;
  cursor: pointer;
`
export const InputEditable = styled.input`
  width: 100%;
  padding: 4px;
  border: 1px solid rgb(229 231 235);
  outline: none;
  border-radius: 4px;
`

//Icons
export const DeleteIcon = styled(RiDeleteBin2Line)`
  padding: 8px;
  font-size: 40px;
  border: 1.5px solid rgb(229 231 235);
  border-radius: 8px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
`
export const EditeIcon = styled(FiEdit)`
  padding: 8px;
  font-size: 40px;
  border: 1.5px solid rgb(229 231 235);
  border-radius: 8px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
`
export const SaveIcon = styled(IoSaveOutline)`
  padding: 8px;
  font-size: 40px;
  border: 1.5px solid rgb(229 231 235);
  border-radius: 8px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
`
export const CancelIcon = styled(MdOutlineCancel)`
  padding: 8px;
  font-size: 40px;
  border: 1.5px solid rgb(229 231 235);
  border-radius: 8px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
`
