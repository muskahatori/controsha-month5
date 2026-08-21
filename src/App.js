import { useState } from 'react';
import SearchInput from './SearchInput';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import './App.css';

const CONTACTS = [
  { id: 1, name: 'Мусака', phone: '+996 999 01-14-09', email: 'apollon@gmail.com' },
  { id: 2, name: 'Кенши', phone: '+996 552 71-81-21', email: '@gmail.com' },
  { id: 3, name: 'Вторая любовница', phone: '+996 502 05-24-94', email: 'islambek@gmail.com' },
  { id: 4, name: 'Любовница', phone: '+996 555 45-67-89', email: 'arsen@mail.com' },
  { id: 5, name: 'Жена', phone: '+996 555 56-78-90', email: 'beatiful@gmail.com' }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);
  const filtered = CONTACTS.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="app">
      <div className="left">
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ContactList
          contacts={filtered}
          selectedContact={selectedContact}
          setSelectedContact={setSelectedContact}
        />
      </div>
      <div className="right">
        <ContactDetails contact={selectedContact} />
      </div>
    </div>
  );
}
export default App;