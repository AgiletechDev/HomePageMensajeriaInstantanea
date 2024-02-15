import { Box, Typography } from "@mui/material";
import ciudad from "../../assets/images/Smessengerasset6.png";
import iconCarrers from "../../assets/images/iconCarrers.png";

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
    <Typography variant="h5" color="red" fontWeight="600" marginBottom="20px">
      {title}
    </Typography>
    <Typography textAlign="center" sx={{ maxWidth: "300px" }}>
      {paragraph}
    </Typography>
  </Box>
);

const FirstSection = () => {
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
            left: "10%",
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
            Work that sends a message
          </Typography>

          <Typography color="white">
            Millions of people use Smessenger every day to share the moments
            that matter in their lives. Join an organization that empowers users
            by making private communication simple.
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
            title="Privacy First"
            paragraph="We solve problems that matter and develop technology that respects our users. Targeted advertising isn't our style. We don't collect anything except more sleep at night."
          />

          <ContainerSection
            image={iconCarrers}
            title="Small Team"
            paragraph="Have an immediate impact. Smessenger is an opportunity to do original work and closely collaborate without the overhead of endless meetings."
            marginLeft="20px"
          />

          <ContainerSection
            image={iconCarrers}
            title="Competitive Compensation"
            paragraph="Healthcare premiums are fully covered for you and your family. Our 401(k) plan matches 100% of your contribution up to "
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
            title="Work Remotely"
            paragraph="Skip the commute. Work from home or take advantage of our co-working space subsidy. Focus on what drives you, not driving"
          />

          <ContainerSection
            image={iconCarrers}
            title="Open Source"
            paragraph="Everything we produce is open source. Every time we write code, we get to share it with the world"
            marginLeft="20px"
          />

          <ContainerSection
            image={iconCarrers}
            title="Nonprofit"
            paragraph="Our goal is to protect free expression and enable secure global communication. We're working with users to build something sustainable"
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
            Open Roles
          </Typography>
          <table
            style={{
              borderCollapse: "collapse",
              width: "100%",
              maxWidth: "1100px",
              marginTop: "50px",
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
        </Box>

        <Typography fontSize="10px" textAlign="center" marginTop="30px">
          Sorry, we are not seeking interns at this time.
        </Typography>
      </Box>
    </>
  );
};

export default FirstSection;
