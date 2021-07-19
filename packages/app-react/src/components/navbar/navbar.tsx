import { FcTopMenu } from "frag-components-react";
import { useHistory } from "react-router-dom";

export default function Navbar() {
  const history = useHistory();

  return (
    <FcTopMenu
      items={[
        {
          label: "Projects",
          active: true,
          click: () => {
              history.push("/");
          },
        },
        {
          label: "Timesheet",
          click: () => {
              history.push("/timesheet");
          },
        },
      ]}
    ></FcTopMenu>
  );
}
