import { Typography, TextField, TextareaAutosize, Grid } from '@mui/material';

const TextAdForm = () => {
  return (
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
  );
};

export default TextAdForm;
