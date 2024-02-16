import { Box, Button, Typography } from "@mui/material"
import ciudad from '../../assets/images/ciudadWhiteAndBlack.jpg'
import Smessengerasset9 from '../../assets/images/Smessengerasset9.png'
import Smessengerasset4 from '../../assets/images/Smessengerasset4.png'
import { useTranslation } from 'react-i18next'

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

  const { t } = useTranslation();

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
                title={t("GETMESSENGER_FIRSTSECTION1")}
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
                    {t("GETMESSENGER_FIRSTSECTION2")}
                </Typography>

            </SectionCard>


            <SectionCard title={t("GETMESSENGER_FIRSTSECTION3")} 
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
                    {t("GETMESSENGER_FIRSTSECTION4")}
                </Button>


                <Typography  textAlign='center' 
                    sx={{
                        backgroundColor: '#f6f6f6',
                        borderRadius: '10px',
                        padding: '10px'
                    }}
                >
                    {t("GETMESSENGER_FIRSTSECTION5")}
                </Typography>

            </SectionCard>

        </Box>

    </>
  )
}
	