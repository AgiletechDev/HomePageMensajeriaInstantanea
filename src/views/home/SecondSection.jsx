import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"

export const SecondSection = () => {
  return (
    <>
        <Box sx={{
            height: '900px',
            width: '100%',
            background: 'black',
            borderTopRightRadius: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}
        >

        {/* <Card sx={{backgroundColor: 'black'}}>
            <CardMedia
                component="img"
                height="140"
                image="url_de_tu_imagen.jpg" // Reemplaza con la URL de tu imagen
                alt="Imagen de ejemplo"
            />
            <CardContent>
                <Typography variant="h5" component="div" textAlign='center'>
                Adhiérete a la privacida
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Descripción de la Card. Puedes agregar aquí el texto que desees.
                </Typography>
            </CardContent>
            </Card> */}

        </Box>
    </>
  )
}
