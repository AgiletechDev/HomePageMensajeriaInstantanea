import { Box, Typography } from "@mui/material";
import img1 from "../../assets/images/pag6/imagen 1.png";
import img2 from "../../assets/images/pag6/imagen 2.png";
import img3 from "../../assets/images/pag6/recurso 1.png";
import img4 from "../../assets/images/pag6/personaje.png";

const FirstSection = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          mt: "8em",
          mb: "2em",
          gap: "8em",
          boxShadow: "0px 5px 5px -5px rgba(0,0,0,0.5)",
          pb: "3em",
        }}
      >
        <Box sx={{ maxWidth: "800px", margin: "auto" }}>
          <Typography
            variant="h1"
            sx={{ fontSize: "40px", fontWeight: "bold", textAlign: "center" }}
          >
            Donate to Smessenger
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
                gap: "80px",
                mt: "50px",
              }}
            >
              <img src={img1} />
              <Typography variant="h6">
                Smessenger is built for you; not your data and not for profit.
                We pursue our mission with your support - to protect free
                expression and enable secure global communication through open
                source privacy technology. Private messaging. No ads, no
                trackers, no surveillance. Your donations help pay for the
                development and maintenance of Smessenger, including the servers
                and bandwidth required to make Smessenger available to the
                millions of people all over the world who depend on it. If you
                provide an email with your donation, you will receive an email
                confirmation for your tax records. Smessenger Technology
                Foundation is an independent nonprofit charity and tax-exempt
                under section 501c3 of the US Internal Revenue Code. Our Federal
                Tax ID Number is 82- 4506840. Note: You will only receive a
                badge in your Smessenger account if you donate inside the
                Smessenger app.
              </Typography>
            </Box>
          </Box>
        </Box>
        <img src={img3} style={{position:'absolute',top:'40%', left:'80%',width:'20%'}}/>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          mt: "2em",
          mb: "5em",
          gap: "8em",
        }}
      >
        <Box sx={{ maxWidth: "800px", margin: "auto" }}>
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
                gap: "100px",
                mt: "50px",
              }}
            >
              <img src={img2} />
              <Typography variant="h6">
                Other Ways to Give Smessenger accepts donations of
                cryptocurrency, stock, and gifts from donor advised funds
                (DAFs). These donations are processed through The Giving Block.
                If you want to receive a tax deduction in the US for the fair
                market value of your donation, you can provide an email address
                to receive a tax receipt. The Giving Block also supports
                anonymous donations of cryptocurrency and from DAFs. Note: You
                will only receive a badge in your Smessenger account if you
                donate inside the Smessenger app.
              </Typography>
            </Box>
          </Box>
        </Box>
        <img src={img4} style={{position:'absolute',top:'180%', left:'0%',width:'30%'}}/>
      </Box>
    </>
  );
};

export default FirstSection;
