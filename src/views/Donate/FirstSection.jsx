import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import img1 from "../../assets/images/pag6/imagen 1.png";
import img2 from "../../assets/images/pag6/imagen 2.png";
import img3 from "../../assets/images/pag6/recurso 1.png";
import img4 from "../../assets/images/pag6/personaje.png";
import { useTranslation } from "react-i18next";

const FirstSection = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems:'center',
          margin: "auto",
          mt: "8em",
          mb: "2em",
          gap: "8em",
          boxShadow: "0px 5px 5px -5px rgba(0,0,0,0.5)",
          pb: "3em",
        }}
      >
        <Box sx={{ maxWidth: isMobile ? "100%" : "800px", margin: "auto" }}>
          <Typography
            variant="h1"
            sx={{ fontSize: "40px", fontWeight: "bold", textAlign: "center" }}
          >
            {t("DONATE_FIRSTSECTION1")}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "100px",
              textAlign: "justify",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: "center",
                gap: "80px",
                mt: "50px",
                padding:'1em'
              }}
            >
              <img src={img1} style={{width: isMobile ? '100%' : '100%'}}/>
              <Typography variant="h6">{t("DONATE_FIRSTSECTION2")}</Typography>
            </Box>
          </Box>
        </Box>

        {!isMobile && (
          <img
            src={img3}
            style={{
              position: "absolute",
              top: "40%",
              left: "80%",
              width: "20%",
            }}
          />
        )}
        {isMobile && (
          <img src={img3} style={{ position: "relative", width: "80%" }} />
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          mt: "2em",
          mb: "5em",
          gap: "8em",
        }}
      >
        <Box sx={{ maxWidth: "800px", margin: "auto" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "100px",
              textAlign: "justify",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column-reverse" : "row",
                alignItems: "center",
                gap: "80px",
                mt: "50px",
                padding:'1em'
              }}
            >
                {isMobile && (
          <img src={img4} style={{ position: "relative", width: "100%" }} />
        )}
              <img src={img2} style={{width: '100%'}}/>
              <Typography variant="h6">{t("DONATE_FIRSTSECTION3")}</Typography>
            </Box>
          </Box>
        </Box>
        {!isMobile && (
        <img
          src={img4}
          style={{
            position: "absolute",
            top: "180%",
            left: "0%",
            width: "30%",
          }}
        />
        )}
         
      </Box>
    </>
  );
};

export default FirstSection;
