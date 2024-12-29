import React, { useState } from 'react'

function Contact() {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { value, name } = e.target
    setContact({
      ...contact,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact)
  }

  return (
    <div className="flex items-center justify-center bg-gray-50 mb-5 mt-16 md:mt-28">
      <div className="w-[85%] md:w-[70%] mx-auto bg-[#F9B454] rounded-[48px] p-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 w-[90%] md:w-[50%] mx-auto">
          <div className='flex flex-col'>
            <label htmlFor="name" className='font-bold mb-1'>NAME</label>
            <input
              id='name'
              type="text"
              name="name"
              placeholder="Enter full name"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-full bg-orange-100/80 border-none focus:ring-2 focus:ring-pink-600 focus:outline-none"
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="email" className='font-bold mb-1'>EMAIL</label>
            <input
              id='email'
              type="email"
              name="email"
              placeholder="Enter email address"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-full bg-orange-100/80 border-none focus:ring-2 focus:ring-pink-600 focus:outline-none"
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="message" className='font-bold mb-1'>MESSAGE</label>
            <textarea
              id='message'
              name="message"
              placeholder="Write your message here"
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-2 rounded-3xl bg-orange-100/80 border-none focus:ring-2 focus:ring-pink-600 focus:outline-none resize-none"
            />
          </div>

          <div className='w-full flex justify-center'>
            <button type="submit" className="bg-pink-700 hover:bg-pink-800 text-white font-medium py-2 px-10 rounded-lg transition-colors duration-200 text-lg">
              Send the message
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
