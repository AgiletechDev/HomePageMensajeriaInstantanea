import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material"
import Smessenger from '../../assets/images/Smessenger_asset6.png'
import guacamayo from '../../assets/images/guacamayo.jpg'
import icons8_mms1 from '../../assets/icons/icons8_mms1.png'
import icons8_security_shield1 from '../../assets/icons/icons8_security_shield1.png'
import icons8_shared_mail1 from '../../assets/icons/icons8_shared_mail1.png'
import icons8_phone_message1 from '../../assets/icons/icons8_phone_message1.png'
import Smessengerasset1 from '../../assets/images/Smessengerasset1.png'
import Smessengerasset5 from '../../assets/images/Smessengerasset5.png'
import { useTranslation } from 'react-i18next'

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

    const { t } = useTranslation();

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
                            {t("HOME1_SECONDSECTION1")}
                        </Typography>
                        <Typography width='400px' variant="body2"  textAlign='center' color='white'>
                            {t("HOME1_SECONDSECTION2")}
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={cardStyles2}
                >
                    <img src={icons8_mms1} alt="" style={{height: '120px', marginTop: '20px'}} />

                    <CardContent>
                        <Typography variant="h5" component="div" textAlign='center' color='white'>
                            {t("HOME1_SECONDSECTION3")}
                        </Typography>
                        <Typography width='400px' variant="body2" textAlign='center' color='white'>
                            {t("HOME1_SECONDSECTION4")}
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
                            {t("HOME1_SECONDSECTION5")}
                        </Typography>
                        <Typography width='400px' variant="body2" color="white" textAlign='center'>
                            {t("HOME1_SECONDSECTION6")}
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={cardStyles2}
                >
                    
                    <img src={icons8_phone_message1} alt="" style={{height: '120px', marginTop: '20px'}} />


                    <CardContent>
                        <Typography variant="h5" component="div" textAlign='center' color='white'>
                            {t("HOME1_SECONDSECTION7")}
                        </Typography>
                        <Typography width='400px' variant="body2" color="white" textAlign='center'>
                            {t("HOME1_SECONDSECTION8")}
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
                        {t("HOME1_SECONDSECTION9")}
                    </Typography>
                    <Typography  color='white' width='480px' marginTop='20px' >
                        {t("HOME1_SECONDSECTION10")}
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
                        {t("HOME1_SECONDSECTION11")}
                    </Typography>
                    <Typography  color='white' width='480px' marginTop='20px' >
                        {t("HOME1_SECONDSECTION12")}
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
                        {t("HOME1_BUTTON")}
                    </Button>

                </Box>


            </Box>


        </Box>

    </>
  )
}
