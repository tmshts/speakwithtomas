import { Typography, Box } from '@mui/material' 

const Spanish = () => {
  return (
    <div>

        <Typography
            variant="h5"
            component="h1"
            fontWeight="fontWeightBold" 
            sx={{
                mb: 2,
                color: '#2563EB',
                zIndex: 1,
                position: 'relative',
                textAlign: "center"
            }}> 
            Spanish Lessons
        </Typography>

        <Box sx={{
            maxWidth: { xs: '100%', sm: '80%', md: '700px' },
            mx: 'auto',
            aspectRatio: '16 / 9',
            backgroundColor: '#333',
            borderRadius: '8px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ccc',
            marginBottom: '20px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.6)', 
        }}>
            <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/yb5xQPknmjw"
                title="GymProgg Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </Box>
    </div>
  )
}

export default Spanish