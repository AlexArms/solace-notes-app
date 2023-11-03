import { styled } from "@mui/material";

interface NoteSortProps {
  sortNotes: (event: any) => void;
}

const StyledSelect = styled("select")(() => ({
  width: "fit-content",
  padding: "0px 20px",
  borderRadius: "4px",
  margin: "auto",
  fontSize: "1.25rem",
  height: "40px",
  textAlign: "center",
}));

const NoteSort = ({ sortNotes }: NoteSortProps) => {
  return (
    <StyledSelect onChange={sortNotes}>
      <option value="newest">Newest</option>
      <option value="oldest">Oldest</option>
      <option value="longest">Longest</option>
      <option value="shortest">Shortest</option>
    </StyledSelect>
  );
};

export default NoteSort;
