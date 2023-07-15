import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  { 
    id: 'e1', 
    title: 'New Cycle', 
    amount: 5000, 
    date: new Date(2021, 6, 16),
   },

   {
    id: 'e2',
    title: 'Water Bottle',
    amount: 450,
    date: new Date(2022, 7, 1),
  },

  {
    id: 'e3',
    title: 'Books',
    amount: 1216,
    date: new Date(2023, 6, 4),
  },
  
  {
    id: 'e4',
    title: 'Shillong Trip',
    amount: 3200,
    date: new Date(2023, 6, 29),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
