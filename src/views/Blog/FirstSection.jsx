import { Box, Typography } from "@mui/material";


const FirstSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        gap: "5em",
        backgroundColor: "#f6f6f6",
      }}
    >
      <Box
        sx={{
          maxWidth: "700px",
          margin: "auto",
          mt: "8em",
          backgroundColor: "#ffffff",
          padding: "3em",
          borderRadius: "20px",
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontSize: "40px", fontWeight: "bold", textAlign: "center" }}
        >
          Help people in Iran reconnect to Smessenger - a request to our
          community
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
              mt: "50px",
            }}
          >
            <Typography variant="h6">
              For many years, the Smessenger app on Android has supported
              sending and receiving plaintext SMS and MMS messages in addition
              to Smessenger messages. SMS and MMS are standardized communication
              protocols that allow mobile devices to send and transmit messages,
              and most people picking up their phone to text or share memes
              don&apos;t really think about them. To give some context, when we
              started supporting SMS, Smessenger didn&apos;t exist yet. Our Android
              app was called TextSecure and the Smessenger encryption protocol
              was called Axolotl. Almost a decade has passed since then, and a
              lot has changed. Read more .
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "100px",
              mt: "50px",
            }}
          >
            <Typography variant="h6">
              Other Ways to Give Smessenger accepts donations of cryptocurrency,
              stock, and gifts from donor advised funds (DAFs). These donations
              are processed through The Giving Block. If you want to receive a
              tax deduction in the US for the fair market value of your
              donation, you can provide an email address to receive a tax
              receipt. The Giving Block also supports anonymous donations of
              cryptocurrency and from DAFs. Note: You will only receive a badge
              in your Smessenger account if you donate inside the Smessenger
              app.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          maxWidth: "700px",
          margin: "auto",
          mb: "5em",
          backgroundColor: "#ffffff",
          padding: "3em",
          borderRadius: "20px",
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontSize: "40px", fontWeight: "bold", textAlign: "center" }}
        >
          Removing SMS support from Smessenger Android (soon)
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
              mt: "50px",
            }}
          >
            <Typography variant="h6">
              Smessenger is built for you; not your data and not for profit. We
              pursue our mission with your support - to protect free expression
              and enable secure global communication through open source privacy
              technology. Private messaging. No ads, no trackers, no
              surveillance. Your donations help pay for the development and
              maintenance of Smessenger, including the servers and bandwidth
              required to make Smessenger available to the millions of people
              all over the world who depend on it. If you provide an email with
              your donation, you will receive an email confirmation for your tax
              records. Smessenger Technology Foundation is an independent
              nonprofit charity and tax-exempt under section 501c3 of the US
              Internal Revenue Code. Our Federal Tax ID Number is 82- 4506840.
              Note: You will only receive a badge in your Smessenger account if
              you donate inside the Smessenger app.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "100px",
              mt: "50px",
            }}
          >
            <Typography variant="h6">
              Other Ways to Give Smessenger accepts donations of cryptocurrency,
              stock, and gifts from donor advised funds (DAFs). These donations
              are processed through The Giving Block. If you want to receive a
              tax deduction in the US for the fair market value of your
              donation, you can provide an email address to receive a tax
              receipt. The Giving Block also supports anonymous donations of
              cryptocurrency and from DAFs. Note: You will only receive a badge
              in your Smessenger account if you donate inside the Smessenger
              app.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FirstSection;
