import {
  Typography,
  TextField,
  Button,
  TextareaAutosize,
  Grid,
  Modal,
} from '@mui/material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

import { useContext, useEffect, useState } from 'react';
import { AdTypeContext } from '../../store/AdTypeContext';
import { NavLink, useNavigate } from 'react-router-dom';

const FillData = () => {
  const { selectedAdType } = useContext(AdTypeContext);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setShowModal(true);
  };

  useEffect(() => {
    let timeout;
    if (showModal) {
      timeout = setTimeout(() => {
        setShowModal(false);
        navigate('/create-ads');
      }, 600);
    }
    return () => clearTimeout(timeout);
  }, [showModal, navigate]);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div style={{ margin: '20px' }}>
          <Typography variant='h4' style={{ marginBottom: '20px' }}>
            Create Text & Media
          </Typography>

          {selectedAdType === 'text' && (
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography>Heading 01</Typography>
                <TextField
                  label='Add a heading that would make users interested.'
                  variant='outlined'
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <Typography>Description</Typography>
                <TextareaAutosize
                  rows={3}
                  placeholder='Add a primary text to help users understand more about your products,services or offers'
                  style={{ width: '100%', height: '100px' }}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography>Heading 02 </Typography>
                <TextField
                  label='Add a heading that would make users interested.'
                  variant='outlined'
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <Typography>Button Label</Typography>
                <TextField
                  label='Select a label that best suits your ad.'
                  variant='outlined'
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <Typography>Business Name </Typography>
                <TextField
                  label='Add your business name'
                  variant='outlined'
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <Typography>Website URL</Typography>
                <TextField
                  label='Add URL of the landing page you want to redirect users to'
                  variant='outlined'
                  fullWidth
                />
              </Grid>
            </Grid>
          )}
          {selectedAdType === 'media' && (
            <Grid container spacing={3} margin='20px'>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Typography>Heading 01</Typography>
                  <TextField
                    label='Add a heading that would make users interested.'
                    variant='outlined'
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography>Description</Typography>
                  <TextareaAutosize
                    rows={3}
                    placeholder='Add a primary text to help users understand more about your products,services or offers'
                    style={{ width: '100%', height: '100px' }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography>Heading 02 </Typography>
                  <TextField
                    label='Add a heading that would make users interested.'
                    variant='outlined'
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid container spacing={3} marginTop='20px'>
                <Grid item xs={4}>
                  <Typography>Landscape Marketing Image (1.9:1)</Typography>
                  <TextField
                    label='Add the URL you want to use for the ad'
                    variant='outlined'
                    fullWidth
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography>Portrait Marketing Image (4:5)</Typography>
                  <TextField
                    label='Add the URL you want to use for the ad'
                    variant='outlined'
                    fullWidth
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography>Square Marketing Image (1:1)</Typography>
                  <TextField
                    label='Add the URL you want to use for the ad'
                    variant='outlined'
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid container spacing={3} marginTop='20px'>
                <Grid item xs={12}>
                  <Typography>Video URL</Typography>
                  <TextField
                    label='Add URL of the video you want to add'
                    variant='outlined'
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography>Business Name </Typography>
                  <TextField
                    label='Add your business name'
                    variant='outlined'
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography>Button Label </Typography>
                  <TextField
                    label='Select a label that suits your ad'
                    variant='outlined'
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography>Website URL</Typography>
                  <TextField
                    label='Add URL of the website you want to redirect users to'
                    variant='outlined'
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Grid>
          )}
          {selectedAdType === '' && (
            <Typography>Please Go to Create Ads and select Ad Type.</Typography>
          )}

          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: '20px',
            }}
          >
            <NavLink to='/create-ads'>
              <Button style={{ marginRight: '10px' }}>Back</Button>
            </NavLink>
            <Button variant='contained' color='primary' type='submit'>
              Submit
            </Button>
          </div>
        </div>
      </form>

      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <div
          style={{
            position: 'fixed',
            top: '40%',
            left: '40%',
            width: '300px',
            height: '200px',
            backgroundColor: 'white',
            borderRadius: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <CheckCircleRoundedIcon color='primary' />
          <Typography>Ad Submitted</Typography>
        </div>
      </Modal>
    </>
  );
};

export default FillData;
