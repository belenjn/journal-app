import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { JournalLayout } from "../layouts/JournalLayout";
import { NoteView } from "../views/NoteView";
import { NothingSelectedView } from "../views/NothingSelectedView";

export const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView />
      {/* <NoteView/> */}

      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "third.main",
          position: "fixed",
          right: 50,
          bottom: 50,
          "&:hover": { backgroundColor: "third.hover"},
        }}
      >
        <AddOutlined sx={{ fontSize: 30, ":hover": { color: "black" } }} />
      </IconButton>
    </JournalLayout>
  );
};
