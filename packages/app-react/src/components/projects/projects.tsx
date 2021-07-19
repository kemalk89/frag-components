import React, { useState } from "react";
import { FcButton, FcModal } from "frag-components-react";

export default function Projects() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      Projects
      <FcButton onClick={() => setOpen(true)} color="primary">
        Löschen
      </FcButton>
      <FcModal
        actionButtons={[
          { label: "Abbrechen", click: () => setOpen(false) },
          {
            label: "OK",
            click: () => {
              console.log("Confirmed");
            },
          },
        ]}
        onCloseModal={() => setOpen(false)}
        modalTitle="Bestätigung"
        isOpen={open}
      >
        Sind Sie wirklich sicher?
      </FcModal>
    </div>
  );
}
