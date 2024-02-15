import {
  Box,
  Typography,
  Input,
  IconButton,
  useTheme,
  TextareaAutosize,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HelpBoxes from "../../components/HelpBoxes";

const FirstSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        pt: "4em",
        backgroundColor: theme.palette.primary.main,
        zIndex: "-1",
      }}
    >
      <Box
        sx={{
          padding: "3em",
          display: "flex",
          flexDirection: "column",
          margin: "auto",
        }}
      >
        <Typography
          variant="h1"
          fontSize="45px"
          textAlign="center"
          color={theme.palette.textLight.main}
          fontWeight="bold"
        >
          ¿Cómo podemos ayudarte?
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            maxWidth: "500px",
            margin: "auto",
            mt: "2em",
            background: "rgba(255, 255, 255, 0.9)",
            borderRadius: "30px",
            border: "1px solid #79747e",
            padding: "5px",
          }}
        >
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Input
            placeholder="Buscar"
            fullWidth
            disableUnderline
            sx={{
              "& input": {
                paddingLeft: "5px",
              },
            }}
          />
        </Box>
      </Box>
      <HelpBoxes />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent:'center',
          gap: "1em",
          backgroundColor: theme.palette.textLight.main,
          zIndex: "1",
          padding: "5em",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            maxWidth: "600px",
            width: "600px",
          }}
        >
          <Typography
            variant="h1"
            fontSize="45px"
            fontWeight="bold"
            textAlign="center"
          >
            Enviar una solicitud
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              margin: "auto",
              background: "rgba(255, 255, 255, 0.9)",
              borderRadius: "5px",
              border: "1px solid #79747e",
              padding: "10px",
            }}
          >
            <Input
              placeholder="Correo Eléctronico *"
              fullWidth
              disableUnderline
              sx={{
                "& input": {
                  paddingLeft: "5px",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              margin: "auto",
              background: "rgba(255, 255, 255, 0.9)",
              borderRadius: "5px",
              border: "1px solid #79747e",
              padding: "10px",
            }}
          >
            <Input
              placeholder="Vuelve a introducir tu dirección de correo electrónico *"
              fullWidth
              disableUnderline
              sx={{
                "& input": {
                  paddingLeft: "5px",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              margin: "auto",
              background: "rgba(255, 255, 255, 0.9)",
              borderRadius: "5px",
              border: "1px solid #79747e",
              padding: "10px",
            }}
          >
            <Input
              placeholder="¿Cuál es tu consulta? *"
              fullWidth
              disableUnderline
              sx={{
                "& input": {
                  paddingLeft: "5px",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              margin: "auto",
              background: "rgba(255, 255, 255, 0.9)",
              borderRadius: "5px",
              border: "1px solid #79747e",
              padding: "10px",
            }}
          >
            <Input
              placeholder="¿Para qué plataforma es? *"
              fullWidth
              disableUnderline
              sx={{
                "& input": {
                  paddingLeft: "5px",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              margin: "auto",
              background: "rgba(255, 255, 255, 0.9)",
              borderRadius: "5px",
              border: "1px solid #79747e",
              padding: "10px",
            }}
          >
            <TextareaAutosize
              minRows={5}
              placeholder="Descripción"
              style={{
                width: "100%",
                border: "none",
                resize: "none",
                fontSize: theme.typography.fontSize,
                fontFamily: theme.typography.fontFamily,
                outline: "none",
              }}
            />
          </Box>
          <Button
        
            sx={{
              background: theme.palette.textDark.main,
              textAlign: 'center',
              width:'620px',
              mx: 'auto',
              borderRadius: "10px",
              color:theme.palette.textLight.main,
            }}
          >
            Enviar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FirstSection;
