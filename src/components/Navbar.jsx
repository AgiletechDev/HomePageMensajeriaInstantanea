import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Menu, MenuItem, useMediaQuery, Typography, Box, Drawer,  IconButton, } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { router } from "../routers/router";
import logo from '../assets/images/LOGO.png';
import { useTheme } from "@mui/material/styles";
import MenuIcon from '@mui/icons-material/Menu'
import { useTranslation } from 'react-i18next'
import spainFlag from '../assets/images/spain.png'
import estadosunidos from '../assets/images/estadosunidos.png'
import { useLanguage } from "../store/LanguageContext";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const [englishLanguage, setEnglishLanguage] = useState(false);
  const { language, changeLanguage } = useLanguage();

  const { t, i18n } = useTranslation();


  
  useEffect(() => {
    i18n.changeLanguage(language);
    setEnglishLanguage(language === 'en');
  }, [i18n, language]);

  const handleLanguage = () => {
    const newLanguage = !englishLanguage ? 'en' : 'es';

    // Utiliza la función de cambio de idioma del estado global
    changeLanguage(newLanguage);

    setEnglishLanguage(!englishLanguage);
  };

  const menuItems = [
    { to: "/", labelKey: "" },
    { to: "/aplicaciones", labelKey: "DRAWER1" },
    { to: "/donar", labelKey: "DRAWER2" },
    { to: "/verificacion", labelKey: "DRAWER3" },
    { to: "/blog", labelKey: "DRAWER4" },
    { to: "/hojaderuta", labelKey: "DRAWER5" },
    { to: "/empleo", labelKey: "DRAWER6" },
    { to: "/sobrenosotros", labelKey: "DRAWER7" },
  ];

  

  
  const [resourcesMenuAnchor, setResourcesMenuAnchor] = useState(null);
  const [companyMenuAnchor, setCompanyMenuAnchor] = useState(null);

  const handleResourcesMenuOpen = (event) => {
    setResourcesMenuAnchor(event.currentTarget);
  };

  const handleCompanyMenuOpen = (event) => {
    setCompanyMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setResourcesMenuAnchor(null);
    setCompanyMenuAnchor(null);
  };
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleDrawerOpen = () => {
    setDrawerOpen(true)
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false)
  }
  if (isMobile) {
    return (
      <React.Fragment>
      <AppBar
        component="nav"
        position="fixed"
        sx={{
          marginBottom: '40px',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '0',
            background: theme.palette.primary.gradient,
            backdropFilter: 'blur(18px)',
            position: 'relative',
            gap: '20px'
          }}
        >
          <Link
            to="/"
            color="inherit"
            style={{
              width: '300px',
              padding: '10px',
              position: 'relative',
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{
                width: '80%',
              }}
            />
          </Link>
          <IconButton color="inherit" onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
        className="drawer"
        PaperProps={{
          style: {
            right: 0,
            width: '250px',
            background: theme.palette.primary.gradient,
          },
        }}
      >
        <Box
          sx={{
            background: theme.palette.primary.gradient,
            padding: '20px',
            textAlign: 'center',
            color: 'white',
            mt: '2em',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            justifyContent: 'center',
          }}
        >
          <Link to="/" onClick={handleDrawerClose}>
            <img
              src={logo}
              alt="logo"
              style={{
                width: '100%',
                marginBottom: '20px',
              }}
            />
          </Link>

          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={handleDrawerClose}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Typography>{t(item.labelKey)}</Typography>
            </Link>
          ))}
        </Box>
      </Drawer>
    </React.Fragment>
    )
  }

  return (
    <AppBar position="fixed" style={{ background: theme.palette.primary.gradient }}>
      <Toolbar style={{ width: 1140, margin: "0 auto", display:'flex', justifyContent:'space-between' }}>
        <Link to="/">
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Logo" style={{ marginRight: 16, height: '50px' }} />
        </div>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {router.routes[0].children.map((childRoute) => (
            <React.Fragment key={childRoute.path}>
              {childRoute.path === "/recursos" || childRoute.path === "/compañia" ? (
                <div style={{ position: 'relative' }}>
                  <Button
                    color="inherit"
                    onClick={childRoute.path === "/recursos" ? handleResourcesMenuOpen : handleCompanyMenuOpen}
                    style={{ textTransform: "capitalize", color: "white" }}
                  >
                    {t(`NAVBARTITLE${childRoute.path === "/recursos" ? 4 : 7}`)}
                    <ArrowDropDownIcon />
                  </Button>

                  {childRoute.path === "/recursos" && resourcesMenuAnchor && (
                    <Menu
                      anchorEl={resourcesMenuAnchor}
                      open={Boolean(resourcesMenuAnchor)}
                      onClose={handleMenuClose}
                    >
                      <MenuItem component={Link} to="/blog" onClick={handleMenuClose}>
                      {t("NAVBARTITLE5")}
                      </MenuItem>
                      <MenuItem component={Link} to="/hojaderuta" onClick={handleMenuClose}>
                      {t("NAVBARTITLE6")}
                      </MenuItem>
                    </Menu>
                  )}

                  {childRoute.path === "/compañia" && companyMenuAnchor && (
                    <Menu
                      anchorEl={companyMenuAnchor}
                      open={Boolean(companyMenuAnchor)}
                      onClose={handleMenuClose}
                    >
                      <MenuItem component={Link} to="/empleo" onClick={handleMenuClose}>
                      {t("NAVBARTITLE8")}
                      </MenuItem>
                      <MenuItem component={Link} to="/sobrenosotros" onClick={handleMenuClose}>
                      {t("NAVBARTITLE9")}
                      </MenuItem>
                    </Menu>
                  )}
                  
                </div>
              ) : childRoute.path === "/aplicaciones" || childRoute.path === "/donar" || childRoute.path === "/verificacion" ? (
                <Button
                  component={Link}
                  to={childRoute.path}
                  color="inherit"
                  style={{ textTransform: "capitalize", color: "white" }}
                >
                   {t(`NAVBARTITLE${childRoute.path === "/aplicaciones" ? 1 : childRoute.path === "/donar" ? 2 : 3}`)}
                </Button>
              ) : null}
             
            </React.Fragment>
          ))}
           <Button
              sx={{ marginLeft: isMobile ? '-28px' : '-12px' }}
              onClick={() => handleLanguage()}
            >
              {!englishLanguage ? (
                <img
                  src={spainFlag}
                  alt="spain flag"
                  style={{ width: isMobile ? '18px' : '24px' }}
                />
              ) : (
                <img
                  src={estadosunidos}
                  alt="UE flag"
                  style={{ width: isMobile ? '18px' : '24px' }}
                />
              )}
            </Button>
        </div>
        
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
