import { Box, Typography, Input, IconButton, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

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
          fontSize="40px"
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

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
         
          gap: "1em",
          backgroundColor: theme.palette.secondary.second,
          borderRadius: "50px 50px 0px 0",
          zIndex: "1",
          padding: "3em",
        }}
      >
        <Box sx={{ display: "flex", gap: "30px",    maxWidth:'1100px', }}>
          <Box
            sx={{
              background: theme.palette.secondary.main,
              width: "300px",
              borderRadius: "15px",
              padding: "1em 3em 1em 3em",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              textAlign="center"
              color={theme.palette.textLight.main}
            >
              Empezando
            </Typography>
            <Typography
              variant="p"
              textAlign="center"
              color={theme.palette.textLight.main}
            >
              Comprende los conceptos básicos de Smessenger en Android, iOS y
              Desktop
            </Typography>
          </Box>
          <Box
            sx={{
              background: theme.palette.secondary.main,
              width: "300px",
              borderRadius: "15px",
              padding: "1em 3em 1em 3em",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              textAlign="center"
              color={theme.palette.textLight.main}
            >
              Características
            </Typography>
            <Typography
              variant="p"
              textAlign="center"
              color={theme.palette.textLight.main}
            >
              Explora todas las características de la mensajería privada
            </Typography>
          </Box>
          <Box
            sx={{
              background: theme.palette.secondary.main,
              width: "300px",
              borderRadius: "15px",
              padding: "1em 3em 1em 3em",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              textAlign="center"
              color={theme.palette.textLight.main}
            >
              Seguridad
            </Typography>
            <Typography
              variant="body"
              textAlign="center"
              color={theme.palette.textLight.main}
            >
              Esta sección contiene preguntas habituales sobre la seguridad y
              fiabilidad de la tecnología en las aplicaciones
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "30px",    maxWidth:'1100px',  }}>
          <Box
            sx={{
              background: theme.palette.secondary.main,
              width: "600px",
              borderRadius: "15px",
              padding: "5px",
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              textAlign="center"
              color={theme.palette.textLight.main}
            >
              Solución de problemas
            </Typography>
          </Box>
          <Box
            sx={{
              background: theme.palette.secondary.main,
              width: "600px",
              borderRadius: "15px",
              padding: "5px",
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              textAlign="center"
              color={theme.palette.textLight.main}
            >
              General
            </Typography>
          </Box>
        </Box>
      </Box>
      
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1em",
          backgroundColor: theme.palette.textLight.main,
          zIndex: "1",
          padding: "3em",
        }}
      ></Box>
    </Box>
  );
};

export default FirstSection;
