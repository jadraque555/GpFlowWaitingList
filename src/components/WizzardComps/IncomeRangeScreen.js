import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { setSelectedIncome } from '../../actions/actions';
import { useDispatch } from 'react-redux';


const incomeRanges = ['$100k', '$150k', '$250k', '$500k+'];

const IncomeRangeScreen = (props) => {
  const { income } = props
  const dispatch = useDispatch();

  const handleIncomeChange = (event) => {
    dispatch(setSelectedIncome(event.target.value));
  };

  return (
    <div className='d-flex justify-content-center mt-5'>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          {incomeRanges.map((range, idx) => (
            <FormControlLabel className='display-1' key={idx} value={range} control={<Radio checked={income === range} onChange={(e) => handleIncomeChange(e)} />} label={<span className='h4 me-3'>{range}</span>} />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default IncomeRangeScreen;
