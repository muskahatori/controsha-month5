const ContactList = ({ contacts, selectedContact, setSelectedContact }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <li
          key={contact.id}
          onClick={() => setSelectedContact(contact)}
          className={selectedContact?.id === contact.id ? 'active' : ''}
        >
          {contact.name}
        </li>
      ))}
    </ul>
  )
}

export default ContactList