import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { setSelectedGoal } from '../../actions/actions';
import { useDispatch } from 'react-redux';

const investmentGoals = ['Cash Flow', 'Appreciation', 'Balanced Growth'];

const InvestmentGoalScreen = (props) => {
  const { goal } = props
  const dispatch = useDispatch();

  const handleGoalChange = (event) => {
    dispatch(setSelectedGoal(event.target.value));
  };

  return (
    <div className='d-flex justify-content-center mt-5'>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          {investmentGoals.map((value, idx) => (
            <FormControlLabel className='display-1' key={idx} value={value} control={<Radio checked={goal === value} onChange={(e) => handleGoalChange(e)} />} label={<span className='h4 me-3'>{value}</span>} />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default InvestmentGoalScreen;
