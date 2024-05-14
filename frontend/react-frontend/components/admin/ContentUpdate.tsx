import React, { useState, useEffect } from 'react';
import { useDataLayerValue } from '../../context/DataContext';
import Link from 'next/link';
import { deleteAboutData, deleteClientData, fetchAboutData, fetchClientData, fetchContactData, fetchCustomerData, fetchFooterData, fetchNewsletterData, fetchServiceData, fetchSliderData, fetchTeamData, fetchWorkData } from '../../api/api';

const AdminPanel = () => {
  const { state, dispatch } = useDataLayerValue();

  useEffect(() => {
    const fetchData = async () => {
      await fetchAboutData(dispatch);
      await fetchClientData(dispatch);
      await fetchContactData(dispatch);
      await fetchNewsletterData(dispatch);
      await fetchServiceData(dispatch);
      await fetchSliderData(dispatch);
      await fetchFooterData(dispatch);
      await fetchTeamData(dispatch);
      await fetchWorkData(dispatch);
    };
    fetchData();
  }, []);

  const handleDeleteAbout = (aboutID: string) => {
    deleteAboutData(aboutID)
      .then(() => {
        console.log("About data deleted");
      })
      .catch(error => {
        console.error("Error deleting about data:", error);
      });
  };

  const handleDeleteClient = (clientID: string) => {
    deleteClientData(clientID)
      .then(() => {
        console.log("Client data deleted");
      })
      .catch(error => {
        console.error("Error deleting client data:", error);
      });
  };

  return (
    <div>
      <h1>Admin Panel</h1>

      <h2>Edit About</h2>
      <Link href={"/admin/contentUpdate/ContentUpdateAbout/ContentUpdateAboutAdd"}>
        <button>Add About</button>
      </Link>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Read</th>
            <th>Image</th>
            <th>Actions</th>
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
                <Link href={`/admin/contentUpdate/ContentUpdateAbout/ContentUpdateAboutUpdate/${about._id}`}>
                  <button>Update</button>
                </Link>
                <button onClick={() => handleDeleteAbout(about._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Client</h2>
      <Link href={"/admin/contentUpdate/contentUpdateClient/contentUpdateCLientAdd"}>
        <button>Add Client</button>
      </Link>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.clientArray.map((client, index) => (
            <tr key={index}>
              <td>{client.name}</td>
              <td>{client.description}</td>
              <td>{client.image}</td>
              <td>
                <Link href={`/admin/contentUpdate/contentUpdateClient/contentUpdateClientUpdate/${client._id}`}>
                  <button>Update</button>
                </Link>
                <button onClick={() => handleDeleteClient(client._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      
      <h2>Newsletter</h2>
      <Link href={"/admin/contentUpdate/contentUpdateNewsletter/contentUpdateNewsletterAdd"}>
        <button>Add Newsletter</button>
      </Link>

      <table>
        <thead>
          <tr>
            <th>Date Of Register</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.newsLetterArray.map((newsletter, index) => (
            <tr key={index}>
              <td>{newsletter.dateOfRegister}</td>
              <td>{newsletter.email}</td>
              <td>
                <Link href={`/admin/contentUpdate/contentUpdateNewsletter/contentUpdateNewsletterUpdate/${newsletter._id}`}>
                  <button>Update</button>
                </Link>
                <button onClick={() => handleDeleteClient(newsletter._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Service</h2>
      <Link href={"/admin/contentUpdate/contentUpdateService/contentUpdateServiceAdd"}>
        <button>Add Service</button>
      </Link>

      <table>
        <thead>
          <tr>
            <th>Date Of Register</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.serviceArray.map((service, index) => (
            <tr key={index}>
              <td>{service.description}</td>
              <td>{service.image}</td>
              <td>{service.title}</td>
              <td>{service.service_description}</td>
              <td>{service.service_title}</td>
              <td>
                <Link href={`/admin/contentUpdate/contentUpdateService/contentUpdateServiceUpdate/${service._id}`}>
                  <button>Update</button>
                </Link>
                <button onClick={() => handleDeleteClient(service._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default AdminPanel;
