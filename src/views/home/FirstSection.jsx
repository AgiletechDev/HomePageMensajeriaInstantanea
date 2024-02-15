import { Box, Button, Typography } from "@mui/material"
import phone from '../../assets/images/phone.png'
import Smessengerasset2 from '../../assets/images/Smessengerasset2.png'
import Smessengerasset3 from '../../assets/images/Smessengerasset3.png'
import PANELA from '../../assets/images/PANELA.png'

export const FirstSection = () => {
  return (
      <>
        <Box sx={{
            backgroundColor: 'rgba(255, 0, 0, 0.8)',
            display: 'flex',
            // justifyContent: 'space-around',
            alignItems: 'center',
            height: '90vh',
            width: '100%',
            marginTop: '40px'
        }}
        >

            <img src={Smessengerasset3} alt="" style={{position: 'absolute', left: '5%', height: '80%', zIndex: '-1' }} />
            
            <img src={PANELA} alt="" style={{position: 'absolute', right: '0', height: '100%',  zIndex: '0' }} />

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '350px',
                zIndex: '2',
                marginLeft: '10%'
            }}
            >
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
            height: '800px',
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
                        <img src={Smessengerasset2} alt="" style={{height: '450px', marginLeft: '20px'}} />

                </Box>

            </Box>
                    

        </Box>
    </>        
          
  )
}
