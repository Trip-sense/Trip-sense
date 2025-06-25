import React, { useState, useEffect } from 'react';
import { DollarSign, ArrowRightLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export function CurrencyConverter() {
  const [amount, setAmount] = useState('100');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [convertedAmount, setConvertedAmount] = useState('8300');
  const [isVisible, setIsVisible] = useState(false);

  const currencies = [
    { code: 'USD', name: 'US Dollar', rate: 1 },
    { code: 'INR', name: 'Indian Rupee', rate: 83 },
    { code: 'AED', name: 'UAE Dirham', rate: 3.67 },
    { code: 'EUR', name: 'Euro', rate: 0.85 },
    { code: 'GBP', name: 'British Pound', rate: 0.73 },
    { code: 'JPY', name: 'Japanese Yen', rate: 110 },
  ];

  const convertCurrency = () => {
    const fromRate = currencies.find(c => c.code === fromCurrency)?.rate || 1;
    const toRate = currencies.find(c => c.code === toCurrency)?.rate || 1;
    const result = (parseFloat(amount) * toRate / fromRate).toFixed(2);
    setConvertedAmount(result);
  };

  useEffect(() => {
    convertCurrency();
  }, [amount, fromCurrency, toCurrency]);

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6"
    >
      <div className="flex items-center mb-4">
        <DollarSign className="h-6 w-6 text-blue-600 mr-2" />
        <h3 className="text-lg font-semibold text-gray-900">Currency Converter</h3>
      </div>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {currencies.map(currency => (
                <option key={currency.code} value={currency.code}>
                  {currency.code} - {currency.name}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
            <div className="flex">
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {currencies.map(currency => (
                  <option key={currency.code} value={currency.code}>
                    {currency.code} - {currency.name}
                  </option>
                ))}
              </select>
              <button
                onClick={swapCurrencies}
                className="px-3 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors"
              >
                <ArrowRightLeft className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg">
          <p className="text-2xl font-bold text-gray-900">
            {convertedAmount} {toCurrency}
          </p>
          <p className="text-sm text-gray-600">
            {amount} {fromCurrency} equals {convertedAmount} {toCurrency}
          </p>
        </div>
      </div>
    </motion.div>
  );
}