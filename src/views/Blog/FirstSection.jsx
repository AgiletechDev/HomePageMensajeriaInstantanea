import { Box, Typography } from "@mui/material";
import pers from "../../assets/images/pag4/personaje1.png";
import { useTranslation } from 'react-i18next'

const FirstSection = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        gap: "5em",
        backgroundColor: "#f6f6f6",
      }}
    >
      <Box
        sx={{
          maxWidth: "600px",
          margin: "auto",
          mt: "8em",
          backgroundColor: "#b0dc9c",
          padding: "3em",
          borderRadius: "20px",
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontSize: "40px", fontWeight: "bold", textAlign: "center" }}
        >
          {t("BLOG_USERS1")}
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
              alignItems: "center",
              mt: "50px",
            }}
          >
            <Typography variant="h6">
              {t("BLOG_USERS2")}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "100px",
              mt: "50px",
            }}
          >
            <Typography variant="h6">
              {t("BLOG_USERS3")}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          maxWidth: "600px",
          margin: "auto",
          mb: "5em",
          backgroundColor: "#b0dc9c",
          padding: "3em",
          borderRadius: "20px",
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontSize: "40px", fontWeight: "bold", textAlign: "center" }}
        >
          {t("BLOG_USERS4")}
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
              alignItems: "center",
              mt: "50px",
            }}
          >
            <Typography variant="h6">
              {t("BLOG_USERS5")}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "100px",
              mt: "50px",
            }}
          >
            <Typography variant="h6">
              {t("BLOG_USERS6")}
            </Typography>
          </Box>
        </Box>
      </Box>
      <img src={pers} style={{position:'absolute', top:'273%', left:'68%', width:'32%'}}/>
    </Box>
  );
};

export default FirstSection;
