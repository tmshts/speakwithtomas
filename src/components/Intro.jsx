import React, { useEffect, useState } from 'react'
import { Typography, List, ListItem, Box } from '@mui/material' 


const values = [
    //'English Lessons',
    //'German Lessons',
    //'Spanish Lessons',
    //'Czech Lessons',
    '1-on-1 English, German, Spanish, or Czech lessons',
    'Grammar up to B2 level, conversation, or mixed lessons',
    'Lessons tailored to your level and goals',
    //'25 USD / hour',
    'Online or in-person (depending on location)'
]


const Intro = () => {

    const [visibleSteps, setVisibleSteps] = useState([])

    useEffect(() => {
        // Animate all items sequentially
        for (let i = 0; i < values.length; i++) {
        setTimeout(() => {
            setVisibleSteps((prev) => [...prev, i])
        }, i * 200)
        }
    }, [])



  return (
    <div>

        <Typography
            variant="h4"
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
            Speak English, German, Spanish & Czech with Tomas
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
            Improve your grammar, boost your confidence, and practice real conversations with Tomas who has lived, studied, and worked across Europe and North America.
            What I offer for 25 USD/hour:
        </Typography>

        <List>
            {values.map((content, i) => (
            <ListItem
                key={i}
                className={visibleSteps.includes(i) ? 'fly-up' : ''}
                style={{ animationDelay: `${i * 0.2}s` }}
            >
                <Typography
                    sx={{
                        fontFamily: 'inherit',
                        color: '#2563EB',
                        backgroundColor: '#fff',
                        width: '100%',
                        padding: '12px',
                        borderRadius: '12px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                        fontWeight: 'bold'
                    }}
                >
                {content}
                </Typography>
            </ListItem>
            ))}
        </List>


    </div>

  )
}

export default Intro