import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FcButton, FcModal } from 'frag-components-react';
import 'frag-components/dist/frag-components/frag-components.css'
import { useState } from 'react';


function App() {
  const [open, setOpen] = useState<boolean>(false);
  
  return (
    <div className="App">
      <FcButton onClick={() => setOpen(true)} color="primary">Löschen</FcButton>
      <FcModal onClose={() => setOpen(false)} modalTitle="Bestätigung" isOpen={open}>
        Sind Sie wirklich sicher?
      </FcModal>
    </div>
  );
}

export default App;
