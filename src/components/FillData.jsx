import { Typography, Button } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { AdTypeContext } from '../../store/AdTypeContext';
import { NavLink, useNavigate } from 'react-router-dom';
import TextAdForm from './FillData/TextAdForm';
import MediaAdForm from './FillData/MediaAdForm';
import SubmissionModal from './FillData/SubmissionModal';

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

          {selectedAdType === 'text' && <TextAdForm />}
          {selectedAdType === 'media' && <MediaAdForm />}
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

      <SubmissionModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default FillData;
