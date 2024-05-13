import React from "react";

export interface Customer {
  name: string;
  email: string;
  subject: string;
  message: string;
  dateOfRegister: Date;
}

const Contact: React.FC = () => {
  return (
    <section className="px-8 py-12 size-min:bg-custom-blue sm:bg-custom-blue md:bg-transparent xl:bg-transparent">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center justify-center mb-6">
          <h2 className="font-bold text-3xl mr-2">Contact Us</h2>
          <div className="bg-custom-yellow w-5 h-5 rounded-full"></div>
        </div>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="block w-full h-11 p-2 pl-3 rounded-full"
          />
          <input
            type="email"
            placeholder="Email"
            className="block w-full h-11 p-2 pl-3 rounded-full"
          />
          <input
            type="text"
            placeholder="Subject"
            className="block w-full h-11 p-2 pl-3 rounded-full"
          />
          <textarea
            placeholder="Message"
            className="block w-full h-32 p-2 pl-3 rounded-lg resize-none"
          ></textarea>
          <button
            type="submit"
            className="w-full max-w-24 p-2 text-white rounded-full bg-custom-yellow uppercase"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
