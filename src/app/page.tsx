"use client";
import Case from "@/components/case";
import Counter from "@/components/counter";
import DataTable from "@/components/data-table";
import ModalDialog from "@/components/modal";
import SnapScrollContainer from "@/components/snap-scroll-container";
import Tabs from "@/components/tabs";
import UserAgeSorter from "@/components/user-age-sorter";
import { useState } from "react";
import data from "@/data/data.json";
const tabs = [
  { label: "Tab 1", content: "Content for Tab 1" },
  { label: "Tab 2", content: "Content for Tab 2" },
  { label: "Tab 3", content: "Content for Tab 3" },
];

export default function Home() {
  return (
    <div>
      <SnapScrollContainer className="p-8">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="text-3xl">I am doing the test on dark theme</div>
          <div className="text-5xl">Scroll</div>
          <div className="text-3xl">Like tiktok/ig/ytshort</div>
        </div>
        <Case
          title="Counter"
          description="Requirement: Make the text within the button display the number of times the button has been clicked."
        >
          <Counter />
        </Case>
        <Case
          title="Javascript function"
          description={`1. find min age, show the name\n2. find max age, show the name\n3. sort by min age\n4. sort by max age`}
        >
          <UserAgeSorter />
        </Case>
        <Case
          title="Tabs"
          description={`1. Clicking on a tab makes it the active tab. Add a visual indication (e.g. using blue text color) for the active tab to differentiate it from the non-active tabs.\n2. At all times, only one panel's contents should be displayed — the one corresponding to the active tab's.`}
        >
          <Tabs tabs={tabs} />
        </Case>
        <Case
          title="Modal Dialog"
          description={`1. Modal dialogs are interactive overlay windows that temporarily disable the main content of a web page, focusing user attention on specific tasks or information. They serve various purposes, including displaying critical alerts, requesting user input, confirming actions, and presenting additional content without navigating away from the current context.\n2. Build a reusable modal dialog component that can be opened and closed withcustomizable title and contents.\n3. The modal dialog should contain the following elements: \na. Title/heading string. \nb. Any contents as the body. \nc. Close button that hides/closes the modal when clicked.\n4. The modal dialog is centered horizontally and vertically on the screen.\n5. The modal dialog is displayed above a semi-transparent background overlay.\n6. The focus of the exercise is on the functionality and not the styling.


`}
        >
          <ModalDialogTester />
        </Case>
        <Case
          title="Data Tables"
          description={`1. The users data table should display the following columns: Id, Name, Age, Occupation\n2. Each row in the table represents a single user\n3. The pagination controls should allow the user to navigate to previous and next pages\n4. The pagination controls should display the current page number and the total number of pages\n5. The table should update dynamically when the user navigates to a different page\n6.  Provide an option to select the number of users displayed per page (e.g., 5, 10, 20)\nCan be search by Name`}
        >
          <DataTable data={data} />
        </Case>
      </SnapScrollContainer>
    </div>
  );
}

const ModalDialogTester = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Open Modal
      </button>

      <ModalDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Cool Dialog"
      >
        <div className="text-black">This is an example dialog.</div>
      </ModalDialog>
    </div>
  );
};
