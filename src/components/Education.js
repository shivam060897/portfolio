import React from 'react'
import { Card, CardHeader, CardContent, Grid, Paper, Typography } from '@mui/material';


const Education = ({ education }) => {
    const years = Object.keys(education).sort((a, b) => a - b).reverse()

    return (
        <Card sx={{ background: '#424242'}}>
            <CardHeader title='Education' sx={{ color: '#FFFFFF' }} />
            <CardContent sx={{ marginTop: -2 }}>
                <Grid key="edu" container direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={6}>
                    <Grid key="edu-1" item sx={{ width: "100%" }}>
                        <Paper elevation={3} sx={{ padding: 2, background: '#303030' }}>
                            <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
                                {education[years[0]].name !== undefined ? <Grid key={"Edu-Item01"} item><Typography variant='h6' color={'#FFFFFF'}>{education[years[0]].name}</Typography></Grid> : null}
                                {education[years[0]].name !== undefined ? <Grid key={"Edu-Item02"} item><Typography variant='h6' color={'#FFFFFF'}>{years[0]}</Typography></Grid> : null}
                                {education[years[0]].school !== undefined ? <Grid key={"Edu-Item03"} item><Typography variant='caption' color={'#FFFFFF'}>{education[years[0]].school}</Typography></Grid> : null}
                                {education[years[0]].board !== undefined ? <Grid key={"Edu-Item04"} item><Typography variant='caption' color={'#FFFFFF'}>{education[years[0]].board}</Typography></Grid> : null}
                                {education[years[0]].location !== undefined ? <Grid key={"Edu-Item05"} item><Typography variant='caption' color={'#FFFFFF'}>{education[years[0]].location}</Typography></Grid> : null}
                            </Grid>
                        </Paper>
                    </Grid>
                    {
                        years.slice(1).map((year, index) => (
                            <Grid key={"edu-" + year} item sx={{ width: "100%" }}>
                                <Paper elevation={3} sx={{ padding: 2, background: '#303030' }}>
                                    <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
                                        {education[year].name !== undefined ? <Grid key={"Edu-Item" + String(index + 1) + "1"} item><Typography variant='subtitle1' color={'#FFFFFF'}>{education[year].name} -- {year}</Typography></Grid> : null}
                                        {education[year].school !== undefined ? <Grid key={"Edu-Item" + String(index + 1) + "2"} item><Typography variant='caption' color={'#FFFFFF'}>{education[year].school}</Typography></Grid> : null}
                                        {education[year].board !== undefined ? <Grid key={"Edu-Item" + String(index + 1) + "3"} item><Typography variant='caption' color={'#FFFFFF'}>{education[year].board}</Typography></Grid> : null}
                                        {education[year].location !== undefined ? <Grid key={"Edu-Item" + String(index + 1) + "4"} item><Typography variant='caption' color={'#FFFFFF'}>{education[year].location}</Typography></Grid> : null}
                                    </Grid>
                                </Paper>
                            </Grid>
                        ))
                    }
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Education;
