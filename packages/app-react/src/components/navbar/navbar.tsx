import { FcTopMenu } from "frag-components-react";
import { useHistory, useLocation } from "react-router-dom";

export default function Navbar() {
  const history = useHistory();
  const location = useLocation();

  return (
    <FcTopMenu
      items={[
        {
          label: "Projects",
          active: ['/', '/projects'].indexOf(location.pathname) > -1,
          click: () => {
              history.push("/");
          },
        },
        {
          label: "Timesheet",
          active: '/timesheet' === location.pathname,
          click: () => {
              history.push("/timesheet");
          },
        },
      ]}
    ></FcTopMenu>
  );
}
