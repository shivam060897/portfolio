import React from 'react';
import { Education, Experience } from './components'
import { Avatar, Grid, IconButton, Card, CardHeader, CardContent, Divider, Typography, TableContainer, Table, TableBody, TableRow, TableCell } from '@mui/material';
import biodata from './data/biodata';
import me from './data/me.jpg'
import stackoverflow from './data/stackoverflow512.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const App = () => {
  return (
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell sx={{ padding: 0, margin: 0, border: "2px solid #000000" }}>
              <Card sx={{ background: '#424242' }}>
                <CardContent>
                  <Grid key="main" container direction={'column'} justifyContent="center" alignItems="center">
                    <Grid key="main1" item><Avatar alt={biodata.name} src={me} sx={{ width: 150, height: 150 }} /></Grid>
                    <Grid key="main2" item><Typography variant='h6' align='center' color={'#FFFFFF'}>{biodata.name}</Typography></Grid>
                    <Grid key="main3" item><Typography variant='caption' align='center' color={'#FFFFFF'}>{biodata.dob.long}</Typography></Grid>
                    <Grid key="main4" item><Typography variant='caption' align='center' color={'#FFFFFF'}>{biodata.contact.mail}</Typography></Grid>
                    {
                      biodata.contact.phone.primary !== null ? (
                        <Grid key="main5" item>
                          <Grid key="main51" container direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
                            <Grid key="main511" item><CallIcon sx={{ width: "15px", color: '#FFFFFF' }} /></Grid>
                            <Grid key="main512" item><Typography variant='caption' align='center' color={'#FFFFFF'}>{biodata.contact.primary.secondary}</Typography></Grid>
                          </Grid>
                        </Grid>
                      ) : null
                    }
                    {
                      biodata.contact.phone.secondary !== null ? (
                        <Grid key="main6" item>
                          <Grid key="main61" container direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
                            <Grid key="main611" item><WhatsAppIcon sx={{ width: "15px", color: '#FFFFFF' }} /></Grid>
                            <Grid key="main612" item><Typography variant='caption' align='center' color={'#FFFFFF'}>{biodata.contact.phone.secondary}</Typography></Grid>
                          </Grid>
                        </Grid>
                      ) : null
                    }
                    <Grid key="main7" item><Typography variant='caption' align='left' color={'#FFFFFF'}>{biodata.address.post}, {biodata.address.district}, {biodata.address.state} - {biodata.address.pincode}</Typography></Grid>
                    <Grid key="main8" item>
                      <Grid key="main81" container direction="row" justifyContent="center" alignItems="center" spacing={1}>
                        <Grid key="main811" item><IconButton variant='contained' color='info' size='small' href={biodata.websites.linkedin} target={'_blank'}><LinkedInIcon /></IconButton></Grid>
                        <Grid key="main812" item><IconButton variant='contained' color='info' size='small' href={biodata.websites.facebook} target={'_blank'}><FacebookIcon /></IconButton></Grid>
                        <Grid key="main813" item><IconButton variant='contained' color='info' size='small' href={biodata.websites.twitter} target={'_blank'}><TwitterIcon /></IconButton></Grid>
                        <Grid key="main814" item><IconButton variant='contained' color='info' size='small' href={biodata.websites.instagram} target={'_blank'}><InstagramIcon /></IconButton></Grid>
                        <Grid key="main815" item><IconButton variant='contained' color='info' size='small' href={biodata.websites.stackoverflow} target={'_blank'}><img src={stackoverflow} alt='stackoverflow' style={{ width: 25 }} /></IconButton></Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </TableCell>
            <TableCell sx={{ padding: 0, margin: 0, border: "2px solid #000000" }} rowSpan={2}><Education education={biodata.education} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ padding: 0, margin: 0, border: "2px solid #000000" }} className='autosize'>
              <Card sx={{ background: '#424242' }}>
                <CardHeader title='Skills' sx={{ color: '#FFFFFF' }} />
                <CardContent sx={{ marginTop: -3 }}>
                  <Grid key="a" container direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
                    <Grid key="b" item><Grid key="c" container direction={'column'} justifyContent="center" alignItems="flex-start">{biodata.skills.main.map((skill, index) => <Grid key={"d" + String(index)} item><Typography variant='caption' align='center' color={'#FFFFFF'}>{skill}</Typography></Grid>)}</Grid></Grid>
                    <Divider orientation='vertical' flexItem sx={{ background: '#252525', marginLeft: 1, marginRight: -1, marginTop: 2 }} />
                    <Grid key="e" item><Grid key="f" container direction={'column'} justifyContent="center" alignItems="flex-start">{biodata.skills.secondary.map((skill, index) => <Grid key={"g" + String(index)} item><Typography variant='caption' align='center' color={'#FFFFFF'}>{skill}</Typography></Grid>)}</Grid></Grid>
                  </Grid>
                </CardContent>
              </Card>
            </TableCell>
          </TableRow>
          <TableRow><TableCell sx={{ padding: 0, margin: 0, border: "2px solid #000000" }} colSpan={2}><Experience expericences={biodata.expericence} /></TableCell></TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default App;
