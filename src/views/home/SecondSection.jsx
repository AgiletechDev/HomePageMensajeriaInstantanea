import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material"
import Smessenger from '../../assets/images/Smessenger_asset6.png'
import guacamayo from '../../assets/images/guacamayo.jpg'
import icons8_mms1 from '../../assets/icons/icons8_mms1.png'
import icons8_security_shield1 from '../../assets/icons/icons8_security_shield1.png'
import icons8_shared_mail1 from '../../assets/icons/icons8_shared_mail1.png'
import icons8_phone_message1 from '../../assets/icons/icons8_phone_message1.png'
import Smessengerasset1 from '../../assets/images/Smessengerasset1.png'
import Smessengerasset5 from '../../assets/images/Smessengerasset5.png'

const cardStyles = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
    backdropFilter: 'blur(10px)',
    borderRadius: '40px 40px 0 40px',
    width: '450px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center' 
  };

const cardStyles2 = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
    backdropFilter: 'blur(10px)',
    borderRadius: '40px 40px 0 40px',
    width: '450px',
    marginLeft: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center' 
  };

export const SecondSection = () => {
  return (
    <>
        <Box sx={{
            background: `url(${Smessenger})`,
            backgroundSize: 'cover',
            height: '900px',
            width: '100%',
            borderTopRightRadius: '50px',
            display: 'flex',
            flexDirection: 'column',
            // flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center'
        }}
        >

            <Box sx={{
                display: 'flex',
            }}>
                <Card sx={cardStyles}
                >
                    <img src={icons8_security_shield1} alt="" style={{height: '120px', marginTop: '20px'}} />

                    <CardContent>
                        <Typography variant="h5" component="div" textAlign='center' color='white'>
                        Adhiérete a la privacidad
                        </Typography>
                        <Typography width='400px' variant="body2"  textAlign='center' color='white'>
                        Añade una nueva capa de expresión a tus chats con los stickers cifrados.
                        También puedes crear y compartir tus propios paquetes de stickers
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={cardStyles2}
                >
                    <img src={icons8_mms1} alt="" style={{height: '120px', marginTop: '20px'}} />

                    <CardContent>
                        <Typography variant="h5" component="div" textAlign='center' color='white'>
                        Di lo que quieras
                        </Typography>
                        <Typography width='400px' variant="body2" textAlign='center' color='white'>
                        Envía y recibe mensajes, notas de voz, fotos, videos, GIFs y archivos 
                        gratis. Smessenger usa la conexión de datos de tu teléfono por lo que no 
                        se generan gastos por SMS o MMS.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            
            <Box sx={{
                display: 'flex',
                marginTop: '20px'
            }}>
                <Card sx={cardStyles}
                >

                    <img src={icons8_shared_mail1} alt="" style={{height: '120px', marginTop: '20px'}} />

                    <CardContent>
                        <Typography variant="h5" component="div" textAlign='center' color='white'>
                        Únete a grupos
                        </Typography>
                        <Typography width='400px' variant="body2" color="white" textAlign='center'>
                        Los chats de grupo te permiten conectar fácilmente con tu familia, 
                        amistades y compañeros de trabajo.
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={cardStyles2}
                >
                    
                    <img src={icons8_phone_message1} alt="" style={{height: '120px', marginTop: '20px'}} />


                    <CardContent>
                        <Typography variant="h5" component="div" textAlign='center' color='white'>
                        Habla con libertad
                        </Typography>
                        <Typography width='400px' variant="body2" color="white" textAlign='center'>
                        Haz llamadas y videollamadas con calidad cristalina a personas que viven 
                        al otro lado de la ciudad o al otro lado del océano sin cargos de larga 
                        distancia.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        
        </Box>
        

        <Box sx={{
            backgroundColor: 'red',
            backgroundSize: 'cover',
            height: '900px',
            width: '100%',
            borderTopLeftRadius: '50px',
            display: 'flex',
            flexDirection: 'column',
            // flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '-50px'
        }}
        >
            <Box sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-around'
            }}
            >
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
                >
                    <Typography variant="h5" fontWeight='600' color='white' width='300px' >
                        Sin publicidad. Sin seguimiento. Sin bromas.
                    </Typography>
                    <Typography  color='white' width='480px' marginTop='20px' >
                    No tenemos anuncios, ni vendedores afiliados, ni hacemos un
                    rastreo de tu uso de Smessenger. Así que concéntrate en
                    compartir los momentos que te importan con las personas que te
                    importan.
                    </Typography>
                </Box>

                <img src={Smessengerasset1} alt="" height='380px' style={{marginTop: '-80px'}} />

            </Box>
            <Box sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-around',
                marginTop: '70px'
            }}
            >
            <img src={Smessengerasset5} alt="" height='380px' style={{marginTop: '-80px'}} />
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
                >
                    <Typography variant="h5" fontWeight='600' color='white' width='300px' >
                    Gratis para todo el mundo
                    </Typography>
                    <Typography  color='white' width='480px' marginTop='20px' >
                    Smessenger es una organización independiente sin ánimo de 
                    lucro. No dependemos de ninguna compañía tecnológica 
                    importante, y tampoco podemos ser adquiridos por una. El 
                    desarrollo de Smessenger se sostiene con subvenciones y 
                    donaciones de gente interesada en la privacidad como tú.
                    </Typography>

                    <Button variant="contained" color="textDark" sx={{
                    width: '200px',
                    fontSize: '15px',
                    borderRadius: '20px',
                    textTransform: 'none',
                    color: 'white',
                    marginTop: '20px'
                    }}
                    >
                        Descargar Smessenger
                    </Button>

                </Box>


            </Box>


        </Box>

    </>
  )
}
