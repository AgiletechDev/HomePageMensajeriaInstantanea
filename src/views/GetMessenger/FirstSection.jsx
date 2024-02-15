import { Box, Button, Typography } from "@mui/material"
import ciudad from '../../assets/images/ciudadWhiteAndBlack.jpg'
import Smessengerasset9 from '../../assets/images/Smessengerasset9.png'
import Smessengerasset4 from '../../assets/images/Smessengerasset4.png'

const SectionCard = ({title, image,children, imageHeight, imageMarginBottom})=>(
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '40%',
        marginTop: '128px'
    }}
    >
        <Typography variant="h5" fontWeight='600' marginBottom='20px' textAlign='center'  >
                    {title}
        </Typography>

        <Box sx={{
            height: '250px',
            backgroundColor: 'red',
            borderRadius: '20px',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            overflow: 'hidden'
        }}
        >
            <img src={image} alt="" style={{ position: "absolute", bottom: imageMarginBottom, height: imageHeight }} />
        </Box>

        {children}

    </Box>
    )

export const FirstSection = () => {
  return (
    <>
        <Box sx={{
            height: '700px',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',
        }}
        >

            <SectionCard
                title='Smessenger para dispositivos móviles'
                image={Smessengerasset4}
                imageHeight='390px'
                imageMarginBottom='-180px'
            >
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

            </SectionCard>


            <SectionCard title='Smessenger para Escritorio' 
            image={Smessengerasset9}  
            imageHeight='315px'
            imageMarginBottom='-70px'

            
            >
                <Button variant="contained" color="textDark" 
                sx={{
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

            </SectionCard>

        </Box>

    </>
  )
}
	