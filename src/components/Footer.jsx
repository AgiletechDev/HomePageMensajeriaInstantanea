import { Box, Typography, Divider,useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import imgLogo from "../assets/images/LOGO.png";
import { Link } from "react-router-dom";
import footerbg from '../assets/images/footerbg.png'
import { useTranslation } from 'react-i18next'

export const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation();
  
  return (
    <Box
      sx={{
        background: isMobile ? theme.palette.primary.gradient : `url(${footerbg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: isMobile ? 'none' : "cover",
        paddingTop: isMobile ? '1em' : "10em",
        height: isMobile ? '0' :'100%',
        mb:'-20px'
      }}
    >
      <Box
        sx={{
          mt: "5em",
          display: "flex",
          flexDirection: isMobile ? 'column' : "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2em",
          maxWidth: isMobile ? '100%' : "1100px",
          margin: "auto",
          padding: "2em",
          color: "white",
        }}
      >
        <Link to="/">
          <img src={imgLogo} style={{ height: "50px" }} />
        </Link>

        <Box sx={{ display: "flex", gap: "100px", flexDirection: isMobile ? 'column' : 'row' }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Typography variant="h6">{t("FOOTERT1")}</Typography>
            <Link
              to="/aplicaciones"
              style={{
                textDecoration: "none",
                color: theme.palette.textLight.main,
              }}
            >
              <Typography fontWeight="bold">{t("FOOTERT2")}</Typography>
            </Link>

            <Link
              to="/donar"
              style={{
                textDecoration: "none",
                color: theme.palette.textLight.main,
              }}
            >
              <Typography
                sx={{ color: theme.palette.textLight.main }}
                fontWeight="bold"
              >
                {t("FOOTERT3")}
              </Typography>
            </Link>
            <Link
              to="/hojaderuta"
              style={{
                textDecoration: "none",
                color: theme.palette.textLight.main,
              }}
            >
              <Typography
                sx={{ color: theme.palette.textLight.main }}
                fontWeight="bold"
              >
                {t("FOOTERT4")}
              </Typography>
            </Link>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Typography variant="h6">{t("FOOTERT5")}</Typography>
            <Link
              to="/blog"
              style={{
                textDecoration: "none",
                color: theme.palette.textLight.main,
              }}
            >
              <Typography
                sx={{ color: theme.palette.textLight.main }}
                fontWeight="bold"
              >
               {t("FOOTERT6")}
              </Typography>
            </Link>
            <Typography
              sx={{ color: theme.palette.textLight.main }}
              fontWeight="bold"
            >
              {t("FOOTERT7")}
            </Typography>
            <Typography
              sx={{ color: theme.palette.textLight.main }}
              fontWeight="bold"
            >
              {t("FOOTERT8")}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Typography variant="h6">{t("FOOTERT9")}</Typography>
            <Link
              to="/sobrenosotros"
              style={{
                textDecoration: "none",
                color: theme.palette.textLight.main,
              }}
            >
              <Typography
                sx={{ color: theme.palette.textLight.main }}
                fontWeight="bold"
              >
                {t("FOOTERT10")}
              </Typography>
            </Link>

            <Typography
              sx={{ color: theme.palette.textLight.main }}
              fontWeight="bold"
            >
              {t("FOOTERT11")}
            </Typography>
            <Link
              to="/empleo"
              style={{
                textDecoration: "none",
                color: theme.palette.textLight.main,
              }}
            >
              <Typography
                sx={{ color: theme.palette.textLight.main }}
                fontWeight="bold"
              >
                {t("FOOTERT12")}
              </Typography>{" "}
            </Link>

            <Typography
              sx={{ color: theme.palette.textLight.main }}
              fontWeight="bold"
            >
             {t("FOOTERT13")}
            </Typography>
          </Box>
        </Box>
      </Box>

      
      <Box sx={{ maxWidth: "1100px", mx: "auto", my: "1em" }}>
        <Divider
          sx={{
            borderColor: theme.palette.textLight.main,
          }}
        />
        <Typography
          sx={{ color: theme.palette.textLight.main, mt: "2em", textAlign:isMobile ? 'center' : 'left', pb:'1em' }}
          fontWeight="bold"
        >
          {t("FOOTERT14")}
        </Typography>
      </Box>
    </Box>
  );
};
