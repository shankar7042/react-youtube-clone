import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction={{ sm: "row", md: "column" }}
      sx={{ height: { sm: "auto", md: "95%" }, overflowY: "auto" }}
    >
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => {
            setSelectedCategory(category.name);
          }}
          className="category-btn"
          style={{
            background: selectedCategory === category.name && "#fc1503",
            color: "white",
          }}
        >
          <span
            style={{
              color: selectedCategory === category.name ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: selectedCategory === category.name ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
