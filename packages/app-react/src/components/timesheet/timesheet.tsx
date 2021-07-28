import TimesheetTable from "./timesheet-table";

export default function Timesheet() {
    const entries = [
        {id: '1', date: '10.07.2021', description: 'Bugfixing', effort: '2h' },
        {id: '2', date: '10.07.2021', description: 'Refactoring', effort: '2h' },
    ];
  return (
    <div>
      <TimesheetTable entries={entries} />
    </div>
  );
}
