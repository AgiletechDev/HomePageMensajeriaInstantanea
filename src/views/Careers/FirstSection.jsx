import { Box, Typography, useTheme } from "@mui/material";
import ciudad from "../../assets/images/pag4/banner1.png";
import pers from "../../assets/images/pag4/personaje1.png";
import iconCarrers1 from "../../assets/images/pag4/icono 1.png";
import iconCarrers2 from "../../assets/images/pag4/icono 2.png";
import iconCarrers3 from "../../assets/images/pag4/icono 3.png";
import iconCarrers4 from "../../assets/images/pag4/icono 4.png";
import iconCarrers5 from "../../assets/images/pag4/icono 5.png";
import iconCarrers6 from "../../assets/images/pag4/icono 6.png";

import { useTranslation } from 'react-i18next'



const FirstSection = () => {
  
  const { t } = useTranslation();
  const theme = useTheme();
  const ContainerSection = ({ image, title, paragraph, marginLeft }) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "400px",
        marginLeft: marginLeft || "0",
      }}
    >
      <img src={image} alt="" style={{ height: "80px", marginBottom: "20px" }} />
      <Typography
        variant="h5"
        color={theme.palette.primary.main}
        fontWeight="600"
        marginBottom="20px"
        sx={{ maxWidth: "300px", textAlign: "center" }}
      >
        {title}
      </Typography>
      <Typography textAlign="center" sx={{ maxWidth: "250px" }}>
        {paragraph}
      </Typography>
    </Box>
  );
  return (
    <>
      <Box
        sx={{
          height: "500px",
          width: "100%",
          background: `url(${ciudad})`,
          backgroundSize: "cover",
        }}
      >
        <img src={pers} style={{position:'absolute', zIndex:'1', width:'40%', left:'50%'}}/>
        <Box
          sx={{
            position: "absolute",
            top: "200px",
            left: "11%",
            width: "560px",
          }}
        >
          <Typography
            variant="h3"
            color="white"
            style={{
              fontWeight: "600",
              marginBottom: "10px",
            }}
          >
            {t("CAREERS_FIRSTSECTION1")}
          </Typography>

          <Typography color="white">
            {t("CAREERS_FIRSTSECTION2")}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          height: "1050px",
          backgroundColor: "white",
          borderTopRightRadius: "50px",
          marginTop: "-50px",
          paddingX: "100px",
          display: "flex",
          flexDirection: "column",
          mb:'8em'
        }}
      >
        {/* 3 columns */}
        <Box
          sx={{
            display: "flex",
            marginTop: "100px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ContainerSection
            image={iconCarrers1}
            title={t("CAREERS_FIRSTSECTION3")}
            paragraph={t("CAREERS_FIRSTSECTION4")}
          />

          <ContainerSection
            image={iconCarrers2}
            title={t("CAREERS_FIRSTSECTION5")}
            paragraph={t("CAREERS_FIRSTSECTION6")}
            marginLeft="20px"
          />

          <ContainerSection
            image={iconCarrers3}
            title={t("CAREERS_FIRSTSECTION7")}
            paragraph={t("CAREERS_FIRSTSECTION8")}
            marginLeft="20px"
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            marginTop: "80px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ContainerSection
            image={iconCarrers4}
            title={t("CAREERS_FIRSTSECTION9")}
            paragraph={t("CAREERS_FIRSTSECTION10")}
          />

          <ContainerSection
            image={iconCarrers5}
            title={t("CAREERS_FIRSTSECTION11")}
            paragraph={t("CAREERS_FIRSTSECTION12")}
            marginLeft="20px"
          />

          <ContainerSection
            image={iconCarrers6}
            title={t("CAREERS_FIRSTSECTION13")}
            paragraph={t("CAREERS_FIRSTSECTION14")}
            marginLeft="20px"
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
         
          }}
        >
          <Typography
            variant="h4"
            fontWeight="600"
            marginTop="150px"
            textAlign="center"
          >
            {t("CAREERS_FIRSTSECTION15")}
          </Typography>
          <table
            style={{
              borderCollapse: "collapse",
              width: "100%",
              maxWidth: "1100px",
              marginTop: "50px",
              paddingBottom: "5em",
            }}
          >
            <tbody>
              <tr style={{ borderBottom: "1px solid #ccc" }}>
                <td>Product Designer</td>
                <td>Remote (US Timezones)</td>
                <td style={{ color: theme.palette.primary.main}}>View Role</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #ccc" }}>
                <td>Android Engineer</td>
                <td>Remote (US Timezones)</td>
                <td style={{ color: theme.palette.primary.main}}>View Role</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #ccc" }}>
                <td>iOS Engineer</td>
                <td>Remote (US Timezones)</td>
                <td style={{ color:theme.palette.primary.main }}>View Role</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #ccc" }}>
                <td>RTC (Calling) Engineer</td>
                <td>Remote (US Timezones)</td>
                <td style={{ color: theme.palette.primary.main}}>View Role</td>
              </tr>
              <tr>
                <td>Server (Backend Spam) Engineer</td>
                <td>Remote (US Timezones)</td>
                <td style={{ color: theme.palette.primary.main}}>View Role</td>
              </tr>
            </tbody>
          </table>
          <Typography fontSize="10px" textAlign="center" marginTop="30px">
            Sorry, we are not seeking interns at this time.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default FirstSection;
