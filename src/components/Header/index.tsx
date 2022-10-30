import { NavLink, Box } from "@mantine/core";
import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import "../../styles/styles.css";

const HeaderContent: FC = () => {
  const location = useLocation();

  return (
    <div className="container">
      <Link to="/">
        <img src={logo} alt="Schmell" width={300} />
      </Link>
      <Box sx={{ display: "flex" }}>
        <NavLink
          label="Kontakt"
          component={Link}
          to="/contact"
          active={location.pathname === "/contact"}
          color={"gold.6"}
        />
        <NavLink
          label="Personvern"
          component={Link}
          to="/privacy"
          active={location.pathname === "/privacy"}
          color={"gold.6"}
        />
      </Box>
    </div>
  );
};

export default HeaderContent;
