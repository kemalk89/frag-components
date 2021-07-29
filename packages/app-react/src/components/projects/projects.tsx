import { FcTab, FcTabs } from "frag-components-react";

export default function Projects() {

  const tabs = [
    { label: 'Meine Projekte', tab: 'my-projects' },
    { label: 'Alle Projekte', tab: 'all-projects' },
  ];

  return (
    <div>
      <FcTabs tabs={tabs} selected-tab="my-projects">
        <FcTab tab="my-projects">
          My Projects
        </FcTab>
        <FcTab tab="all-projects">
          All Projects
        </FcTab>
      </FcTabs>
    </div>
  );
}
