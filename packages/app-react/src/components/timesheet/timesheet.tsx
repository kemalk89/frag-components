import { FcButton, FcModal, FcInput } from "frag-components-react";
import { useState } from "react";
import TimesheetTable from "./timesheet-table";

export default function Timesheet() {
  const [deleteConfirmationDialogOpen, setDeleteConfirmationDialogOpen] =
    useState<boolean>(false);

  const [newEntryDialogOpen, setNewEntryDialogOpen] = useState<boolean>(false);

  const entries = [
    { id: "1", date: "10.07.2021", description: "Bugfixing", effort: "2h" },
    { id: "2", date: "10.07.2021", description: "Refactoring", effort: "2h" },
  ];

  function handleDelete() {
    setDeleteConfirmationDialogOpen(true);
  }

  return (
    <div>
      <FcModal
        actionButtons={[
          {
            label: "Abbrechen",
            click: () => setDeleteConfirmationDialogOpen(false),
          },
          {
            label: "OK",
            click: () => {
              console.log("Confirmed");
            },
          },
        ]}
        onCloseModal={() => setDeleteConfirmationDialogOpen(false)}
        modalTitle="Löschen bestätigen"
        isOpen={deleteConfirmationDialogOpen}
      >
        Sind Sie wirklich sicher?
      </FcModal>

      <FcModal
        actionButtons={[
          {
            label: "Abbrechen",
            click: () => setNewEntryDialogOpen(false),
          },
          {
            label: "Speichern",
            color: "primary",
            click: () => {
              console.log("Confirmed");
            },
          },
        ]}
        onCloseModal={() => setNewEntryDialogOpen(false)}
        modalTitle="Neue Zeitbuchung"
        isOpen={newEntryDialogOpen}
      >
        <FcInput label="Beschreibung"></FcInput>
        <div className="fu-flex">
          <FcInput label="Datum" className="fu-flex-1"></FcInput>
          <div className="fu-pr"></div>
          <FcInput label="Aufwand"></FcInput>
        </div>
      </FcModal>

      <div className="fu-pb">
        <FcButton onClick={() => setNewEntryDialogOpen(true)} color="primary">
          Neue Buchung
        </FcButton>
      </div>
      <TimesheetTable entries={entries} onDelete={handleDelete} />
    </div>
  );
}
