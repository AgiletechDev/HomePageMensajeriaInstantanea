import { Box, Button, Typography } from "@mui/material"
import ciudad from '../../assets/images/ciudadWhiteAndBlack.jpg'

const SectionCard = ({title, image,children})=>(
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
        }}
        >
            <img src={image} alt="" style={{ position: "absolute", bottom: "0" }} />
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
                image={ciudad}
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


            <SectionCard title='Smessenger para Escritorio' image={ciudad}>
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
	