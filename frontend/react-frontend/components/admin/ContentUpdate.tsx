"use client"
import React, { useState, useEffect, MouseEventHandler } from 'react';
import { useDataLayerValue } from '../../context/DataContext';
import Link from 'next/link';

import { deleteAboutData, deleteClientData, fetchAboutData, fetchClientData, fetchContactData, fetchCustomerData, fetchFooterData, fetchNewsletterData, fetchServiceData, fetchSliderData, fetchTeamData, fetchWorkData } from '../../api/api';

const AdminPanel = () => {
  const { state, dispatch } = useDataLayerValue();

  useEffect(() => {
    const fetchData = async () => {
      fetchAboutData(dispatch)
      fetchClientData(dispatch)
      fetchContactData(dispatch)
      fetchNewsletterData(dispatch)
      fetchServiceData(dispatch)
      fetchSliderData(dispatch)
      fetchFooterData(dispatch)
      fetchTeamData(dispatch)
      fetchWorkData(dispatch)



    };
    fetchData();
  }, []);
  const handleDeleteAbout = (aboutID: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevent default button behavior if needed
    deleteAboutData(aboutID)
      .then(() => {
        // Data successfully deleted
        console.log("About data deleted");
      })
      .catch(error => {
        // Handle errors
        console.error("Error deleting about data:", error);
      });
  };


  const handleDeleteClient = (clientID: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevent default button behavior if needed
    deleteClientData(clientID)
      .then(() => {
        // Data successfully deleted
        console.log("About data deleted");
      })
      .catch(error => {
        // Handle errors
        console.error("Error deleting about data:", error);
      });
  };

}
const handleDeleteContact = () => {

}
const handleDeleteNewletter = () => {

}
const handleDeleteService = () => {

}
const handleDeleteSlider = () => {

}
const handleDeleteFooter = () => {

}
const handleDeleteTeam = () => {

}
const handleDeleteWork = () => {

}




// Repeat the above add, update, and delete functions for the other interfaces

return (
  <div>
    <h1>Admin Panel</h1>


    <h2> Edit About</h2>
    <Link href={"/admin/contentUpdate/ContentUpdateAbout/ContentUpdateAboutAdd"}> <button>
      Add About
    </button></Link>

    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Descirption</th>
          <th>Read</th>
          <th>İmage</th>
        </tr>
      </thead>
      <tbody>
        {state.aboutArray.map((about, index) => (
          <tr key={index}>
            <td>{about.title}</td>
            <td>{about.description}</td>
            <td>{about.read}</td>
            <td>{about.image}</td>

            <td>
              <Link href={"/admin/contentUpdate/ContentUpdateAbout/ContentUpdateAboutUpdate"}> <button >Update</button></Link>
              <button onClick={handleDeleteAbout(about._id)}>Delete</button>



            </td>
          </tr>
        ))}
      </tbody>
    </table>

    <h2>Client</h2>
    <Link href={"admin/contentUpdate/contentUpdateClient/contentUpdateCLientAdd"}><button className=''>
      Add Client
    </button></Link>

    <table>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Description</th>
          <th>İmage</th>
        </tr>
      </thead>
      <tbody>
        {state.clientArray.map((client, index) => (
          <tr key={index}>
            <td>{client.name}</td>
            <td>{client.description}</td>
            <td>{client.image}</td>
            <td>
              <Link href={"admin/contentUpdate/contentUpdateClient/contentUpdateClientUpdate"}><button >Update</button></Link>

              <button onClick={handleDeleteClient(client._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    <h2>Contact</h2>
    <Link href={"admin/contentUpdate/contentUpdateContact/contentUpdateContactAdd"}><button className=''>
      Add Contact
    </button></Link>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Subject</th>
          <th>Message</th>
          <th>Date of Register</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {state.contactArray.map((contact) => (
          <tr key={contact._id}>
            <td>{customer.telephone}</td>
            <td>{customer.email}</td>
            <td>
              <Link href={"admin/contentUpdate/contentUpdateContact/contentUpdateContactUpdate"}><button onClick={() => updateCustomer(customer)}>Update</button></Link>
              
              <button onClick={() => deleteCustomer(customer.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <h2>Customers</h2>
    <button onClick={() => addCustomer({ name: '', email: '', subject: '', message: '', dateOfRegister: new Date() })}>
      Add Customer
    </button>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Subject</th>
          <th>Message</th>
          <th>Date of Register</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <tr key={customer.id}>
            <td>{customer.name}</td>
            <td>{customer.email}</td>
            <td>{customer.subject}</td>
            <td>{customer.message}</td>
            <td>{customer.dateOfRegister.toLocaleDateString()}</td>
            <td>
              <button onClick={() => updateCustomer(customer)}>Update</button>
              <button onClick={() => deleteCustomer(customer.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <h2>Customers</h2>
    <button onClick={() => addCustomer({ name: '', email: '', subject: '', message: '', dateOfRegister: new Date() })}>
      Add Customer
    </button>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Subject</th>
          <th>Message</th>
          <th>Date of Register</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <tr key={customer.id}>
            <td>{customer.name}</td>
            <td>{customer.email}</td>
            <td>{customer.subject}</td>
            <td>{customer.message}</td>
            <td>{customer.dateOfRegister.toLocaleDateString()}</td>
            <td>
              <button onClick={() => updateCustomer(customer)}>Update</button>
              <button onClick={() => deleteCustomer(customer.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <h2>Customers</h2>
    <button onClick={() => addCustomer({ name: '', email: '', subject: '', message: '', dateOfRegister: new Date() })}>
      Add Customer
    </button>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Subject</th>
          <th>Message</th>
          <th>Date of Register</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <tr key={customer.id}>
            <td>{customer.name}</td>
            <td>{customer.email}</td>
            <td>{customer.subject}</td>
            <td>{customer.message}</td>
            <td>{customer.dateOfRegister.toLocaleDateString()}</td>
            <td>
              <button onClick={() => updateCustomer(customer)}>Update</button>
              <button onClick={() => deleteCustomer(customer.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <h2>Customers</h2>
    <button onClick={() => addCustomer({ name: '', email: '', subject: '', message: '', dateOfRegister: new Date() })}>
      Add Customer
    </button>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Subject</th>
          <th>Message</th>
          <th>Date of Register</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <tr key={customer.id}>
            <td>{customer.name}</td>
            <td>{customer.email}</td>
            <td>{customer.subject}</td>
            <td>{customer.message}</td>
            <td>{customer.dateOfRegister.toLocaleDateString()}</td>
            <td>
              <button onClick={() => updateCustomer(customer)}>Update</button>
              <button onClick={() => deleteCustomer(customer.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <h2>Customers</h2>
    <button onClick={() => addCustomer({ name: '', email: '', subject: '', message: '', dateOfRegister: new Date() })}>
      Add Customer
    </button>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Subject</th>
          <th>Message</th>
          <th>Date of Register</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <tr key={customer.id}>
            <td>{customer.name}</td>
            <td>{customer.email}</td>
            <td>{customer.subject}</td>
            <td>{customer.message}</td>
            <td>{customer.dateOfRegister.toLocaleDateString()}</td>
            <td>
              <button onClick={() => updateCustomer(customer)}>Update</button>
              <button onClick={() => deleteCustomer(customer.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    {/* Repeat the above table and button code for the other interfaces */}
  </div>
);
};

export default AdminPanel;