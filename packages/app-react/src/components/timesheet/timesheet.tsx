import { FcButton, FcModal, FcInput } from "frag-components-react";
import { FormEvent } from "react";
import { useState } from "react";
import { propertyOf } from "../../helpers/property-of";
import TimesheetTable, { TimesheetEntry } from "./timesheet-table";

export default function Timesheet() {
  const [deleteConfirmationDialogOpen, setDeleteConfirmationDialogOpen] =
    useState<boolean>(false);
  const [timesheetEntryDialogOpen, setTimesheetEntryDialogOpen] =
    useState<boolean>(false);
  const [selectedTimesheetEntry, setSelectedTimesheetEntry] = useState<
    Partial<TimesheetEntry>
  >({});
  const [entries, setEntries] = useState<TimesheetEntry[]>([
    { id: "1", date: "10.07.2021", description: "Bugfixing", effort: "2h" },
    { id: "2", date: "10.07.2021", description: "Refactoring", effort: "2h" },
  ]);

  function handleDelete() {
    setDeleteConfirmationDialogOpen(true);
  }

  function handleEdit(timeSheetEntry: TimesheetEntry) {
    setSelectedTimesheetEntry(timeSheetEntry);
    setTimesheetEntryDialogOpen(true);
  }

  function closeTimesheetEntryDialog() {
    setTimesheetEntryDialogOpen(false);
    setSelectedTimesheetEntry({});
  }

  function handleTimesheetEntryChange(ev: any) {
    const name = ev.target.name;

    setSelectedTimesheetEntry({
      ...selectedTimesheetEntry,
      [name]: ev.target.value,
    });
  }

  function handleSubmit() {
    if (selectedTimesheetEntry.id) {
      console.log("EDIT", selectedTimesheetEntry);
      const updated = entries.map(e => {
        if (selectedTimesheetEntry.id === e.id) {
          return selectedTimesheetEntry;
        } 

        return e;
      });

      setEntries(updated as TimesheetEntry[]);
    } else {
      selectedTimesheetEntry.id = Math.round(Math.random() * 100).toString();
      entries.push(selectedTimesheetEntry as TimesheetEntry);
      console.log("NEW", selectedTimesheetEntry);
      setEntries(entries);
    }

    closeTimesheetEntryDialog();
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
            click: closeTimesheetEntryDialog,
          },
          {
            label: "Speichern",
            color: "primary",
            click: handleSubmit,
          },
        ]}
        onCloseModal={closeTimesheetEntryDialog}
        modalTitle={
          selectedTimesheetEntry.id
            ? "Zeitbuchung bearbeiten"
            : "Neue Zeitbuchung"
        }
        isOpen={timesheetEntryDialogOpen}
      >
        <form onSubmit={handleSubmit}>
          <FcInput
            name={propertyOf<TimesheetEntry>("description")}
            label="Beschreibung"
            value={selectedTimesheetEntry.description}
            onInputChange={handleTimesheetEntryChange}
          ></FcInput>
          <div className="fu-flex">
            <FcInput
              name={propertyOf<TimesheetEntry>("date")}
              label="Datum"
              className="fu-flex-1"
              value={selectedTimesheetEntry.date}
              onInputChange={handleTimesheetEntryChange}
            ></FcInput>
            <div className="fu-pr"></div>
            <FcInput
              name={propertyOf<TimesheetEntry>("effort")}
              label="Aufwand"
              value={selectedTimesheetEntry.effort}
              onInputChange={handleTimesheetEntryChange}
            ></FcInput>
          </div>
        </form>
      </FcModal>

      <div className="fu-pb">
        <FcButton
          onClick={() => setTimesheetEntryDialogOpen(true)}
          color="primary"
        >
          Neue Buchung
        </FcButton>
      </div>
      <TimesheetTable
        entries={entries}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}
