"use client"
import React, { useState, useEffect } from 'react';
import { useDataLayerValue } from '../../context/DataContext';
import Link from 'next/link';

import { fetchAboutData, fetchClientData, fetchContactData, fetchCustomerData, fetchFooterData, fetchNewsletterData, fetchServiceData, fetchSliderData, fetchTeamData, fetchWorkData } from '../../api/api';

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
  const handleDeleteAbout = () => {

  }
  const handleDeleteClient = () => {

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
      <Link href={"/admin/contentUpdate/ContentUpdateAbout/ContentUpdateAboutUpdate"}> <button>
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
                <Link href={"/admin/contentUpdate/ContentUpdateAbout/ContentUpdateAboutAdd"}> <button >Update</button></Link>
                <Link><button >Delete</button></Link>
               
                
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