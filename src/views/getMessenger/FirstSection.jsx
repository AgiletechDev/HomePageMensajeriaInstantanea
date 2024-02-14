import { Box, Button, Typography } from "@mui/material"
import ciudad from '../../assets/images/ciudadWhiteAndBlack.jpg'

export const FirstSection = () => {
  return (
    <>
        <Box sx={{
            height: '700px',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',
            // alignItems: 'center'
        }}
        >
            
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '40%',
                marginTop: '128px'
            }}
            >

                <Typography variant="h5" fontWeight='600' marginBottom='20px' textAlign='center'  >
                    Smessenger para dispositivos móviles
                </Typography>

                <Box sx={{
                    height: '250px',
                    backgroundColor: 'red',
                    borderRadius: '20px',
                    position: 'relative',
                }}
                >
                    <img src={ciudad} alt="" style={{position: "absolute", bottom: "0", left: '125px'}} />
                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
                >
                    <Button variant="contained" color="textDark" sx={{
                        width: '49%',
                        fontSize: '15px',
                        borderRadius: '20px',
                        textTransform: 'none',
                        color: 'white',
                        marginTop: '20px'
                        }}
                        >
                            Android
                        </Button>
                    <Button variant="contained" color="textDark" sx={{
                        width: '49%',
                        fontSize: '15px',
                        borderRadius: '20px',
                        textTransform: 'none',
                        color: 'white',
                        marginTop: '20px'
                        }}
                        >
                            Iphone o Ipad
                    </Button>

                </Box>
                
                <Typography marginTop='30px' textAlign='center'>
                    O visita Smessenger.org/install desde tu teléfono
                </Typography>

            </Box>
            
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '40%',
                marginTop: '128px'

            }}
            >

                <Typography variant="h5" fontWeight='600' marginBottom='20px' textAlign='center'  >
                    Smessenger para Escritorio
                </Typography>

                <Box sx={{
                    height: '250px',
                    backgroundColor: 'red',
                    borderRadius: '20px',
                    position: 'relative',
                }}
                >
                    <img src={ciudad} alt="" style={{position: "absolute", bottom: "0", left: '125px'}} />
                </Box>

                
                    <Button variant="contained" color="textDark" sx={{
                        width: '100%',
                        fontSize: '15px',
                        borderRadius: '20px',
                        textTransform: 'none',
                        color: 'white',
                        marginTop: '20px',
                        marginBottom: '20px'
                        }}
                    >
                        Descarga para Windows
                    </Button>

                
                <Typography  textAlign='center' 
                    sx={{
                        backgroundColor: '#f6f6f6',
                        borderRadius: '10px',
                        padding: '10px'
                    }}
                >
                    Para usar la aplicación de escritorio, Smessenger debe estar instalada y configurada 
                    previamente en tu teléfono
                </Typography>

            </Box>

        </Box>

    </>
  )
}
