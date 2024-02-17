import {
  Box,
  Typography,
  Input,
  IconButton,
  useTheme,
  TextareaAutosize,
  Button,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HelpBoxes from "../../components/HelpBoxes";
import img1 from "../../assets/images/pag7/recurso 1.png";
import img2 from "../../assets/images/pag7/recurso 2.png";
import { useTranslation } from "react-i18next";

const FirstSection = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        pt: "4em",
        backgroundColor: theme.palette.primary.main,
        zIndex: "-1",
      }}
    >
      <Box
        sx={{
          padding: "3em",
          display: "flex",
          flexDirection: "column",
          margin: "auto",
        }}
      >
        <Typography
          variant="h1"
          fontSize="45px"
          textAlign="center"
          color={theme.palette.textLight.main}
          fontWeight="bold"
        >
          {t("HELP_USERS1")}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            maxWidth: "500px",
            margin: "auto",
            mt: "2em",
            background: "rgba(255, 255, 255, 0.9)",
            borderRadius: "30px",
            border: "1px solid #79747e",
            padding: "5px",
          }}
        >
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Input
            placeholder={t("HELP_USERS2")}
            fullWidth
            disableUnderline
            sx={{
              "& input": {
                paddingLeft: "5px",
              },
            }}
          />
        </Box>
      </Box>
      <HelpBoxes />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1em",
          backgroundColor: theme.palette.textLight.main,
          zIndex: "1",
          padding: isMobile ? "3em" : "5em",
        }}
      >
        <img
          src={img1}
          style={{
            position: isMobile ? "relative" : "absolute",
            zIndex: "-1",
            left: "2%",
            width: isMobile ? "80%" : "25%",
          }}
        />
        {!isMobile && (
          <img
            src={img2}
            style={{
              position: isMobile ? "relative" : "absolute",
              zIndex: "-1",
              left: "75%",
              width: "25%",
            }}
          />
        )}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            maxWidth: isMobile ? "100%" : "550px",
            width: isMobile ? "100%" : "550px",
            mt: isMobile ? "2em" : "0",
          }}
        >
          <Typography
            variant="h1"
            fontSize="45px"
            fontWeight="bold"
            textAlign="center"
          >
            {t("HELP_USERS11")}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              margin: "auto",
              background: "rgba(255, 255, 255, 0.9)",
              borderRadius: "5px",
              border: "1px solid #79747e",
              padding: "10px",
            }}
          >
            <Input
              placeholder={t("HELP_USERS12")}
              fullWidth
              disableUnderline
              sx={{
                "& input": {
                  paddingLeft: "5px",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              margin: "auto",
              background: "rgba(255, 255, 255, 0.9)",
              borderRadius: "5px",
              border: "1px solid #79747e",
              padding: "10px",
            }}
          >
            <Input
              placeholder={t("HELP_USERS13")}
              fullWidth
              disableUnderline
              sx={{
                "& input": {
                  paddingLeft: "5px",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              margin: "auto",
              background: "rgba(255, 255, 255, 0.9)",
              borderRadius: "5px",
              border: "1px solid #79747e",
              padding: "10px",
            }}
          >
            <Input
              placeholder={t("HELP_USERS14")}
              fullWidth
              disableUnderline
              sx={{
                "& input": {
                  paddingLeft: "5px",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              margin: "auto",
              background: "rgba(255, 255, 255, 0.9)",
              borderRadius: "5px",
              border: "1px solid #79747e",
              padding: "10px",
            }}
          >
            <Input
              placeholder={t("HELP_USERS15")}
              fullWidth
              disableUnderline
              sx={{
                "& input": {
                  paddingLeft: "5px",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              margin: "auto",
              background: "rgba(255, 255, 255, 0.9)",
              borderRadius: "5px",
              border: "1px solid #79747e",
              padding: "10px",
            }}
          >
            <TextareaAutosize
              minRows={5}
              placeholder={t("HELP_USERS16")}
              style={{
                width: "100%",
                border: "none",
                resize: "none",
                fontSize: theme.typography.fontSize,
                fontFamily: theme.typography.fontFamily,
                outline: "none",
              }}
            />
          </Box>
          <Button
            sx={{
              background: theme.palette.textDark.main,
              textAlign: "center",
              width: isMobile ? "100%" : "570px",
              mx: "auto",
              borderRadius: "10px",
              color: theme.palette.textLight.main,
            }}
          >
            {t("HELP_USERS17")}
          </Button>
          {isMobile && (
            <img
              src={img2}
              style={{
                position: isMobile ? "relative" : "absolute",
                zIndex: "-1",
                width: "100%",
              }}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default FirstSection;
