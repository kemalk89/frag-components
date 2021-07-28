type Entry = {
  id: string;
  date: string;
  description: string;
  effort: string;
};

type TimesheetTableProps = {
  entries: Entry[];
};

export default function TimesheetTable({ entries }: TimesheetTableProps) {
  return (
    <table className="fc-table">
      <thead>
        <tr>
          <td>ID</td>
          <td>Datum</td>
          <td>Beschreibung</td>
          <td>Aufwand</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {entries.map((e) => (
          <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.date}</td>
            <td>{e.description}</td>
            <td>{e.effort}</td>
            <td>
              <button>Bearbeiten</button>
              <button>Löschen</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
