import logo from './logo.svg';
import './App.css';
import ContactForm from './components/ContactForm'
import { useState,useEffect } from 'react';



function App() {
  const[Contact,setContact]=useState([]);
  const addContacts = (contact) =>{
    setContact([...Contact, contact]);
  }
  useEffect(() => {
    console.log(Contact);
    if (Contact.length > 0) {
      console.log(`✅ New person added: ${Contact[Contact.length - 1].name}`);
      
    }
  }, [Contact]);

  return (
    <div>
      <ContactForm addContacts={addContacts} />
    </div>
  );
}

export default App;
