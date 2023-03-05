import { Modal } from "@mui/material";
import RecipeInfo from "../Components/RecipeInfo";
export default function Details(props) {
  return (
    <Modal
      open={props.open}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        outline: "none",
      }}
    >
      <RecipeInfo idx={props.idx} open={props.open} setOpen={props.setOpen} />
    </Modal>
  );
}
