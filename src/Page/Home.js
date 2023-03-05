import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import RecipeList from "../Components/RecipeList";
import Search from "../Components/Search";
import Title from "../Components/Title";
import Details from "./Details";
import { useState } from "react";
export default function Home() {
  const [idx, setIdx] = useState();
  const [open, setOpen] = useState(false);
  return (
    <Grid2 container justifyContent="center">
      <Grid2 item xs={12} md={8}>
        <Title />
      </Grid2>
      <Grid2
        item
        xs={12}
        md={8}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Search />
      </Grid2>
      <Grid2 item xs={12} md={8}>
        <RecipeList setIdx={setIdx} setOpen={setOpen} />
      </Grid2>
      {idx !== undefined ? (
        <Details idx={idx} open={open} setOpen={setOpen}></Details>
      ) : undefined}
    </Grid2>
  );
}
