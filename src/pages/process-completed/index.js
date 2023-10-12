import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

function ProcessCompleted() {
  const navigate = useNavigate();

  return (
    <div className='container mt-5 pt-5'>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="success">Process Completed. To view the waiting list you can click the button below.</Alert>
      </Stack>
      <div className='d-flex justify-content-center'>
        <button className='btn btn-primary text-white fw-bold mt-4 px-3 me-3' onClick={() => navigate('/')}>Add new Investments</button>
        <button className='btn btn-success text-white fw-bold mt-4 px-3' onClick={() => navigate('/waiting-lists')}>View waiting lists</button>
      </div>
    </div>
  )
}

export default ProcessCompleted
