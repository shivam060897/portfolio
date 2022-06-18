import React from 'react'
import { Card, CardHeader, CardContent, Grid, Paper, Typography } from '@mui/material';


const Education = (props) => {
    const { education } = props
    const years = Object.keys(education).sort((a, b) => a - b).reverse()

    return (
        <React.Fragment>
            <Card sx={{ background: '#424242', minWidth: '83vw' }}>
                <CardHeader title='Education' sx={{ color: '#FFFFFF' }} />
                <CardContent sx={{ marginTop: -3 }}>
                    <Grid container direction="row" justifyContent="flex-start" alignItems="flex-end" spacing={3}>
                        <Grid item>
                            <Paper elevation={3} sx={{ padding: 2, background: '#303030' }}>
                                <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
                                    {
                                        education[years[0]].name !== undefined ? (
                                            <Grid item>
                                                <Typography variant='h6' color={'#FFFFFF'}>{education[years[0]].name} -- {years[0]}</Typography>
                                            </Grid>
                                        ) : null
                                    }
                                    {
                                        education[years[0]].school !== undefined ? (
                                            <Grid item>
                                                <Typography variant='caption' color={'#FFFFFF'}>{education[years[0]].school}</Typography>
                                            </Grid>
                                        ) : null
                                    }
                                    {
                                        education[years[0]].board !== undefined ? (
                                            <Grid item>
                                                <Typography variant='caption' color={'#FFFFFF'}>{education[years[0]].board}</Typography>
                                            </Grid>
                                        ) : null
                                    }
                                    {
                                        education[years[0]].location !== undefined ? (
                                            <Grid item>
                                                <Typography variant='caption' color={'#FFFFFF'}>{education[years[0]].location}</Typography>
                                            </Grid>
                                        ) : null
                                    }
                                </Grid>
                            </Paper>
                        </Grid>
                        {
                            years.slice(1).map((year) => (
                                <Grid item>
                                    <Paper elevation={3} sx={{ padding: 2, background: '#303030' }}>
                                        <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
                                            {
                                                education[year].name !== undefined ? (
                                                    <Grid item>
                                                        <Typography variant='subtitle1' color={'#FFFFFF'}>{education[year].name} -- {year}</Typography>
                                                    </Grid>
                                                ) : null
                                            }
                                            {
                                                education[year].school !== undefined ? (
                                                    <Grid item>
                                                        <Typography variant='caption' color={'#FFFFFF'}>{education[year].school}</Typography>
                                                    </Grid>
                                                ) : null
                                            }
                                            {
                                                education[year].board !== undefined ? (
                                                    <Grid item>
                                                        <Typography variant='caption' color={'#FFFFFF'}>{education[year].board}</Typography>
                                                    </Grid>
                                                ) : null
                                            }
                                            {
                                                education[year].location !== undefined ? (
                                                    <Grid item>
                                                        <Typography variant='caption' color={'#FFFFFF'}>{education[year].location}</Typography>
                                                    </Grid>
                                                ) : null
                                            }
                                        </Grid>
                                    </Paper>
                                </Grid>
                            ))
                        }
                    </Grid>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}

export default Education;
