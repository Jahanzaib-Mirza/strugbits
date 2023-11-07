import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../images/images.png";
import Customer from "../components/Customer";
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

const drawerWidth = 240;

const Home = (props) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div
        style={{
          padding: 5,
          marginTop: 10,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={logo} alt="" width={150} />
      </div>
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
                background: "#043933 0% 0% no-repeat padding-box",
                boxShadow: "0px 5px 25px #00000040",
                marginX: 4,
                borderRadius: "10px",
            }}
            >
              <PeopleOutlineIcon sx={{color:"#fff",marginRight:2}}/>
            <ListItemText sx={{ color: "#fff" }} primary={"CUSTOMERS"} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: "0px 3px 15px #6B6B6B1A",
          background: "#fff",
          opacity: 1,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "#000" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            sx={{ color: "#000", fontWeight: 700 }}
            variant="h6"
            noWrap
            component="div"
          >
            Customers
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "#015249 0% 0% no-repeat padding-box",
              borderRadius: "0px 20px 20px 0px",
              opacity: 1,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "#015249 0% 0% no-repeat padding-box",
              borderRadius: "0px 20px 20px 0px",
              opacity: 1,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 0,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Customer/>
      </Box>
    </Box>
  );
};

export default Home;
