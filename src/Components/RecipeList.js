import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import data from "../Assets/recipeData.json";
export default function RecipeList(props) {
  const recipes = data.recipes;

  return (
    <div>
      <ImageList cols={3} gap={4}>
        {recipes.map((recipe, idx) => (
          <ImageListItem
            key={recipe.src}
            onClick={() => {
              props.setIdx(idx);
              props.setOpen(true);
            }}
          >
            <img src={recipe.src} />
            <ImageListItemBar title={recipe.name} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
