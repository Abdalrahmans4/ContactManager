import React from 'react';
import {useState} from 'react';
import './css/contact.css'



function Contact(props) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
   


    const addContactsSubmit = (e) => {
        e.preventDefault();

        let newContacts = {
            username,
            email
           
        };
       
        props.addContacts(newContacts);

        // Clear form
        setUsername("");
        setEmail("");
       


    


    }
  return (
    <div>
         
            <h1>🚀 React Form </h1>

            <h2>Add a Contact</h2>
            <form onSubmit={addContactsSubmit} >
                <input
                    type="text"
                    placeholder='Name'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    
                />

               
                

                <button type="submit">
                    Add Contact
                </button>
            </form>


        </div>

  );
}

export default Contact;
