import React from "react";
import { Box, Button, Stack } from "@mui/material";
import routes from "../routes";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedCategory } from "../redux/slices/ExperimentReducer";

const Categories = () => {
  const { selectedCategory } = useSelector((state) => state.exp);
  const dispatch = useDispatch();

  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        flexDirection: { xs: "row", md: "column" },
        overflow: "hiden",
        height: { xs: "50px", md: "100vh" },
        py: 1,
        flex: 0.15,
      }}
    >
      {routes.map((category) => (
        <Box
          key={category.key}
          sx={{ width: { xs: "250px", md: "auto" }, mx: "2px",marginTop:'100px' ,marginBlock: 1 }}
        >
          <Button
            onClick={() => dispatch(updateSelectedCategory(category.name))}
            sx={{
              width: "100%",
              borderRadius: "12px",
              display: "flex",
              justifyContent: { xs: "space-between", md: "flex-start" },
              background: category.name === selectedCategory && "#F0F0F0",
              "&:hover": { background: "#136ca7d920" },
              my: "1px",
              color: "black",
            }}
            key={category.name}
          >
            <span style={{ marginLeft: 15, color: "#136ca7d9" }}>
              {category.icon}
            </span>
            <span
              style={{
                opacity: category.name === selectedCategory ? "1" : "0.8",
                marginLeft: 15,
                color: "black",
                fontWeight: 500,
              }}
            >
              {category.name}
            </span>
          </Button>
        </Box>
      ))}
    </Stack>
  );
};

export default Categories;
