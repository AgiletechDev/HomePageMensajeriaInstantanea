import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Smessenger from "../../assets/images/Smessenger_asset6.png";
import icons8_mms1 from "../../assets/images/pag1/icono 2.png";
import icons8_security_shield1 from "../../assets/images/pag1/icono 1.png";
import icons8_shared_mail1 from "../../assets/images/pag1/icono 3.png";
import icons8_phone_message1 from "../../assets/images/pag1/icono 4.png";
import Smessengerasset1 from "../../assets/images/pag1/personaje 1.png";
import Smessengerasset5 from "../../assets/images/pag1/personaje 2.png";
import rec1 from "../../assets/images/pag1/recurso 2.png";
import rec2 from "../../assets/images/pag1/recurso 3.png";
import { useTranslation } from "react-i18next";

export const SecondSection = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  //
  const cardStyles = {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    borderRadius: "40px 40px 0 40px",
    width: isMobile ? "100%" : "450px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const cardStyles2 = {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    borderRadius: "40px 40px 0 40px",
    width: isMobile ? "100%" : "450px",
    marginLeft: isMobile ? "0" : "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <>
      <Box
        sx={{
          background: `url(${Smessenger})`,
          backgroundSize: "cover",
          height: isMobile ? "100%" : "900px",
          width: "100%",
          borderTopRightRadius: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "2",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            width: isMobile ? "center" : "1100px",
            alignItems: isMobile ? "center" : "0",
            justifyContent: isMobile ? "center" : "space-between",
            gap: isMobile ? "50px" : "0",
            padding: isMobile ? "1em" : "0",
          }}
        >
          <Card sx={cardStyles}>
            <img
              src={icons8_security_shield1}
              alt=""
              style={{ height: "120px", marginTop: "20px" }}
            />

            <CardContent>
              <Typography
                variant="h5"
                component="div"
                textAlign="center"
                color="white"
              >
                {t("HOME1_SECONDSECTION1")}
              </Typography>
              <Typography
                width={isMobile ? "100%" : "400px"}
                variant="body2"
                textAlign="center"
                color="white"
              >
                {t("HOME1_SECONDSECTION2")}
              </Typography>
            </CardContent>
          </Card>
          <Card sx={cardStyles2}>
            <img
              src={icons8_mms1}
              alt=""
              style={{ height: "120px", marginTop: "20px" }}
            />

            <CardContent>
              <Typography
                variant="h5"
                component="div"
                textAlign="center"
                color="white"
              >
                {t("HOME1_SECONDSECTION3")}
              </Typography>
              <Typography
                width={isMobile ? "100%" : "400px"}
                variant="body2"
                textAlign="center"
                color="white"
              >
                {t("HOME1_SECONDSECTION4")}
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box
          sx={{
            display: "flex",
            marginTop: "50px",
            flexDirection: isMobile ? "column" : "row",
            width: isMobile ? "center" : "1100px",
            alignItems: isMobile ? "center" : "0",
            justifyContent: isMobile ? "center" : "space-between",
            gap: isMobile ? "50px" : "0",
            padding: isMobile ? "1em" : "0",
            textAlign: isMobile ? 'center' : 'justify',
          }}
        >
          <Card sx={cardStyles}>
            <img
              src={icons8_shared_mail1}
              alt=""
              style={{ height: "120px", marginTop: "20px" }}
            />

            <CardContent>
              <Typography
                variant="h5"
                component="div"
                textAlign="center"
                color="white"
              >
                {t("HOME1_SECONDSECTION5")}
              </Typography>
              <Typography
                width={isMobile ? "100%" : "400px"}
                variant="body2"
                color="white"
                textAlign="center"
              >
                {t("HOME1_SECONDSECTION6")}
              </Typography>
            </CardContent>
          </Card>
          <Card sx={cardStyles2}>
            <img
              src={icons8_phone_message1}
              alt=""
              style={{ height: "120px", marginTop: "20px" }}
            />

            <CardContent>
              <Typography
                variant="h5"
                component="div"
                textAlign="center"
                color="white"
              >
                {t("HOME1_SECONDSECTION7")}
              </Typography>
              <Typography
                width={isMobile ? "100%" : "400px"}
                variant="body2"
                color="white"
                textAlign="center"
              >
                {t("HOME1_SECONDSECTION8")}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundSize: "cover",
          height: isMobile ? "100%" : "900px",
          width: "100%",
          borderTopLeftRadius: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            width: isMobile ? "center" : "1100px",
            alignItems: isMobile ? "center" : "0",
            justifyContent: isMobile ? "center" : "space-between",
            padding: isMobile ? '1em' : '0',
            textAlign: isMobile ? 'center' : 'justify',
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: isMobile ? "center" : "0",
              justifyContent: isMobile ? "center" : "0",
            }}
          >
            <Typography
              variant="h5"
              fontWeight="600"
              width={isMobile ? "100%" : "300px"}
            >
              {t("HOME1_SECONDSECTION9")}
            </Typography>
            <Typography width={isMobile ? "100%" : "480px"} marginTop="20px">
              {t("HOME1_SECONDSECTION10")}
            </Typography>
          </Box>
          {!isMobile && (
            <img
              src={rec1}
              alt=""
              style={{
                position: "absolute",
                marginTop: "20px",
                zIndex: "-1",
                width: "48%",
                left: "52%",
                top: "295%",
              }}
            />
          )}

          <img
            src={Smessengerasset1}
            alt=""
            height={isMobile ? "250px" : "450px"}
            style={{ marginTop: isMobile ? "0" : "-80px", zIndex: "2" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column-reverse" : "row",
            width: isMobile ? "center" : "1100px",
            alignItems: isMobile ? "center" : "0",
            justifyContent: isMobile ? "center" : "space-between",
            marginTop: isMobile ? "100px" : "250px",
            padding: isMobile ? '1em' : '0',
            textAlign: isMobile ? 'center' : 'justify',
          }}
        >
          <img
            src={Smessengerasset5}
            alt=""
            height={isMobile ? "250px" : "380px"}
            style={{ marginTop: isMobile ? "0" : "-80px", zIndex: "1" }}
          />
          {!isMobile && (
            <img
              src={rec2}
              alt=""
              style={{
                position: "absolute",
                marginTop: "20px",
                zIndex: "-1",
                width: "48%",
                left: "0%",
                top: "360%",
              }}
            />
          )}

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: isMobile ? 'center' : 'start',
            }}
          >
            <Typography
              variant="h5"
              fontWeight="600"
              width={isMobile ? "100%" : "300px"}
            >
              {t("HOME1_SECONDSECTION11")}
            </Typography>
            <Typography width={isMobile ? "100%" : "480px"} marginTop="20px">
              {t("HOME1_SECONDSECTION12")}
            </Typography>

            <Button
              variant="contained"
              color="textDark"
              sx={{
                width: "200px",
                fontSize: "15px",
                borderRadius: "20px",
                textTransform: "none",
                color: "white",
                marginTop: "20px",
              }}
            >
              {t("HOME1_BUTTON")}
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
