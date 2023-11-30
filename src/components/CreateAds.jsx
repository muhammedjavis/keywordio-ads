import { useState } from 'react';
import {
  Checkbox,
  Box,
  Typography,
  FormControlLabel,
  Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CreateAds = () => {
  const [selectedAdType, setSelectedAdType] = useState('');
  const navigate = useNavigate();

  const handleAdTypeSelect = (adType) => {
    setSelectedAdType(adType);
    navigate(`${adType}-ad`);
  };

  return (
    <Paper
      elevation={3}
      style={{ padding: '20px', margin: '20px', width: '100%' }}
    >
      <div
        style={{
          margin: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant='h4' style={{ marginBottom: '20px' }}>
          Create Ads
        </Typography>

        <div
          style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
        >
          <Box
            sx={{
              width: 'calc(50% - 10px)',
              maxWidth: '300px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '1px solid #ccc',
              padding: '20px',
              position: 'relative',
              margin: '0 10px',
              cursor: 'pointer',
            }}
            onClick={() => handleAdTypeSelect('text')}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedAdType === 'text'}
                  onChange={() => handleAdTypeSelect('text')}
                  style={{ position: 'absolute', top: '5px', left: '5px' }}
                />
              }
              label=''
            />
            <Box
              sx={{
                width: '100%',
                height: '250px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 'auto',
              }}
            >
              <img
                src={
                  'https://www.businessofapps.com/wp-content/uploads/2020/08/dominos-sms1.png'
                }
                alt='Media Ad'
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            </Box>
            <Box
              sx={{
                width: '100%',
                height: '150px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f2f2f2',
              }}
            >
              <Typography variant='subtitle1' align='center'>
                Create Text Ad
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              width: 'calc(50% - 10px)',
              maxWidth: '300px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '1px solid #ccc',
              padding: '20px',
              position: 'relative',
              margin: '0 10px',
              cursor: 'pointer',
            }}
            onClick={() => handleAdTypeSelect('media')}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedAdType === 'media'}
                  onChange={() => handleAdTypeSelect('media')}
                  style={{ position: 'absolute', top: '5px', left: '5px' }}
                />
              }
              label=''
            />
            <Box
              sx={{
                width: '100%',
                height: '250px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 'auto',
              }}
            >
              <img
                src={
                  'https://strikesocial.com/wp-content/uploads/2018/08/Best-Social-Media-Ad-Platform-fs8.png'
                }
                alt='Media Ad'
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            </Box>
            <Box
              sx={{
                width: '100%',
                height: '150px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f2f2f2',
              }}
            >
              <Typography variant='subtitle1' align='center'>
                Create Media Ad
              </Typography>
            </Box>
          </Box>
        </div>
      </div>
    </Paper>
  );
};

export default CreateAds;
