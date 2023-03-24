import React from "react";
import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
      >
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">subtitle1 Heading</Typography>
      <Typography variant="subtitle2">subtitle2 Heading</Typography>

      <Typography variant="body1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
        repellat iure, nobis nesciunt, quis, laboriosam consequuntur consequatur
        doloremque explicabo ipsum modi rerum dignissimos voluptatibus ratione
        voluptatum recusandae placeat quod magnam?
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
        temporibus optio nam labore accusantium quaerat magni, beatae provident
        quia laboriosam fugit earum voluptate, nisi dicta facere eveniet!
        Doloremque, saepe maxime?
      </Typography>
    </div>
  );
};

export default MuiTypography;
