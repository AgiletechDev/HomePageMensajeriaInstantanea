import { Box, Button, Typography, useTheme,useMediaQuery } from "@mui/material";
import Smessengerasset9 from "../../assets/images/pag2/mov.png";
import Smessengerasset4 from "../../assets/images/pag2/esc.png";
import { useTranslation } from "react-i18next";

export const FirstSection = () => {
  const { t } = useTranslation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const SectionCard = ({
    title,
    image,
    children,
    imageHeight,
    imageMarginBottom,
  }) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: isMobile ? '90%' :"40%",
        mt: "8em",

      }}
    >
      <Typography
        variant="h5"
        fontWeight="600"
        marginBottom="20px"
        textAlign="center"
      >
        {title}
      </Typography>

      <Box
        sx={{
          height: "250px",
          backgroundColor: theme.palette.primary.main,
          borderRadius: "20px",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          overflow: "hidden",
          
        }}
      >
        <img
          src={image}
          alt=""
          style={{
            position: "absolute",
            bottom: imageMarginBottom,
            height: imageHeight,
            width: "100%",
          }}
        />
      </Box>

      {children}
    </Box>
  );

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: "center",
          alignItems: "center",
          
        }}
      >
        <Box
          sx={{
            width: isMobile ? '100%' :"1100px",
            display: "flex",
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: isMobile ? 'center' :"space-between",
            alignItems: isMobile ? 'center' : '0',
            mb: "5em",
            
          }}
        >
          <SectionCard
            title={t("GETMESSENGER_FIRSTSECTION1")}
            image={Smessengerasset4}
            imageHeight="100%"
            imageMarginBottom="0px"
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                
              }}
            >
              <Button
                variant="contained"
                sx={{
                  width: "49%",
                  fontSize: "15px",
                  borderRadius: "20px",
                  textTransform: "none",
                  color: "white",
                  marginTop: "20px",
                  background: theme.palette.primary.main,
                }}
              >
                Android
              </Button>
              <Button
                variant="contained"
                sx={{
                  width: "49%",
                  fontSize: "15px",
                  borderRadius: "20px",
                  textTransform: "none",
                  color: "white",
                  marginTop: "20px",
                  background: theme.palette.primary.main,
                }}
              >
                Iphone o Ipad
              </Button>
            </Box>

            <Typography marginTop="30px" textAlign="center">
              {t("GETMESSENGER_FIRSTSECTION2")}
            </Typography>
          </SectionCard>

          <SectionCard
            title={t("GETMESSENGER_FIRSTSECTION3")}
            image={Smessengerasset9}
            imageHeight="100%"
            imageMarginBottom="0px"
          >
            <Button
              variant="contained"
              sx={{
                width: "100%",
                fontSize: "15px",
                borderRadius: "20px",
                textTransform: "none",
                color: "white",
                marginTop: "20px",
                marginBottom: "20px",
                background: theme.palette.primary.main,
              }}
            >
              {t("GETMESSENGER_FIRSTSECTION4")}
            </Button>

            <Typography
              textAlign="center"
              sx={{
                backgroundColor: "#f6f6f6",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              {t("GETMESSENGER_FIRSTSECTION5")}
            </Typography>
          </SectionCard>
        </Box>
      </Box>
    </>
  );
};
