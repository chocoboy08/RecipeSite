import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/system";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Typography } from "@mui/material";
import data from "../Assets/recipeData.json";
import React, { useState } from "react";

const RecipeInfo = React.forwardRef((props, ref) => {
  const recipe = data.recipes[props.idx];
  const tags = recipe.tags.map((tag) => `#${tag} `);
  const ingredient = recipe.ingredient.map((igd) => `${igd}, `);
  const process = recipe.process.map((process, idx) => (
    <li key={`${recipe.name}-process-${idx}`} style={{ marginBottom: "20px" }}>
      {process}
    </li>
  ));
  const [like, setLike] = useState(recipe.like);
  const [page, setPage] = useState(1);
  const handleClose = () => {
    props.setOpen(false);
  };
  const handleClick = () => {
    page === 1 ? setPage(page + 1) : setPage(page - 1);
  };
  const handleLike = () => {
    like !== "true" ? setLike("true") : setLike("false");
    like !== "true" ? (recipe.like = "true") : (recipe.like = "false");
  };

  return (
    <Grid2
      container
      sx={{ width: 382, height: 522, backgroundColor: "white" }}
      justifyContent="center"
      ref={ref}
      tabIndex="-1"
    >
      <Grid2
        item
        xs={12}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ height: "14%" }}
      >
        {like === "true" ? (
          <FavoriteIcon
            sx={{
              marginLeft: "15px",
              marginBottom: "20px",
              color: "#FF5B5B",
            }}
            onClick={handleLike}
          />
        ) : (
          <FavoriteBorderOutlinedIcon
            sx={{
              marginLeft: "15px",
              marginBottom: "20px",
              stroke: "black",
            }}
            onClick={handleLike}
          />
        )}
        <Box style={{ marginTop: "5px" }}>
          <Typography variant="h5">{recipe.name}</Typography>
          <Typography variant="subtitle2" textAlign="center">
            {tags}
          </Typography>
        </Box>
        <CloseIcon
          onClick={handleClose}
          sx={{
            marginRight: "15px",
            marginBottom: "20px",
            stroke: "black",
          }}
        />
      </Grid2>
      {page === 1 ? (
        <Grid2
          item
          xs={12}
          sx={{
            height: "78%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={recipe.src} style={{ width: 250, height: 250 }} />

          <Box
            sx={{
              width: 250,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <Typography>난이도 : {recipe.difficulty}</Typography>
            <Typography>조리 시간 : {recipe.time}</Typography>
            <Typography>준비 재료 : {ingredient}</Typography>
          </Box>
        </Grid2>
      ) : (
        <Grid2 sx={{ width: 350, height: "78%", overflow: "scroll" }}>
          <ol style={{ paddingLeft: "20px" }}>{process}</ol>
        </Grid2>
      )}
      <Grid2
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "8%",
        }}
      >
        {page === 1 ? (
          <Box sx={{ width: 24 }} />
        ) : (
          <ChevronLeftIcon onClick={handleClick} />
        )}
        <div>{page}</div>
        {page === 1 ? (
          <ChevronRightIcon onClick={handleClick} />
        ) : (
          <Box sx={{ width: 24 }} />
        )}
      </Grid2>
    </Grid2>
  );
});

export default RecipeInfo;
