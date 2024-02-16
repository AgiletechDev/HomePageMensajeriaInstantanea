import { Box, Typography } from '@mui/material'
import ciudad from '../../assets/images/Smessengerasset6.png'
import pet from '../../assets/images/Smessengerasset1.png'
import { useTranslation } from 'react-i18next'



const Description = ({title, paragraph})=>(
    <Box marginTop='20px'>
        <Typography variant='h6' fontWeight='600'  color='red'>
            {title}
        </Typography>
        <Typography marginTop='20px'>
            {paragraph}
        </Typography>
    </Box>
)

export const FirstSection = () => {

  const { t } = useTranslation();
  
  const data = [
    {
        title: t("DEVELOPERS_USERS5"),
        paragraph: t("DEVELOPERS_USERS6")
    },
    {
        title: t("DEVELOPERS_USERS7"),
        paragraph: t("DEVELOPERS_USERS8")
    },
    {
        title: t("DEVELOPERS_USERS9"),
        paragraph: t("DEVELOPERS_USERS10")
    },
];
  return (
    <>
        <Box sx={{
            height: '500px',
            width: '100%',
            background: `url(${ciudad}) center / cover no-repeat`,
            zIndex:'1'
        }}
        >
       
            <Box sx={{
                position: 'absolute',
                top: '200px',
                left: '10%',
            }}
         
            >
                  <img src={pet} style={{zIndex:'2',position: 'absolute', left: '120%',width:'120%', top:'-150%'}}/>
                <Typography variant="h3" color='white' style={{
                    fontWeight: '600',
                    marginBottom: '10px'
                }}
                >
                    {t("DEVELOPERS_USERS1")}
                </Typography>
                <Typography color='white'>
                    {t("DEVELOPERS_USERS2")}
                </Typography>
            </Box>

        </Box>

        <Box sx={{
            height: '1050px',
            backgroundColor: 'white',
            borderTopRightRadius: '50px',
            marginTop: '-50px',
            paddingX: '150px',
            display: 'flex'

        }}
        >

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '50%'
            }}
            >
                <Typography variant='h4' fontWeight='600' marginTop='20px'>
                    {t("DEVELOPERS_USERS3")}
                </Typography>
                <Typography marginTop='20px' fontWeight='600'>
                    {t("DEVELOPERS_USERS4")}
                </Typography>

                {
                data.map(({title, paragraph}, index)=>(
                    <Description key={index} title={title} paragraph={paragraph }/>
                ))
                }


                <Typography variant='h4' fontWeight='600' marginTop='20px'>
                    {t("DEVELOPERS_USERS11")}
                </Typography>

                <Typography variant='h6' fontWeight='600'  color='red' marginTop='10px'>
                    {t("DEVELOPERS_USERS12")}
                </Typography>

            </Box>

            <Box marginTop='150px' width='50%' marginLeft='50px'>

                <Description
                    title={t("DEVELOPERS_USERS13")}
                    paragraph={t("DEVELOPERS_USERS14")}
                />

               <Description
                    title={t("DEVELOPERS_USERS15")}
                    paragraph={t("DEVELOPERS_USERS16")}
               />

            </Box>

        </Box>

    </>
  )
}