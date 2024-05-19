"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useDataLayerValue } from "../context/DataContext";
import { postCustomerData } from "../api/api";
import { State, Action } from "../context/reducer";

export interface Customer {
  name: string;
  email: string;
  subject: string;
  message: string;
  dateOfRegister: Date;
}
interface postCustomerData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handleContactForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;
    const nameField = document.getElementById("name") as HTMLInputElement;
    const emailField = document.getElementById("email") as HTMLInputElement;
    const subjectField = document.getElementById("subject") as HTMLInputElement;
    const messageField = document.getElementById("message") as HTMLInputElement;
    setName(name);
    setEmail(email);
    setSubject(subject);
    setMessage(message);
    const customer: postCustomerData = {
      name,
      email,
      subject,
      message,
    };
    postCustomerData(customer)
      .then((response) => {
        console.log(`Customer data posted successfully: ${response.data}`);
        name && setName("");
        email && setEmail("");
        subject && setSubject("");
        message && setMessage("");
        nameField.value = "";
        emailField.value = "";
        subjectField.value = "";
        messageField.value = "";

        // handle successful response here
      })
      .catch((error) => {
        console.error(`Error posting customer data: ${error}`);
        // handle error here
      }); // handle form submission here
  };
  return (
    <section
      id="contact-section"
      className="px-8 py-12 size-min:bg-custom-blue sm:bg-custom-blue md:bg-transparent xl:bg-transparent"
    >
      <div className="max-w-lg mx-auto">
        <div className="flex items-center justify-center mb-6">
          <h2 className="font-bold text-3xl mr-2">Contact Us</h2>
          <div className="bg-custom-yellow w-5 h-5 rounded-full"></div>
        </div>
        <form className="space-y-4 text-black" onSubmit={handleContactForm}>
          <input
            type="text"
            placeholder="Name"
            className="block w-full h-11 p-2 pl-3  m-2 rounded-full"
            id="name"
          />
          <input
            type="email"
            placeholder="Email"
            className="block w-full h-11 p-2 pl-3 m-2 rounded-full"
            id="email"
          />

          <input
            type="text"
            placeholder="Subject"
            className="block w-full h-11 p-2 pl-3 m-2 rounded-full"
            id="subject"
          />
          <input
            placeholder="Message"
            className="block w-full h-11 rounded-full p-2 pl-3 m-2  resize-none"
            id="message"
          ></input>
          <button
            type="submit"
            className="w-full max-w-24 p-2 text-white items-center justify-center rounded-full m-2 bg-custom-yellow uppercase"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
