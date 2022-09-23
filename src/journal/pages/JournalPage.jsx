import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { startNewNote } from "../../store/journal/thunks";
import { JournalLayout } from "../layouts/JournalLayout";
import { NothingSelectedView } from "../views/NothingSelectedView";

export const JournalPage = () => {
  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>
      <NothingSelectedView />
      {/* <NoteView/> */}

      <IconButton
        onClick={onClickNewNote}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "third.main",
          position: "fixed",
          right: 50,
          bottom: 50,
          "&:hover": { backgroundColor: "third.hover" },
        }}
      >
        <AddOutlined sx={{ fontSize: 30, ":hover": { color: "black" } }} />
      </IconButton>
    </JournalLayout>
  );
};
