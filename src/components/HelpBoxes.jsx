import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";

const HelpBoxes = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1em",
        backgroundColor: "#b0dc9c",
        borderRadius: "50px 50px 0px 0",
        zIndex: "1",
        padding: "4em",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: "30px",
          maxWidth: isMobile ? '100%' : "1100px",
          alignItems: isMobile ? "center" : '0',
          justifyContent:'center'
        }}
      >
        <Box
          sx={{
            background: theme.palette.secondary.main,
            width: isMobile ? "100%" : "300px",
            borderRadius: "15px",
            padding: "1em 3em 1em 3em",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            textAlign="center"
            color={theme.palette.textLight.main}
          >
            {t("HELP_USERS3")}
          </Typography>
          <Typography
            variant="p"
            textAlign="center"
            color={theme.palette.textLight.main}
          >
            {t("HELP_USERS4")}
          </Typography>
        </Box>
        <Box
          sx={{
            background: theme.palette.secondary.main,
            width: isMobile ? "100%" : "300px",
            borderRadius: "15px",
            padding: "1em 3em 1em 3em",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            textAlign="center"
            color={theme.palette.textLight.main}
          >
            {t("HELP_USERS5")}
          </Typography>
          <Typography
            variant="p"
            textAlign="center"
            color={theme.palette.textLight.main}
          >
            {t("HELP_USERS6")}
          </Typography>
        </Box>
        <Box
          sx={{
            background: theme.palette.secondary.main,
            width: isMobile ? "100%" : "300px",
            borderRadius: "15px",
            padding: "1em 3em 1em 3em",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            textAlign="center"
            color={theme.palette.textLight.main}
          >
            {t("HELP_USERS7")}
          </Typography>
          <Typography
            variant="body"
            textAlign="center"
            color={theme.palette.textLight.main}
          >
            {t("HELP_USERS8")}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: "30px",
          maxWidth: isMobile ? "100%" : "1100px",
        }}
      >
        <Box
          sx={{
            background: theme.palette.secondary.main,
            width: isMobile ? "100%" : "600px",
            borderRadius: "15px",
            padding: "5px",
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            textAlign="center"
            color={theme.palette.textLight.main}
          >
            {t("HELP_USERS9")}
          </Typography>
        </Box>
        <Box
          sx={{
            background: theme.palette.secondary.main,
            width: isMobile ? "100%" : "600px",
            borderRadius: "15px",
            padding: "5px",
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            textAlign="center"
            color={theme.palette.textLight.main}
          >
            {t("HELP_USERS10")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HelpBoxes;
