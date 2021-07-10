import React from 'react';
import { FcButton, FcModal } from 'frag-components-react';
import './App.css';
import { useState } from 'react';
import 'frag-components/dist/frag-components/frag-components.css'

function App() {
  const [open, setOpen] = useState<boolean>();
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
