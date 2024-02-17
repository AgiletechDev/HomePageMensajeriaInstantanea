import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Smessengerasset2 from "../../assets/images/Smessengerasset2.png";
import Smessengerasset3 from "../../assets/images/Smessengerasset3.png";
import phone3 from "../../assets/images/pag1/vista 1.png";
import PANELA from "../../assets/images/PANELA.png";
import greenBox from "../../assets/images/pag1/recurso 1.png";
import { useTranslation } from "react-i18next";

export const FirstSection = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        sx={{
          backgroundColor: "rgba(85,170,45,0.5)",
          display: "flex",
          alignItems: "center",
          flexDirecttion: isMobile ? 'column' : 'row',
          height: isMobile ? "100%" : "90vh",
          width: "100%",
          marginTop: isMobile ? "6em" : "40px",
        }}
      >
        {!isMobile && (
          <img
            src={Smessengerasset3}
            alt=""
            style={{
              position: "absolute",
              left: "5%",
              height: "80%",
              zIndex: "-1",
            }}
          />
        )}

        {!isMobile && (
          <img
            src={PANELA}
            alt=""
            style={{
              position: "absolute",
              right: "0",
              height: "100%",
              zIndex: "0",
            }}
          />
        )}

        {!isMobile && (
          <img
            src={phone3}
            alt=""
            style={{
              width: "40%",
              position: "absolute",
              right: "10%",
              zIndex: "1",
              top: "-10%",
            }}
          />
        )}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: isMobile ? "center" : "start",
            width: isMobile ? "100%" : "350px",
            zIndex: "2",
            marginLeft: isMobile ? "0" : "11%",
            padding: "1em",
          }}
        >
          <Typography
            color="white"
            variant="h1"
            sx={{
              fontSize: "45px",
              fontWeight: "600",
              width: isMobile ? "100%" : "300px",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            {t("HOME1_FIRSTSECTION")}
          </Typography>

          <Typography
            color="white"
            textAlign={isMobile ? "center" : "justify"}
            marginTop="15px"
            marginBottom="15px"
          >
            {t("HOME1_FIRSTSECTION2")}
          </Typography>

          <Button
            variant="contained"
            sx={{
              width: "200px",
              fontSize: "15px",
              borderRadius: "20px",
              textTransform: "none",
              color: "white",
              background: theme.palette.primary.main,
            }}
          >
            {t("HOME1_BUTTON")}
          </Button>
          {isMobile && (
            <img
              src={phone3}
              alt=""
              style={{
                width: "90%",
                zIndex: "1",
              }}
            />
          )}
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: isMobile ? "100%" : "800px",
          width: "100%",
          borderTopLeftRadius: "50px",
          marginTop: isMobile ? 0 : "-50px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: isMobile ? "100%" : "1100px",
            mt: isMobile ? '1em' : '0'
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: "35px",
              fontWeight: "600",
              textAlign: isMobile ? "center" : "justify",
            }}
          >
            {t("HOME1_FIRSTSECTION3")}
          </Typography>

          <Typography
            textAlign={isMobile ? "center" : "justify"}
            marginTop="25px"
            marginBottom="25px"
          >
            {t("HOME1_FIRSTSECTION4")}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: isMobile ? "center" : "space-beetween",
              alignItems: isMobile ? "center" : "0",
              marginTop: "20px",
              gap: "80px",
              padding: isMobile ? "1em" : "0",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginRight: isMobile ? "0" : "40px",
                
              }}
            >
              <Typography
                fontWeight="600"
                fontSize={isMobile ? "35px" : "45px"}
                width={isMobile ? "100%" : "300px"}
                textAlign={isMobile ? "center" : "justify"}
              >
                {t("HOME1_FIRSTSECTION5")}
              </Typography>
              <Typography
                width={isMobile ? "100%" : "350px"}
                textAlign={isMobile ? "center" : "justify"}
              >
                {t("HOME1_FIRSTSECTION6")}
              </Typography>
            </Box>
            <img
              src={Smessengerasset2}
              alt=""
              style={{
                height: isMobile ? "100%" : "450px",
                width: isMobile ? "80%" : "100%",
                marginLeft: isMobile ? "0" : "20px",
                zIndex: "1",
              }}
            />
            {!isMobile && (
              <img
                src={greenBox}
                alt=""
                style={{
                  position: "absolute",
                  zIndex: "0",
                  height: "600px",
                  left: "41%",
                }}
              />
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};
