class ContactModel {
  id: number
  name: string
  email: string
  tel: string

  constructor(id: number, name: string, email: string, tel: string) {
    this.id = id
    this.name = name
    this.email = email
    this.tel = tel
  }
}

export default ContactModel
