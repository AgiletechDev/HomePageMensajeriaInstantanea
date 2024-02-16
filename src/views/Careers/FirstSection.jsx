import { Box, Typography } from "@mui/material";
import ciudad from "../../assets/images/Smessengerasset6.png";
import iconCarrers from "../../assets/images/iconCarrers.png";
import { useTranslation } from 'react-i18next'

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
    <img src={image} alt="" style={{ height: "50px", marginBottom: "20px" }} />
    <Typography
      variant="h5"
      color="red"
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

const FirstSection = () => {
  
  const { t } = useTranslation();

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
            image={iconCarrers}
            title={t("CAREERS_FIRSTSECTION3")}
            paragraph={t("CAREERS_FIRSTSECTION4")}
          />

          <ContainerSection
            image={iconCarrers}
            title={t("CAREERS_FIRSTSECTION5")}
            paragraph={t("CAREERS_FIRSTSECTION6")}
            marginLeft="20px"
          />

          <ContainerSection
            image={iconCarrers}
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
            image={iconCarrers}
            title={t("CAREERS_FIRSTSECTION9")}
            paragraph={t("CAREERS_FIRSTSECTION10")}
          />

          <ContainerSection
            image={iconCarrers}
            title={t("CAREERS_FIRSTSECTION11")}
            paragraph={t("CAREERS_FIRSTSECTION12")}
            marginLeft="20px"
          />

          <ContainerSection
            image={iconCarrers}
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
                <td style={{ color: "red" }}>View Role</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #ccc" }}>
                <td>Android Engineer</td>
                <td>Remote (US Timezones)</td>
                <td style={{ color: "red" }}>View Role</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #ccc" }}>
                <td>iOS Engineer</td>
                <td>Remote (US Timezones)</td>
                <td style={{ color: "red" }}>View Role</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #ccc" }}>
                <td>RTC (Calling) Engineer</td>
                <td>Remote (US Timezones)</td>
                <td style={{ color: "red" }}>View Role</td>
              </tr>
              <tr>
                <td>Server (Backend Spam) Engineer</td>
                <td>Remote (US Timezones)</td>
                <td style={{ color: "red" }}>View Role</td>
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
