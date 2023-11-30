/* eslint-disable react/prop-types */
import { Typography, Modal } from '@mui/material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const SubmissionModal = ({ showModal, setShowModal }) => {
  return (
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
        <Typography>Submitted</Typography>
      </div>
    </Modal>
  );
};

export default SubmissionModal;
