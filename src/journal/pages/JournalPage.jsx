import React from "react";
import { JournalLayout } from "../layouts/JournalLayout";
import { NothingSelectedView } from "../views/NothingSelectedView";

export const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView/>
    </JournalLayout>
  );
};
