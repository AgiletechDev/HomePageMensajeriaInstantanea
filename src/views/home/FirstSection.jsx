import { Box, Button, Typography, useTheme } from "@mui/material"
import Smessengerasset2 from '../../assets/images/Smessengerasset2.png'
import Smessengerasset3 from '../../assets/images/Smessengerasset3.png'
import phone3 from '../../assets/images/phonemain.png'
import PANELA from '../../assets/images/PANELA.png'
import { useTranslation } from 'react-i18next'

export const FirstSection = () => {

  const { t } = useTranslation();

    const theme = useTheme();
    
  return (
      <>
        <Box sx={{
            backgroundColor: 'rgba(216,34,44,0.8)',
            display: 'flex',
            alignItems: 'center',
            height: '90vh',
            width: '100%',
            marginTop: '40px'
        }}
        >

            <img src={Smessengerasset3} alt="" style={{position: 'absolute', left: '5%', height: '80%', zIndex: '-1' }} />
            
            <img src={PANELA} alt="" style={{position: 'absolute', right: '0', height: '100%',  zIndex: '0' }} />

            <img src={phone3} alt="" style={{position: 'absolute', right: '15%',  zIndex: '1', top:'25%' }} />

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '350px',
                zIndex: '2',
                marginLeft: '11%'
            }}
            >
                <Typography color='white' variant="h1" sx={{
                    fontSize: '45px',
                    fontWeight: '600',
                    width: '300px',
                }}>
                    {t("HOME1_FIRSTSECTION")}
                </Typography>
                        
                <Typography color='white' textAlign='justify' marginTop='15px' marginBottom='15px'>
                    {t("HOME1_FIRSTSECTION2")}
                </Typography>
                        
                <Button variant="contained" color="textDark" sx={{
                    width: '200px',
                    fontSize: '15px',
                    borderRadius: '20px',
                    textTransform: 'none',
                    color: 'white'
                }}
                >
                    {t("HOME1_BUTTON")}
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
                width: '1100px',
            }}>
                <Typography variant="h2" sx={{
                    fontSize: '35px',
                    fontWeight: '600',
                }}>
                    {t("HOME1_FIRSTSECTION3")}
                </Typography>
                        
                <Typography textAlign='justify' marginTop='25px' marginBottom='25px'>
                    {t("HOME1_FIRSTSECTION4")}
                </Typography>
                        
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-beetween',
                    marginTop: '20px',
                    gap:'80px'
                }}
                >

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginRight: '40px'
                    }}
                    >
                        <Typography fontWeight='600' fontSize='25px' width='300px'>{t("HOME1_FIRSTSECTION5")}</Typography>
                        <Typography   width='350px'>
                            {t("HOME1_FIRSTSECTION6")}
                        </Typography>
                            
                    </Box>
                        <img src={Smessengerasset2} alt="" style={{height: '450px', marginLeft: '20px'}} />

                </Box>

            </Box>
                    

        </Box>
    </>        
          
  )
}
