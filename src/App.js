import React from 'react';
import biodata from './data/biodata';
// import me from './data/me.jpg'
import { AboutMe, Education, Experience } from './components'
import stackoverflow from './data/stackoverflow512.png'
import { Avatar, Grid, IconButton, Card, CardHeader, CardContent, Divider, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


const App = (props) => {

  return (
    <React.Fragment>
      <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
        <Grid item>
          <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
            <Grid item>
              <Card sx={{ background: '#424242', width: 235 }}>
                <CardContent>
                  <Grid container direction={'column'} justifyContent="center" alignItems="center">
                    <Grid item>
                      <Avatar alt={biodata.name} src={'https://shivam060897.github.io/portfolio/me.jpg'} sx={{ width: 150, height: 150 }} />
                    </Grid>
                    <Grid item>
                      <Typography variant='h6' align='center' color={'#FFFFFF'}>{biodata.name}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant='caption' align='center' color={'#FFFFFF'}>{biodata.dob.long}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant='caption' align='center' color={'#FFFFFF'}>{biodata.contact.mail}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant='caption' align='center' color={'#FFFFFF'}>{biodata.contact.phone.secondary}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant='caption' align='left' color={'#FFFFFF'}>
                        <div>{biodata.address.post}, {biodata.address.district}, {biodata.address.state} - {biodata.address.pincode}</div>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1}>
                        <Grid item>
                          <IconButton variant='contained' color='info' size='small' href={biodata.websites.linkedin} target={'_blank'}><LinkedInIcon /></IconButton>
                        </Grid>
                        <Grid item>
                          <IconButton variant='contained' color='info' size='small' href={biodata.websites.facebook} target={'_blank'}><FacebookIcon /></IconButton>
                        </Grid>
                        <Grid item>
                          <IconButton variant='contained' color='info' size='small' href={biodata.websites.twitter} target={'_blank'}><TwitterIcon /></IconButton>
                        </Grid>
                        <Grid item>
                          <IconButton variant='contained' color='info' size='small' href={biodata.websites.instagram} target={'_blank'}><InstagramIcon /></IconButton>
                        </Grid>
                        <Grid item>
                          <IconButton variant='contained' color='info' size='small' href={biodata.websites.stackoverflow} target={'_blank'}>
                            <img src={stackoverflow} alt='stackoverflow' style={{ width: 25 }} />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card sx={{ background: '#424242', width: 235 }}>
                <CardHeader title='Skills' sx={{ color: '#FFFFFF' }} />
                <CardContent sx={{ marginTop: -3 }}>
                  <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={2}>
                    <Grid item>
                      <Grid container direction={'column'} justifyContent="flex-start" alignItems="flex-start">
                        {
                          biodata.skills.main.map((skill) => (
                            <Grid item>
                              <Typography variant='caption' align='center' color={'#FFFFFF'}>{skill}</Typography>
                            </Grid>
                          ))
                        }
                      </Grid>
                    </Grid>
                    <Divider orientation='vertical' flexItem sx={{ background: '#252525', marginLeft: 2, marginTop: 2 }} />
                    <Grid item>
                      <Grid container direction={'column'} justifyContent="flex-start" alignItems="flex-start">
                        {
                          biodata.skills.secondary.map((skill) => (
                            <Grid item>
                              <Typography variant='caption' align='center' color={'#FFFFFF'}>{skill}</Typography>
                            </Grid>
                          ))
                        }
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
            <Grid item>
              <AboutMe />
            </Grid>
            <Grid item>
              <Education education={biodata.education} />
            </Grid>
            <Grid item>
              <Experience expericences={biodata.expericence} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
