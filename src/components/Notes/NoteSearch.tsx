import { styled } from "@mui/material";

const StyledSearchInput = styled("input")(() => ({
  unset: "all",
  width: "175px",
  borderRadius: "2px",
  border: "1px solid white",
  height: "100%",
  fontFamily: "Ubuntu, sans-serif",
  fontSize: "1.25rem",

  "@media (max-width:500px)": {
    width: "100%",
    height: "40px",
  },
}));

const NoteSearch = ({
  searchNotes,
  setSearching,
}: {
  searchNotes: (term: string) => void;
  setSearching: (searching: boolean) => void;
}) => {
  const updateSearchTerm = (event: any) => {
    if (event.target.value.length > 0) {
      setSearching(true);
    } else {
      setSearching(false);
    }
    searchNotes(event.target.value);
  };

  return (
    <div>
      <StyledSearchInput
        type="text"
        placeholder="Search notes..."
        onChange={updateSearchTerm}
        onKeyUp={(event) => {
          //@ts-ignore - this exists -- // todo: figure out type fix
          if (event.target.value.length === 0) {
            searchNotes("");
          }
        }}
      />
    </div>
  );
};

export default NoteSearch;
