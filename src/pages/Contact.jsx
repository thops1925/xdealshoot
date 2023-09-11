import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Result = () => {
  return <p>Your message has been successfully sent.</p>;
};

export default function Contact() {
  const [isResultVisible, setResultVisibility] = useState(false);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_dgemj6w',
        'template_vujzvwu',
        formRef.current,
        'user_IRib8NAgxYSoeYxeTOShR'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setResultVisibility(true);
    setTimeout(() => {
      setResultVisibility(false);
    }, 5000);
  };

  return (
    <div className="flex justify-center items-center mx-4">
      <form className="w-full max-w-lg" ref={formRef} onSubmit={sendEmail}>
        <h1 className="md:text-5xl text-2xl mt-10 mb-3">Contact Us</h1>
        <p className="italic text-sm md:mb-10 mb-4">
          Let us know what you think to provide better service. Please don't hesitate to give us your feedback. Thank you.
        </p>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              First Name
            </label>
            <input
              name="name"
              type="text"
              className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Subject
            </label>
            <input
              name="subject"
              type="text"
              className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Message
            </label>
            <textarea
              name="message"
              type="textarea"
              className="w-full appearance-none block bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              rows="4"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div>
            <input
              value="Send"
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            />
            {isResultVisible ? <Result /> : null}
          </div>
        </div>
      </form>
    </div>
  );
}
