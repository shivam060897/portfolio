import React from 'react'
import { Card, CardHeader, CardContent, Grid, Paper, Typography } from '@mui/material';


const Experience = (props) => {
    const { expericences } = props

    return (
        <React.Fragment>
            <Card sx={{ background: '#424242', minWidth: '83vw' }}>
                <CardHeader title='Experience' sx={{ color: '#FFFFFF' }} />
                <CardContent sx={{ marginTop: -3 }}>
                    <Grid container direction="row" justifyContent="flex-start" alignItems="flex-end" spacing={3}>
                        {
                            expericences.map((expericence, index) => (
                                <Grid key={String(index) + "-Grid"} item sx={{ width: "100%" }}>
                                    <Paper key={String(index) + "-Paper"} elevation={3} sx={{ padding: 2, background: '#303030' }}>
                                        <Grid key={String(index) + "-GridData"} container direction="column" justifyContent="flex-start" alignItems="flex-start">
                                            <Grid key={String(index) + "-GridDataItem1"} item><Typography variant='subtitle1' color={'#FFFFFF'}>{expericence.position}</Typography></Grid>
                                            <Grid key={String(index) + "-GridDataItem2"} item><Typography variant='h6' color={'#FFFFFF'}>{expericence.organization}</Typography></Grid>
                                            <Grid key={String(index) + "-GridDataItem3"} item><Typography variant='caption' color={'#FFFFFF'}>{expericence.department}</Typography></Grid>
                                            <Grid key={String(index) + "-GridDataItem4"} item><Typography variant='caption' color={'#FFFFFF'}>{expericence.address}</Typography></Grid>
                                            <Grid key={String(index) + "-GridDataItem5"} item><Typography variant='caption' color={'#FFFFFF'}>{expericence.interval.from.year}/{expericence.interval.from.month}/{expericence.interval.from.date} - {expericence.interval.to.year === '*' ? 'Current' : String(expericence.interval.to.year) + '/' + String(expericence.interval.to.month) + '/' + String(expericence.interval.to.date)}</Typography></Grid>
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

export default Experience
