import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import IncomeRangeScreen from '../components/WizzardComps/IncomeRangeScreen';
import InvestmentGoalScreen from '../components/WizzardComps/InvestmentGoalScreen';
import ExperienceLevelScreen from '../components/WizzardComps/ExperienceLevelScreen';

const steps = ['Select Your Income Range', 'Select Your Primary Investment Goal', 'Select Your Experience Level'];

export default function HorizontalLinearStepper() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  // Access the selection state from the Redux store
  const selectionState = useSelector((state) => state.selection);
  const { income, goal, experience } = selectionState;

  const isStepOptional = (step) => {
    return step === null;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    
    if(activeStep + 1 === 1) {
      if(income === '') {
        toast.warning('You should select income range.')
        return;
      }
    } else if (activeStep + 1 === 2) {
      if(goal === '') {
        toast.warning('You should select primary investment goal.')
        return;
      }
    } else if (activeStep + 1 === 3) {
      if(experience === '') {
        toast.warning('You should select experience level.')
        return;
      }

      navigate('/investment-opportunities')
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const activeStepElement = (step) => {
    switch (step) {
      case 1:
        return <IncomeRangeScreen {...{income}} />
      case 2:
        return <InvestmentGoalScreen {...{goal}} />
      case 3: 
        return <ExperienceLevelScreen {...{experience}} />
        break;
    
      default:
        break;
    }
  }

  return (
    <div className='container mt-5 pt-5'>
      <Box sx={{ width: '100%' }} >
          <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                if (isStepOptional(index)) {
                    labelProps.optional = (
                    <Typography variant="caption">Optional</Typography>
                    );
                }
                if (isStepSkipped(index)) {
                    stepProps.completed = false;
                }
                return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                );
              })}
          </Stepper>
          {activeStep === steps.length ? (
              <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Box sx={{ flex: '1 1 auto' }} />
                  <Button onClick={handleReset}>Reset</Button>
              </Box>
              </React.Fragment>
          ) : (
              <React.Fragment>
              {activeStepElement(activeStep + 1)}
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Button
                  variant="contained"
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                  >
                  Back
                  </Button>
                  <Box sx={{ flex: '1 1 auto' }} />
                  {isStepOptional(activeStep) && (
                  <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                      Skip
                  </Button>
                  )}
                  <Button variant="contained" onClick={handleNext} className='h5'>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
              </Box>
              </React.Fragment>
          )}
      </Box>
    </div>
  );
}
