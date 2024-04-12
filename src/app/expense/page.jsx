"use client";
import React, { useState } from "react";

const ExpenseTrackerForm = () => {
  const [expense, setExpense] = useState({
    date: "",
    category: "",
    description: "",
    amount: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Expense submitted:", expense);
    setExpense({
      date: "",
      category: "",
      description: "",
      amount: 0,
    });
  };

  return (
    <form className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Expense Tracker
      </h2>
      <div className="mb-4">
        <label htmlFor="date" className="block text-gray-700 mb-1">
          Date:
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={expense.date}
          onChange={handleChange}
          className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block text-gray-700 mb-1">
          Category:
        </label>
        <input
          type="text"
          id="category"
          name="category"
          value={expense.category}
          onChange={handleChange}
          className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 mb-1">
          Description:
        </label>
        <input
          type="text"
          id="description"
          name="description"
          value={expense.description}
          onChange={handleChange}
          className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="block text-gray-700 mb-1">
          Amount:
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
          className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400"
        />
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default ExpenseTrackerForm;
