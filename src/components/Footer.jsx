import { Box, Typography, Divider, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import imgLogo from "../assets/icons/logofooter.png";
import { Link } from "react-router-dom";
import footerbg from "../assets/images/footerbg.png";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        background: theme.palette.primary.main,
        paddingTop: isMobile ? "1em" : "5em",
        height: isMobile ? "0" : "100%",
        mb: "-20px",
      }}
    >
      <Box
        sx={{
          mt: "5em",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2em",
          maxWidth: isMobile ? "100%" : "1100px",
          margin: "auto",
          padding: "2em",
          color: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "50px",
            flexDirection: isMobile ? "column" : "row",
            maxWidth: "1100px",
          }}
        >
          <img src={imgLogo} style={{width:'20%'}}/>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
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
                © 2023-2024 Smessenger.
                <br />
                Smessenger is a registered trademark in the United States and
                other countries.
                <br />
                <br />
                For media inquiries, contact press@Smessenger.org
              </Typography>
            </Link>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <Typography variant="h6" mb="10px">
              Organization
            </Typography>
            <Link
              to="/aplicaciones"
              style={{
                textDecoration: "none",
                color: theme.palette.textLight.main,
              }}
            >
              <Typography fontWeight="bold">Donate</Typography>
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
                Careers
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
                Blog
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
                Terms & Privacy Policy
              </Typography>
            </Link>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <Typography variant="h6" mb="10px">
              Download
            </Typography>
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
                Android
              </Typography>
            </Link>

            <Typography
              sx={{ color: theme.palette.textLight.main }}
              fontWeight="bold"
            >
              iPhone & iPad
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
                Windows
              </Typography>{" "}
            </Link>

            <Typography
              sx={{ color: theme.palette.textLight.main }}
              fontWeight="bold"
            >
              Mac
            </Typography>
            <Typography
              sx={{ color: theme.palette.textLight.main }}
              fontWeight="bold"
            >
              Linux
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <Typography variant="h6" mb="10px">
              Social
            </Typography>
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
                GitHub
              </Typography>
            </Link>

            <Typography
              sx={{ color: theme.palette.textLight.main }}
              fontWeight="bold"
            >
              Twitter
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
                Instagram
              </Typography>{" "}
            </Link>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <Typography variant="h6" mb="10px">
              Help
            </Typography>
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
                Support Center
              </Typography>
            </Link>

            <Typography
              sx={{ color: theme.palette.textLight.main }}
              fontWeight="bold"
            >
              Community
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
          sx={{
            color: theme.palette.textLight.main,
            mt: "2em",
            textAlign: isMobile ? "center" : "left",
            pb: "1em",
          }}
          fontWeight="bold"
        >
          {t("FOOTERT14")}
        </Typography>
      </Box>
    </Box>
  );
};
