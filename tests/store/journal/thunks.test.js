import { addNewEmptyNote, savingNewNote, setActiveNote } from "../../../src/store/journal/journalSlice";
import { startNewNote } from "../../../src/store/journal/thunks";

describe("Pruebas en journalThunks", () => {
  const dispatch = jest.fn();

  const getState = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("startNewNote debe de crear una nueva nota en blanco", async () => {
    const uid = "test-uid";

    getState.mockReturnValue({ auth: { uid: uid } });

    await startNewNote()(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(savingNewNote());
    expect(dispatch).toHaveBeenCalledWith(addNewEmptyNote({
        body: '',
        title: '',
        id: expect.any(String),
        date: expect.any(Number)
    }));

    expect(dispatch).toHaveBeenCalledWith(setActiveNote({
        body: '',
        title: '',
        id: expect.any(String),
        date: expect.any(Number)
    }));



  });
});
