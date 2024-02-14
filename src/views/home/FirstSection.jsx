import { Box, Button, Typography } from "@mui/material"
import phone from '../../assets/images/phone.png'

export const FirstSection = () => {
  return (
      <>
        <Box sx={{
            backgroundColor: 'red',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '100vh',
            width: '100%',
            marginTop: '40px'
        }}
        >
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '400px'
            }}>
                <Typography color='white' variant="h1" sx={{
                    fontSize: '45px',
                    fontWeight: '600',
                    width: '300px',
                }}>
                    Habla con libertad
                </Typography>
                        
                <Typography color='white' textAlign='justify' marginTop='15px' marginBottom='15px'>
                Di «hola» a una manera diferente de chatear: Smessenger se enfoca en la privacidad, pero con todas las características que esperas de una aplicación de chat
                </Typography>
                        
                <Button variant="contained" color="textDark" sx={{
                    width: '200px',
                    fontSize: '15px',
                    borderRadius: '20px',
                    textTransform: 'none',
                    color: 'white'
                }}
                >
                    Descargar Smessenger
                </Button>

            </Box>
                    
            <img src="" alt="" />

        </Box>


        <Box sx={{
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '900px',
            width: '100%',
            borderTopLeftRadius: '50px',
            marginTop: '-50px'
        }}
        >
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%'
            }}>
                <Typography variant="h2" sx={{
                    fontSize: '35px',
                    fontWeight: '600',
                }}>
                    ¿Por qué usar Smessenger?
                </Typography>
                        
                <Typography textAlign='justify' marginTop='25px' marginBottom='25px'>
                Continúa hacia abajo para comprobar por qué Smessenger es una aplicación de chat simple, potente y segura
                </Typography>
                        
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-beetween',
                    marginTop: '20px'
                }}
                >

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginRight: '40px'
                    }}
                    >
                        <Typography fontWeight='600' fontSize='25px' width='300px'>Comparte sin inseguridades</Typography>
                        <Typography   width='350px'>
                            El cifrado de extremo a extremo de última 
                            generación (respaldado por el protocolo de 
                            código abierto de Smessenger) mantiene tus 
                            chats seguros. Ni nosotros podemos acceder 
                            a tu lista de contactos, leer tus mensajes, ni 
                            escuchar tus llamadas. Tampoco nadie más.
                            La privacidad no es un modo opcional, es 
                            cómo funciona Smessenger. En todos tus 
                            mensajes, todas tus llamadas, para siempre.
                        </Typography>
                            
                    </Box>
                        <img src="" alt="" />

                </Box>

            </Box>
                    

        </Box>
    </>        
          
  )
}
