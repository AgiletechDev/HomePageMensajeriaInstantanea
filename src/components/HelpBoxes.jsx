import { Box, Typography, useTheme } from '@mui/material'

const HelpBoxes = () => {
  const theme = useTheme();
  return (
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
  
  )
}

export default HelpBoxes