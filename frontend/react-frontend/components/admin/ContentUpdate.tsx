"use client";
import React, { useState, useEffect } from "react";
import { useDataLayerValue } from "../../context/DataContext";
import AdminNavbar from "../admin/Header";
import Footer from "../admin/Footer";
import Link from "next/link";
import {
  deleteAboutData,
  deleteClientData,
  deleteContactData,
  deleteNewsletterData,
  deleteServiceData,
  deleteSliderData,
  deleteTeamData,
  deleteWorkData,
  fetchAboutDataAndDispatch,
  fetchClientDataAndDispatch,
  fetchContactDataAndDispatch,
  fetchNewsletterDataAndDispatch,
  fetchServiceDataAndDispatch,
  fetchSliderDataAndDispatch,
  fetchTeamDataAndDispatch,
  fetchWorkDataAndDispatch,
} from "../../api/api";

const AdminPanel: React.FC = () => {
  const [state, dispatch] = useDataLayerValue();

  useEffect(() => {
    const fetchData = async () => {
      fetchSliderDataAndDispatch(dispatch);
      fetchAboutDataAndDispatch(dispatch);
      fetchServiceDataAndDispatch(dispatch);
      fetchWorkDataAndDispatch(dispatch);
      fetchTeamDataAndDispatch(dispatch);
      fetchClientDataAndDispatch(dispatch);
      fetchContactDataAndDispatch(dispatch);
    };
    fetchData();
  }, [dispatch]);

  const handleDelete = (
    deleteFunction: (id: string) => Promise<void>,
    id: string
  ) => {
    deleteFunction(id)
      .then(() => {
        console.log("Data deleted");
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  return (
    <div className="bg-white container mx-auto text-black">
      <AdminNavbar />

      <h2 className="text-2xl font-semibold mb-2">Slider Section</h2>
      <table className="w-full table-auto mb-4 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border border-gray-300">Title</th>
            <th className="px-4 py-2 border border-gray-300">Description</th>
            <th className="px-4 py-2 border border-gray-300">Contact Link</th>
            <th className="px-4 py-2 border border-gray-300">Quote Link</th>
            <th className="px-4 py-2 border border-gray-300">Image</th>
            <th className="px-4 py-2 border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.sliderArray &&
            state.sliderArray.map((slider, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="px-4 py-2 border border-gray-300">
                  {slider.title}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {slider.description}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {slider.contact_link}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {slider.quote_link}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {slider.image}
                </td>
                <td className="px-4 py-2  flex m-2 border-gray-300">
                  <Link
                    href={`/admin/contentUpdate/contentUpdateSlider/contentUpdateSliderAdd`}
                  >
                    <button className=" bg-green-500 rounded-2xl text-white px-4 py-2 border border-gray-300">
                      Add{" "}
                    </button>
                  </Link>
                  <Link
                    href={`/admin/contentUpdate/contentUpdateSlider/contentUpdateSliderUpdate/[id]`}
                    as={`/admin/contentUpdate/contentUpdateSlider/contentUpdateSliderUpdate/${slider._id}`}
                  >
                    <button className="bg-blue-500 rounded-2xl text-white px-4 py-2 border border-gray-300">
                      Update
                    </button>
                  </Link>
                  <button
                    className="bg-red-500 rounded-2xl text-white px-4 py-2 border border-gray-300"
                    onClick={() => handleDelete(deleteSliderData, slider._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <h2 className="text-2xl font-semibold mb-2">About Section</h2>
      <table className="w-full table-auto mb-4 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border border-gray-300">Title</th>
            <th className="px-4 py-2 border border-gray-300">Description</th>
            <th className="px-4 py-2 border border-gray-300">Read</th>
            <th className="px-4 py-2 border border-gray-300"> Image</th>
            <th className="px-4 py-2 border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.aboutArray &&
            state.aboutArray.map((about, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="px-4 py-2 border border-gray-300">
                  {about.title}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {about.description}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {about.read}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {about.image}
                </td>
                <td className="px-4 py-2  flex m-2 border-gray-300">
                  <Link
                    href={`/admin/contentUpdate/contentUpdateAbout/contentUpdateAboutAdd`}
                  >
                    <button className=" bg-green-500 rounded-2xl text-white px-4 py-2 border border-gray-300">
                      Add{" "}
                    </button>
                  </Link>
                  <Link
                    href={`/admin/contentUpdate/contentUpdateAbout/contentUpdateAboutUpdate/[id]`}
                    as={`/admin/contentUpdate/contentUpdateAbout/contentUpdateAboutUpdate/${about._id}`}
                  >
                    <button className="bg-blue-500 rounded-2xl text-white px-4 py-2 border border-gray-300">
                      Update
                    </button>
                  </Link>
                  <button
                    className="bg-red-500 rounded-2xl text-white px-4 py-2 border border-gray-300"
                    onClick={() => handleDelete(deleteAboutData, about._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <h2 className="text-2xl font-semibold mb-2">Services Section</h2>
      <table className="w-full table-auto mb-4 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border border-gray-300">Title</th>
            <th className="px-4 py-2 border border-gray-300">Description</th>
            <th className="px-4 py-2 border border-gray-300">Service Title </th>
            <th className="px-4 py-2 border border-gray-300">
              Service Description
            </th>
            <th className="px-4 py-2 border border-gray-300">Read</th>
            <th className="px-4 py-2 border border-gray-300">Image</th>
            <th className="px-4 py-2 border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.serviceArray &&
            state.serviceArray.map((service, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="px-4 py-2 border border-gray-300">
                  {service.title}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {service.description}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {service.service_title}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {service.service_description}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {service.read}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {service.image}
                </td>
                <td className="px-4 py-2  flex m-2 border-gray-300">
                  <Link
                    href={`/admin/contentUpdate/contentUpdateService/contentUpdateServiceAdd`}
                  >
                    <button className=" bg-green-500 rounded-2xl text-white px-4 py-2 border border-gray-300">
                      Add{" "}
                    </button>
                  </Link>
                  <Link
                    href={`/admin/contentUpdate/contentUpdateService/contentUpdateServiceUpdate/[id]`}
                    as={`/admin/contentUpdate/contentUpdateService/contentUpdateServiceUpdate/${service._id}`}
                  >
                    <button className="bg-blue-500 rounded-2xl text-white px-4 py-2 border border-gray-300">
                      Update
                    </button>
                  </Link>
                  <button
                    className="bg-red-500 rounded-2xl text-white px-4 py-2 border border-gray-300"
                    onClick={() => handleDelete(deleteServiceData, service._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <h2 className="text-2xl font-semibold mb-2">Work Section</h2>
      <table className="w-full table-auto mb-4 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border border-gray-300">Title</th>
            <th className="px-4 py-2 border border-gray-300">Description</th>
            <th className="px-4 py-2 border border-gray-300">Service Title </th>
            <th className="px-4 py-2 border border-gray-300">
              Service Description
            </th>
            <th className="px-4 py-2 border border-gray-300">Read</th>
            <th className="px-4 py-2 border border-gray-300">Image</th>
            <th className="px-4 py-2 border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.workArray &&
            state.workArray.map((work, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="px-4 py-2 border border-gray-300">
                  {work.title}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {work.description}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {work.service_title}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {work.service_description}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {work.read}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {work.image}
                </td>
                <td className="px-4 py-2  flex m-2 border-gray-300">
                  <Link
                    href={`/admin/contentUpdate/contentUpdateSlider/contentUpdateWorkAdd`}
                  >
                    <button className=" bg-green-500 rounded-2xl text-white px-4 py-2 border border-gray-300">
                      Add{" "}
                    </button>
                  </Link>
                  <Link
                    href={`/admin/contentUpdate/contentUpdateWork/contentUpdateWorkUpdate/[id]`}
                    as={`/admin/contentUpdate/contentUpdateWork/contentUpdateWorkUpdate/${work._id}`}
                  >
                    <button className="bg-blue-500 rounded-2xl text-white px-4 py-2 border border-gray-300">
                      Update
                    </button>
                  </Link>
                  <button
                    className="bg-red-500 rounded-2xl text-white px-4 py-2 border border-gray-300"
                    onClick={() => handleDelete(deleteWorkData, work._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <h2 className="text-2xl font-semibold mb-2">Team Section</h2>
      <table className="w-full table-auto mb-4 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border border-gray-300">Name</th>
            <th className="px-4 py-2 border border-gray-300">Description</th>
            <th className="px-4 py-2 border border-gray-300">Image</th>
            <th className="px-4 py-2 border border-gray-300"> Facebook Link</th>
            <th className="px-4 py-2 border border-gray-300">Twitter Link</th>
            <th className="px-4 py-2 border border-gray-300">Linkedin Link</th>
            <th className="px-4 py-2 border border-gray-300">Instagram Link</th>
            <th className="px-4 py-2 border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.teamArray &&
            state.teamArray.map((team, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="px-4 py-2 border border-gray-300">
                  {team.name}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {team.description}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {team.image}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {team.link_fb}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {team.link_tw}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {team.link_linkedin}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {team.link_insta}
                </td>
                <td className="px-4 py-2  flex m-2 border-gray-300">
                  <Link
                    href={`/admin/contentUpdate/contentUpdateSlider/contentUpdateTeamAdd`}
                  >
                    <button className=" bg-green-500 rounded-2xl text-white px-4 py-2 border border-gray-300">
                      Add{" "}
                    </button>
                  </Link>
                  <Link
                    href={`/admin/contentUpdate/contentUpdateTeam/contentUpdateTeamUpdate/[id]`}
                    as={`/admin/contentUpdate/contentUpdateTeam/contentUpdateTeamUpdate/${team._id}`}
                  >
                    <button className="bg-blue-500 rounded-2xl text-white px-4 py-2 border border-gray-300">
                      Update
                    </button>
                  </Link>
                  <button
                    className="bg-red-500 rounded-2xl text-white px-4 py-2 border border-gray-300"
                    onClick={() => handleDelete(deleteTeamData, team._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <h2 className="text-2xl font-semibold mb-2">Contact Section</h2>
      <table className="w-full table-auto mb-4 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border border-gray-300">Telephone</th>
            <th className="px-4 py-2 border border-gray-300">Email</th>
          </tr>
        </thead>
        <tbody>
          {state.contactArray &&
            state.contactArray.map((contact, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="px-4 py-2 border border-gray-300">
                  {contact.telephone}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {contact.email}
                </td>
                <td className="px-4 py-2  flex m-2 border-gray-300">
                  <Link
                    href={`/admin/contentUpdate/contentUpdateSlider/contentUpdateContactAdd`}
                  >
                    <button className=" bg-green-500 rounded-2xl text-white px-4 py-2 border border-gray-300">
                      Add{" "}
                    </button>
                  </Link>
                  <Link
                    href={`/admin/contentUpdate/contentUpdateContact/contentUpdateContactUpdate/[id]`}
                    as={`/admin/contentUpdate/contentUpdateContact/contentUpdateContactUpdate/${contact._id}`}
                  >
                    <button className="bg-blue-500 rounded-2xl text-white px-4 py-2 border border-gray-300">
                      Update
                    </button>
                  </Link>
                  <button
                    className="bg-red-500 rounded-2xl text-white px-4 py-2 border border-gray-300"
                    onClick={() => handleDelete(deleteContactData, contact._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mb-2">Client Section</h2>
      <table className="w-full table-auto mb-4 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border border-gray-300">Name</th>
            <th className="px-4 py-2 border border-gray-300">Description</th>
            <th className="px-4 py-2 border border-gray-300">Image</th>
            <th className="px-4 py-2 border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.clientArray &&
            state.clientArray.map((client, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="px-4 py-2 border border-gray-300">
                  {client.name}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {client.description}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {client.image}
                </td>
                <td className="px-4 py-2  flex m-2 border-gray-300">
                  <Link
                    href={`/admin/contentUpdate/contentUpdateSlider/contentUpdateSliderAdd`}
                  >
                    <button className=" bg-green-500 rounded-2xl text-white px-4 py-2 border border-gray-300">
                      Add{" "}
                    </button>
                  </Link>
                  <Link
                    href={`/admin/contentUpdate/contentUpdateSlider/contentUpdateClientUpdate/[id]`}
                    as={`/admin/contentUpdate/contentUpdateSlider/contentUpdateClientUpdate/${client._id}`}
                  >
                    <button className="bg-blue-500 rounded-2xl text-white px-4 py-2 border border-gray-300">
                      Update
                    </button>
                  </Link>
                  <button
                    className="bg-red-500 rounded-2xl text-white px-4 py-2 border border-gray-300"
                    onClick={() => handleDelete(deleteClientData, client._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
