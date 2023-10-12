import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToWaitingList } from '../../actions/actions';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


import InvestmentCard from './InvestmentCard';  // Adjust the import path based on your project structure
import EnterEmailAddModal from '../ModalComps/EnterEmailAddModal';

const initialInvestmentsData = [
  {
    id: 1,
    name: 'Real Estate Investment Trusts',
    class: 'Cash Flow',
    image: '/images/real_estate_image.jpg',
  },
  {
    id: 2,
    name: 'Tech Stocks Portfolio',
    class: 'Appreciation',
    image: '/images/tech_stocks_image.jpg',
  },
  {
    id: 3,
    name: 'Diversified Mutual Fund',
    class: 'Balanced Growth',
    image: '/images/mutual_fund_image.jpg',
  },
  {
    id: 4,
    name: 'High-Yield Savings Account',
    class: 'Cash Flow',
    image: '/images/savings_account_image.jpg',
  },
  {
    id: 5,
    name: 'Innovative Tech Startups',
    class: 'Appreciation',
    image: '/images/tech_startups_image.jpg',
  },
  {
    id: 6,
    name: 'Global ETF Portfolio',
    class: 'Balanced Growth',
    image: '/images/global_etf_image.jpg',
  },
  {
    id: 7,
    name: 'Dividend Stocks Selection',
    class: 'Cash Flow',
    image: '/images/dividend_stocks_image.jpg',
  },
  {
    id: 8,
    name: 'Biotech and Healthcare Stocks',
    class: 'Appreciation',
    image: '/images/biotech_stocks_image.jpg',
  },
  {
    id: 9,
    name: 'Sustainable Energy Investments',
    class: 'Balanced Growth',
    image: '/images/sustainable_energy_image.jpg',
  },
  {
    id: 10,
    name: 'Rental Property Investment',
    class: 'Cash Flow',
    image: '/images/rental_property_image.jpg',
  },
  {
    id: 11,
    name: 'Emerging Market Stocks',
    class: 'Appreciation',
    image: '/images/emerging_market_stocks_image.jpg',
  },
  {
    id: 12,
    name: 'Index Fund Portfolio',
    class: 'Balanced Growth',
    image: '/images/index_fund_image.jpg',
  },
  {
    id: 13,
    name: 'Dividend Reinvestment Plans',
    class: 'Cash Flow',
    image: '/images/dividend_reinvestment_image.jpg',
  },
  {
    id: 14,
    name: 'Cryptocurrency Investments',
    class: 'Appreciation',
    image: '/images/crypto_investments_image.jpeg',
  },
  {
    id: 15,
    name: 'Education Savings Accounts',
    class: 'Balanced Growth',
    image: '/images/education_savings_image.jpg',
  }
];


const InvestmentList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectionData = useSelector((state) => state.selection);

  const [investments, setInvestments] = useState(initialInvestmentsData);
  const [selectedInvestmentIds, setSelectedInvestmentIds] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [email, setEmail] = useState('')

  useEffect(()=> {
    setInvestments(investments.filter((row) => row.class === selectionData.goal))
  }, [])


  const handleSelectInvestment = (id) => {
    if(selectedInvestmentIds.includes(id)) {
      setSelectedInvestmentIds(selectedInvestmentIds.filter((val) => val !== id))
    } else {
      setSelectedInvestmentIds([...selectedInvestmentIds, id])
    }
  }

  const handleCompleteTheProcess = () => {
    if(selectedInvestmentIds.length === 0) {
      toast.warning("You should select at least 1 investment opportunities");
      return;
    }

    dispatch(
      addToWaitingList(email, selectionData, investments.filter(row => selectedInvestmentIds.includes(row.id)) 
    ));
    navigate('/process-completed')
  }

  return (
    <div className="investment-list">
      <div className='d-flex justify-content-between mb-5'>
        <h2>Investments Opportunities Lists - ({selectionData.goal})</h2>
        <div className='d-flex align-items-center'>
          <button className='btn btn-success' onClick={() => setOpenModal(true)}>Click to Complete</button>
        </div>
      </div>
      <div className='row'>
        {investments.map((investment, index) => (
          <div className='col-md-4 mb-4' key={index}>
              <InvestmentCard
                id={investment.id} 
                name={investment.name}  
                image={investment.image} 
                selectedIds={selectedInvestmentIds} 
                handleSelect={handleSelectInvestment}
              />
          </div>
        ))}
      </div>
      <EnterEmailAddModal 
          open={openModal}
          setOpen={setOpenModal}
          onSubmit={handleCompleteTheProcess}
          setEmail={setEmail}
          
      />
    </div>
  );
};

export default InvestmentList;
