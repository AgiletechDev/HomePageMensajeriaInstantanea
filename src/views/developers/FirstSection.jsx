import { Box, Typography } from '@mui/material'
import ciudad from '../../assets/images/ciudadWhiteAndBlack.jpg'


const data = [
    {
        title: 'XEdDSA and VXEdDSA',
        paragraph: 'This document describes how to create and verify EdDSA-compatible signatures using public key and private key formats initially defined for the X25519 and X448 elliptic curve Diffie-Hellman functions. This document also describes VXEdDSA which extends XEdDSA to make it a verifiable random function, or VRF.'
    },
    {
        title: 'X3DH',
        paragraph: 'This document describes the "X3DH" (or "Extended Triple Diffie-Hellman") key agreement protocol. X3DH establishes a shared secret key between two parties who mutually authenticate each other based on public keys. X3DH provides forward secrecy and cryptographic deniability."'
    },
    {
        title: 'PQXDH',
        paragraph: 'This document describes the "PQXDH" (or "Post-Quantum Extended Diffie-Hellman") key agreement protocol. PQXDH establishes a shared secret key between two parties who mutually authenticate each other based on public keys. PQXDH provides post-quantum forward secrecy and a form of cryptographic deniability but still relies on the hardness of the discrete log problem for mutual authentication in this revision of the protocol.'
    },
];

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
  return (
    <>
        <Box sx={{
            height: '500px',
            width: '100%',
            background: `url(${ciudad})`,
            backgroundSize: 'cover'
        }}
        >
            <Box sx={{
                position: 'absolute',
                top: '200px',
                left: '10%',
            }}
            >
                <Typography variant="h3" color='white' style={{
                    fontWeight: '600',
                    marginBottom: '10px'
                }}
                >
                    Technical information
                </Typography>
                <Typography color='white'>
                    Specifications and software libraries for developers
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
                    Specifications
                </Typography>
                <Typography marginTop='20px' fontWeight='600'>
                    Encryption in messaging environments integrates many ideas which
                    often need to be composed separately in different applications. We
                    make an effort to break out ideas into independent specifications so
                    that they can be integrated as appropriate for different projects
                </Typography>

                {
                data.map(({title, paragraph}, index)=>(
                    <Description key={index} title={title} paragraph={paragraph }/>
                ))
                }


                <Typography variant='h4' fontWeight='600' marginTop='50px'>
                    Software libraries
                </Typography>
                
                <Typography variant='h6' fontWeight='600'  color='red' marginTop='30px'>
                    Smessenger Protocol library
                </Typography>

            </Box>

            <Box marginTop='190px' width='50%' marginLeft='50px'>

                <Description
                    title='Double Ratchet'
                    paragraph='This document describes the Double Ratchet algorithm, which is used by two parties
                    to exchange encrypted messages based on a shared secret key. The parties derive
                    new keys for every Double Ratchet message so that earlier keys cannot be calculated 
                    from later ones. The parties also send Diffie-Hellman public values attached to their 
                    messages. The results of Diffie-Hellman calculations are mixed into the derived keys 
                    so that later keys cannot be calculated from earlier ones. These properties give some 
                    protection to earlier or later encrypted messages in case of a compromise of a party s 
                    keys.'
                />
               
               <Description
                    title='Sesame'
                    paragraph='This document describes the Sesame algorithm for managing message encryption
                    sessions in an asynchronous and multi-device setting.'
               />

            </Box>

        </Box>

    </>
  )
}
