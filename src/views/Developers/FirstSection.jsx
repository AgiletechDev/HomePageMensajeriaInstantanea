import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import ciudad from "../../assets/images/pag3/banner.png";
import pet from "../../assets/images/pag3/personaje1.png";
import { useTranslation } from "react-i18next";

export const FirstSection = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const Description = ({ title, paragraph }) => (
    <Box marginTop="20px">
      <Typography
        color={theme.palette.primary.main}
        variant="h6"
        fontWeight="600"
      >
        {title}
      </Typography>
      <Typography marginTop="20px">{paragraph}</Typography>
    </Box>
  );

  const data = [
    {
      title: t("DEVELOPERS_USERS5"),
      paragraph: t("DEVELOPERS_USERS6"),
    },
    {
      title: t("DEVELOPERS_USERS7"),
      paragraph: t("DEVELOPERS_USERS8"),
    },
    {
      title: t("DEVELOPERS_USERS9"),
      paragraph: t("DEVELOPERS_USERS10"),
    },
  ];

  return (
    <>
      <Box
        sx={{
          height: isMobile ? "100%" : "500px",
          width: "100%",
          background: `url(${ciudad}) center / cover no-repeat`,
          zIndex: "1",
          padding: isMobile && "8em 0em",
        }}
      >
        <Box
          sx={{
            position: isMobile ? "relative" : "absolute",
            top: !isMobile && "200px",
            left: !isMobile && "10%",
            padding: "1em",
          }}
        >
          {!isMobile && (
            <img
              src={pet}
              style={{
                zIndex: "2",
                position: "absolute",
                left: "120%",
                width: "100%",
                top: "-150%",
              }}
            />
          )}

          <Typography
            variant="h3"
            color="white"
            style={{
              fontWeight: "600",
              marginBottom: "10px",
            }}
          >
            {t("DEVELOPERS_USERS1")}
          </Typography>
          <Typography color="white">{t("DEVELOPERS_USERS2")}</Typography>
        </Box>
      </Box>
      {isMobile && (
        <img
          src={pet}
          style={{
            zIndex: "2",
            position: "relative",
            width: "90%",
          }}
        />
      )}
      <Box
        sx={{
          height: isMobile ? "100%" : "1050px",
          backgroundColor: "white",
          borderTopRightRadius: "50px",
          marginTop: "-50px",

          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          mt: isMobile && "3em",
          paddingX: isMobile ? "1em" : "150px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: isMobile ? "100%" : "50%",
            textAlign: "justify",
          }}
        >
          <Typography
            variant="h4"
            color={theme.palette.primary.main}
            fontWeight="600"
            marginTop="20px"
          >
            {t("DEVELOPERS_USERS3")}
          </Typography>
          <Typography marginTop="20px" fontWeight="600">
            {t("DEVELOPERS_USERS4")}
          </Typography>

          {data.map(({ title, paragraph }, index) => (
            <Description key={index} title={title} paragraph={paragraph} />
          ))}

          <Typography
            variant="h4"
            color={theme.palette.primary.main}
            fontWeight="600"
            marginTop="20px"
          >
            {t("DEVELOPERS_USERS11")}
          </Typography>

          <Typography
            variant="h6"
            color={theme.palette.primary.main}
            fontWeight="600"
            marginTop="10px"
          >
            {t("DEVELOPERS_USERS12")}
          </Typography>
        </Box>

        <Box
          marginTop="150px"
          width={isMobile ? "100%" : "50%"}
          marginLeft={isMobile ? "0" : "50px"}
          textAlign="justify"
          mb="5em"
        >
          <Description
            title={t("DEVELOPERS_USERS13")}
            paragraph={t("DEVELOPERS_USERS14")}
          />

          <Description
            title={t("DEVELOPERS_USERS15")}
            paragraph={t("DEVELOPERS_USERS16")}
          />
        </Box>
      </Box>
    </>
  );
};
