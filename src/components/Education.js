import React from 'react'
import { Card, CardHeader, CardContent, Paper, Typography } from '@mui/material';


const Education = (props) => {
    const { education } = props
    const classes = {
        timeline: { transform: "rotate(90deg)" },
        timelineContentContainer: { textAlign: "left" },
        timelineContent: { display: "inline-block", transform: "rotate(-90deg)", textAlign: "center", minWidth: 50 },
        timelineIcon: { transform: "rotate(-90deg)" }
    }

    return (
        <React.Fragment>
            <Card sx={{ background: '#424242', minWidth: '83vw' }}>
                <CardHeader title='Education' sx={{ color: '#FFFFFF' }} />
                <CardContent></CardContent>
            </Card>
        </React.Fragment>
    )
}

export default Education;
