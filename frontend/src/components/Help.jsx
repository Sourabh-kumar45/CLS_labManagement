import React, { useState } from "react";

const Help = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I issue items from the lab?",
      answer: "Visit the item issue form, add items, submit the form and collect the items from the lab."
    },
    {
      question: "How can I reset my password?",
      answer: "To reset your password, go to the login page and click on 'Forgot Password'. Follow the instructions sent to your email."
    },
    {
      question: "How to add achievements?",
      answer: "Visit the 'Achievements page' > click add achievements > submit."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <br /><br /><br /><br />
      <h1 className="text-4xl font-bold text-center mb-6">Help Center</h1>
      <p className="text-center text-gray-600 mb-10">Find answers to common questions or reach out to us for assistance.</p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <div
              className="flex justify-between items-center p-4 bg-gray-100 rounded-md shadow-md cursor-pointer"
              onClick={() => toggleQuestion(index)}
            >
              <span className="font-medium">{faq.question}</span>
              <span className="text-xl">{activeQuestion === index ? "-" : "+"}</span>
            </div>
            {activeQuestion === index && <p className="mt-2 px-4 text-gray-700">{faq.answer}</p>}
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form className="space-y-6">
          <div>
            <label className="block font-medium mb-2" htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-2" htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-2" htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default Help;

