import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Menu() {
  const [activeTab, setActiveTab] = useState('info')

  return (
    <div className="bg-white p-1 rounded-full shadow-md w-64">
      <div className="relative flex">
        <motion.div
          className="absolute inset-0 bg-teal-500 rounded-full"
          initial={false}
          animate={{
            x: activeTab === 'info' ? 0 : '100%',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
        <button
          className={`relative flex-1 py-2 text-sm font-medium transition-colors duration-200 ${
            activeTab === 'info' ? 'text-white' : 'text-gray-700'
          }`}
          onClick={() => setActiveTab('info')}
        >
          Info
        </button>
        <button
          className={`relative flex-1 py-2 text-sm font-medium transition-colors duration-200 ${
            activeTab === 'booking' ? 'text-white' : 'text-gray-700'
          }`}
          onClick={() => setActiveTab('booking')}
        >
          Booking
        </button>
      </div>
    </div>
  )
}