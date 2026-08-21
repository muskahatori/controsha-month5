const ContactDetails = ({ contact }) => {
  if (!contact) {
    return <p>Выберите контакт из списка</p>
  }

  return (
    <div>
      <h2>{contact.name}</h2>
      <p>Телефон: {contact.phone}</p>
      <p>Email: {contact.email}</p>
    </div>
  )
}

export default ContactDetails