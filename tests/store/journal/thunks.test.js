import { startNewNote } from "../../../src/store/journal/thunks";

describe("Pruebas en journalThunks", () => {
  const dispatch = jest.fn();

  const getState = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("startNewNote debe de crear una nueva nota en blanco", async () => {
    const uid = "test-uid";

    getState.mockReturnValue({ auth: { uid: uid } });

    await startNewNote()(dispatch, getState);
  });
});
