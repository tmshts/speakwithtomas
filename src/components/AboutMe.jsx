import { Typography, Button, Box } from '@mui/material' 
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import main_picture from '../assets/main_picture.jpeg'


const AboutMe = () => {

  return (
    <div>

        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 3 }}>
            <img 
                src={main_picture}
                alt="Tomas"
                style={{
                    width: 150,
                    height: 150,
                    borderRadius: '10%',
                    objectFit: 'cover',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                }}
            />
        </Box>

        <Typography
            variant="h5"
            component="h1"
            fontWeight="fontWeightBold"
            marginTop={3}
            sx={{
                mb: 2,
                color: '#2563EB',
                zIndex: 1,
                position: 'relative',
                textAlign: "center"
            }}> 
            About Me
        </Typography>


        <Typography
            variant="h9"
            component="h3"
            sx={{
                mb: 2,
                color: 'black',
                zIndex: 1,
                position: 'relative',
                textAlign: "center"
            }}> 
                <p>Hello, my name is Tomas, and I’m from the Czech Republic.</p>

                <p>I speak four languages fluently and have lived abroad for more than 10 years in countries including Ireland, Germany, Austria, Switzerland, Mexico, the USA, and Malta.</p>

                <p>My academic background includes two Master’s degrees, one completed in the Czech Republic and one in Germany. Additionally, I participated in three exchange programs in Austria, Switzerland, and Ireland. I also studied Spanish in Mexico.</p>

                <p>I have primarily worked in Germany, Austria, and Malta, using multiple languages on a daily basis.</p>

                <p>Whether you want to improve your grammar, prepare for travel, practice speaking, or boost your confidence, I’m here to help.</p>

                <br/>
        
            <Button
                variant="contained"
                sx={{
                    backgroundColor: '#2563EB',
                    color: '#fff',
                    '&:hover': { backgroundColor: '#1E40AF' },
                    borderRadius: '25px',
                    px: 2,
                    py: 1.5,
                    fontWeight: 'bold',
                }}
                onClick={() => window.open('https://www.tomashatas.com/cv', '_blank')}
            >
            More info about me
            </Button>

            <br/>
            <br/>

            <Button
                variant="contained"
                startIcon={<WhatsAppIcon />}
                sx={{
                    backgroundColor: '#25D366',
                    color: '#fff',
                    '&:hover': { backgroundColor: '#1DA851' },
                    borderRadius: '25px',
                    px: 3,
                    py: 1.5,
                    fontWeight: 'bold',
                }}
                onClick={() => window.open('https://wa.me/420732964320', '_blank')} // replace with your phone number
            >
                +420 732 964 320
            </Button>


        </Typography>



    </div>

  )
}

export default AboutMe