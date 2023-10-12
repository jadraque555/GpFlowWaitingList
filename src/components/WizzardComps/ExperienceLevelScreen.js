import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { setSelectedExperience } from '../../actions/actions';
import { useDispatch } from 'react-redux';

const experienceLevels = ['Beginner', 'Intermediate', 'Expert'];

const ExperienceLevelScreen = (props) => {
  const { experience } = props
  const dispatch = useDispatch();

  const handleLevelChange = (event) => {
    dispatch(setSelectedExperience(event.target.value));
  };


  return (
    <div className='d-flex justify-content-center mt-5'>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          {experienceLevels.map((level, idx) => (
            <FormControlLabel className='display-1' key={idx} value={level} control={<Radio checked={experience === level} onChange={(e) => handleLevelChange(e)} />} label={<span className='h4 me-3'>{level}</span>} />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default ExperienceLevelScreen;
