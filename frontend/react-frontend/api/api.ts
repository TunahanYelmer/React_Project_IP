import axios, { AxiosResponse } from "axios";

import {
  Action,
  Customer,
  NewsLetter,
  Slider,
  About,
  Service,
  Work,
  Team,
  Client,
  Contact,
  Footer,
  User,
} from "../context/reducer";
import React from "react";

// Define the base URL of your API
const BASE_URL = "http://127.0.0.1:5000";
interface SliderResponse {
  sliders: Slider[];
}
interface AboutResponse {
  about: About[];
}
interface ServiceResponse {
  service: Service[];
}
interface WorkResponse {
  works: Work[];
}
interface TeamResponse {
  team: Team[];
}
interface ClientResponse {
  client: Client[];
}
interface ContactResponse {
  contacts: Contact[];
}
interface FooterResponse {
  footer: Footer[];
}
interface UserResponse {
  user: User[];
}
interface CustomerObject {
  name: string;
  email: string;
  subject: string;
  message: string;
}
interface AboutObject {
  title: string;
  description: string;
  read: string;
  image: string;
}
interface ClientObject {
  name: string;
  description: string;
  image: string;
}
interface ContactObject {
  telephone: string;
  email: string;
}
interface FooterObject {
  title: string;
  description: string;
  image: string;
}
interface UserObject {
  username: string;
  password: string;
  email: string;
  name: string;
  is_admin: Boolean;
}
interface ServiceObject {
  title: string;
  description: string;
  service_title: string;
  service_description: string;
  read: string;
  image: string;
}
interface SliderObject {
  title: string;
  description: string;
  contact_link: string;
  quote_link: string;
  image: string;
}
interface TeamObject {
  name: string;
  description: string;
  image: string;
  link_fb: string;
  link_tw: string;
  link_linkedin: string;
  link_insta: string;
}
interface WorkObject {
  title: string;
  description: string;
  service_title: string;
  service_description: string;
  read: string;
  image: string;
}

// Function to fetch data from the customer endpoint
export async function fetchCustomerDataAndDispatch(
  dispatch: Function
): Promise<void> {
  try {
    const response: AxiosResponse<{ customers: Customer[] }> = await axios.get<{
      customers: Customer[];
    }>(`${BASE_URL}/customer`);

    // Extract customers array from response data
    const customers: Customer[] = response.data.customers;

    // Dispatch the action with the customers
    dispatch({
      type: "SET_CUSTOMER",
      customers,
    });
  } catch (error) {
    console.error(`Error fetching customer data: ${error}`);
    // Optionally handle the error here, e.g., dispatch an error action
  }
}

// Function to post data to the customer endpoint
export async function postCustomerData(
  customerData: CustomerObject
): Promise<AxiosResponse<any>> {
  try {
    const response = await axios.post<any>(
      `${BASE_URL}/customer`,
      customerData
    );
    return response;
  } catch (error) {
    throw new Error(`Error posting customer data: ${error}`);
  }
}

// Function to update data in the customer endpoint
export async function updateCustomerData(
  customerId: string,
  customerData: Customer
): Promise<AxiosResponse<Customer>> {
  try {
    const response = await axios.put<Customer>(
      `${BASE_URL}/customer/${customerId}`,
      customerData
    );
    return response;
  } catch (error) {
    throw new Error(`Error updating customer data: ${error}`);
  }
}

// Function to delete data from the customer endpoint
export async function deleteCustomerData(customerId: string): Promise<void> {
  try {
    await axios.delete(`${BASE_URL}/customer/${customerId}`);
  } catch (error) {
    throw new Error(`Error deleting customer data: ${error}`);
  }
}
export async function fetchNewsletterDataAndDispatch(
  dispatch: Function
): Promise<void> {
  try {
    const response: AxiosResponse<NewsLetter[]> = await axios.get<NewsLetter[]>(
      `${BASE_URL}/newsletter`
    );

    // Extract newsletter array from response data
    const newsletters: NewsLetter[] = response.data;

    // Dispatch the action with the newsletters
    dispatch({
      type: "SET_NEWSLETTER",
      newsletters,
    });
  } catch (error) {
    console.error(`Error fetching newsletter data: ${error}`);
    // Optionally handle the error here, e.g., dispatch an error action
  }
}

// Function to post data to the customer endpoint
export async function postNewsletterData(
  email: string
): Promise<AxiosResponse<any>> {
  try {
    const response = await axios.post<any>(`${BASE_URL}/newsletter`, { email });
    return response;
  } catch (error) {
    throw new Error(`Error posting newsletter data: ${error}`);
  }
}

// Function to update data in the customer endpoint
export async function updateNewsletterData(
  newsletterID: string,
  newsletterData: NewsLetter
): Promise<AxiosResponse<NewsLetter>> {
  try {
    const response = await axios.put<Customer>(
      `${BASE_URL}/newsletter/${newsletterID}`,
      newsletterData
    );
    return response;
  } catch (error) {
    throw new Error(`Error updating newsletter data: ${error}`);
  }
}

// Function to delete data from the customer endpoint
export async function deleteNewsletterData(
  newsletterID: string
): Promise<void> {
  try {
    await axios.delete(`${BASE_URL}/newsletter/${newsletterID}`);
  } catch (error) {
    throw new Error(`Error deleting customer data: ${error}`);
  }
}
export async function fetchSliderDataAndDispatch(
  dispatch: Function
): Promise<void> {
  try {
    const response: AxiosResponse<SliderResponse> =
      await axios.get<SliderResponse>(`${BASE_URL}/slider`);

    // Extract slider array from response data
    const sliderArray: Slider[] = response.data.sliders;

    // Dispatch the action with the sliders
    await dispatch({
      type: "SET_SLIDER",
      sliderArray,
    });
  } catch (error) {
    console.error(`Error fetching slider data: ${error}`);
    // Optionally handle the error here, e.g., dispatch an error action
  }
}
// Function to post data to the customer endpoint
export async function postSliderData(
  sliderData: SliderObject
): Promise<AxiosResponse<any>> {
  try {
    const response = await axios.post<any>(`${BASE_URL}/slider`, sliderData);
    return response;
  } catch (error) {
    throw new Error(`Error posting slider data: ${error}`);
  }
}

// Function to update data in the customer endpoint
export async function updateSliderData(
  sliderID: string,
  sliderData: Slider
): Promise<AxiosResponse<Slider>> {
  try {
    const response = await axios.post<Slider>(
      `${BASE_URL}/slider/${sliderID}`,
      sliderData
    );
    return response;
  } catch (error) {
    throw new Error(`Error updating customer data: ${error}`);
  }
}

// Function to delete data from the customer endpoint
export async function deleteSliderData(sliderID: string): Promise<void> {
  try {
    await axios.delete(`${BASE_URL}/slider/${sliderID}`);
  } catch (error) {
    throw new Error(`Error deleting customer data: ${error}`);
  }
}
export async function fetchAboutDataAndDispatch(
  dispatch: React.Dispatch<Action>
): Promise<void> {
  try {
    const response: AxiosResponse<AboutResponse> = await axios.get<{
      about: About[];
    }>(`${BASE_URL}/about`);

    // Extract about array from response data
    const aboutArray: About[] = response.data.about;
    // Dispatch the action with the about data
    dispatch({
      type: "SET_ABOUT",
      aboutArray,
    });
    console.log("dispatch" + dispatch);
  } catch (error) {
    console.error(`Error fetching about data: ${error}`);
    // Optionally handle the error here, e.g., dispatch an error action
  }
}
// Function to post data to the customer endpoint
export async function postAboutData(
  aboutData: AboutObject
): Promise<AxiosResponse<any>> {
  try {
    const response = await axios.post<any>(`${BASE_URL}/about`, aboutData);
    return response;
  } catch (error) {
    throw new Error(`Error posting about data: ${error}`);
  }
}

// Function to update data in the customer endpoint
export async function updateAboutData(
  aboutId: string,
  aboutData: About
): Promise<AxiosResponse<About>> {
  try {
    const response = await axios.put<About>(
      `${BASE_URL}/about/${aboutId}`,
      aboutData
    );
    return response;
  } catch (error) {
    throw new Error(`Error updating about data: ${error}`);
  }
}

// Function to delete data from the customer endpoint
export async function deleteAboutData(aboutId: string): Promise<void> {
  try {
    await axios.delete(`${BASE_URL}/about/${aboutId}`);
  } catch (error) {
    throw new Error(`Error deleting about data: ${error}`);
  }
}
export async function fetchServiceDataAndDispatch(
  dispatch: React.Dispatch<Action>
): Promise<void> {
  try {
    const response: AxiosResponse<ServiceResponse> =
      await axios.get<ServiceResponse>(`${BASE_URL}/service`);

    // Extract service array from response data
    const serviceArray: Service[] = response.data.service;

    // Dispatch the action with the service data
    await dispatch({
      type: "SET_SERVICE",
      serviceArray,
    });
  } catch (error) {
    console.error(`Error fetching service data: ${error}`);
    // Optionally handle the error here, e.g., dispatch an error action
  }
}

// Function to post data to the customer endpoint
export async function postServiceData(
  serviceData: ServiceObject
): Promise<AxiosResponse<any>> {
  try {
    const response = await axios.post<any>(`${BASE_URL}/service`, serviceData);
    return response;
  } catch (error) {
    throw new Error(`Error posting service data: ${error}`);
  }
}

// Function to update data in the customer endpoint
export async function updateServiceData(
  serviceId: string,
  serviceData: Service
): Promise<AxiosResponse<Service>> {
  try {
    const response = await axios.put<Service>(
      `${BASE_URL}/service/${serviceId}`,
      serviceData
    );
    return response;
  } catch (error) {
    throw new Error(`Error updating service data: ${error}`);
  }
}

// Function to delete data from the customer endpoint
export async function deleteServiceData(serviceId: string): Promise<void> {
  try {
    await axios.delete(`${BASE_URL}/service/${serviceId}`);
  } catch (error) {
    throw new Error(`Error deleting service data: ${error}`);
  }
}

export async function fetchWorkDataAndDispatch(
  dispatch: React.Dispatch<Action>
): Promise<void> {
  try {
    const response: AxiosResponse<WorkResponse> = await axios.get<WorkResponse>(
      `${BASE_URL}/work`
    );

    // Log the response data to the console
    console.log(response.data);

    // Extract work array from response data
    const workArray: Work[] = response.data.works;

    // Dispatch the action with the work data
    dispatch({
      type: "SET_WORK",
      workArray,
    });
  } catch (error) {
    console.error(`Error fetching work data: ${error}`);
    // Optionally handle the error here, e.g., dispatch an error action
  }
}

// Function to post data to the customer endpoint
export async function postWorkData(
  workData: WorkObject
): Promise<AxiosResponse<any>> {
  try {
    const response = await axios.post<any>(`${BASE_URL}/work`, workData);
    return response;
  } catch (error) {
    throw new Error(`Error posting work data: ${error}`);
  }
}

// Function to update data in the customer endpoint
export async function updateWorkData(
  workId: string,
  workData: Work
): Promise<AxiosResponse<Work>> {
  try {
    const response = await axios.put<Work>(
      `${BASE_URL}/work/${workId}`,
      workData
    );
    return response;
  } catch (error) {
    throw new Error(`Error updating work data: ${error}`);
  }
}

// Function to delete data from the customer endpoint
export async function deleteWorkData(workId: string): Promise<void> {
  try {
    await axios.delete(`${BASE_URL}/work/${workId}`);
  } catch (error) {
    throw new Error(`Error deleting work data: ${error}`);
  }
}
export async function fetchTeamDataAndDispatch(
  dispatch: React.Dispatch<Action>
): Promise<void> {
  try {
    const response: AxiosResponse<TeamResponse> = await axios.get<TeamResponse>(
      `${BASE_URL}/team`
    );

    // Extract team array from response data
    const teamArray: Team[] = response.data.team;

    // Dispatch the action with the team data
    dispatch({
      type: "SET_TEAM",
      teamArray,
    });
  } catch (error) {
    console.error(`Error fetching team data: ${error}`);
    // Optionally handle the error here, e.g., dispatch an error action
  }
}

// Function to post data to the customer endpoint
export async function postTeamData(
  teamData: TeamObject
): Promise<AxiosResponse<any>> {
  try {
    const response = await axios.post<any>(`${BASE_URL}/team`, teamData);
    return response;
  } catch (error) {
    throw new Error(`Error posting team data: ${error}`);
  }
}

// Function to update data in the customer endpoint
export async function updateTeamData(
  teamId: string,
  teamData: Team
): Promise<AxiosResponse<Team>> {
  try {
    const response = await axios.put<Team>(
      `${BASE_URL}/team/${teamId}`,
      teamData
    );
    return response;
  } catch (error) {
    throw new Error(`Error updating team data: ${error}`);
  }
}

// Function to delete data from the customer endpoint
export async function deleteTeamData(teamId: string): Promise<void> {
  try {
    await axios.delete(`${BASE_URL}/team/${teamId}`);
  } catch (error) {
    throw new Error(`Error deleting team data: ${error}`);
  }
}
export async function fetchClientDataAndDispatch(
  dispatch: Function
): Promise<void> {
  try {
    const response: AxiosResponse<Client[]> = await axios.get<Client[]>(
      `${BASE_URL}/client`
    );

    // Extract client array from response data
    const clientData: Client[] = response.data;

    // Dispatch the action with the client data
    dispatch({
      type: "SET_CLIENT",
      clientData,
    });
  } catch (error) {
    console.error(`Error fetching client data: ${error}`);
    // Optionally handle the error here, e.g., dispatch an error action
  }
}

// Function to post data to the customer endpoint
export async function postClientData(
  clientData: ClientObject
): Promise<AxiosResponse<any>> {
  try {
    const response = await axios.post<any>(`${BASE_URL}/client`, clientData);
    return response;
  } catch (error) {
    throw new Error(`Error posting customer data: ${error}`);
  }
}

// Function to update data in the customer endpoint
export async function updateClientData(
  clientId: string,
  clientData: Client
): Promise<AxiosResponse<Client>> {
  try {
    const response = await axios.put<Client>(
      `${BASE_URL}/client/${clientId}`,
      clientData
    );
    return response;
  } catch (error) {
    throw new Error(`Error updating customer data: ${error}`);
  }
}

// Function to delete data from the customer endpoint
export async function deleteClientData(clientId: string): Promise<void> {
  try {
    await axios.delete(`${BASE_URL}/client/${clientId}`);
  } catch (error) {
    throw new Error(`Error deleting client data: ${error}`);
  }
}
export async function fetchContactDataAndDispatch(
  dispatch: React.Dispatch<Action>
): Promise<void> {
  try {
    const response: AxiosResponse<ContactResponse> =
      await axios.get<ContactResponse>(`${BASE_URL}/contact`);

    // Extract contact array from response data
    const contactArray: Contact[] = response.data.contacts;

    // Dispatch the action with the contact data
    await dispatch({
      type: "SET_CONTACT",
      contactArray,
    });
  } catch (error) {
    console.error(`Error fetching contact data: ${error}`);
    // Optionally handle the error here, e.g., dispatch an error action
  }
}

// Function to post data to the customer endpoint
export async function postContactData(
  contactData: ContactObject
): Promise<AxiosResponse<any>> {
  try {
    const response = await axios.post<any>(`${BASE_URL}/contact`, contactData);
    return response;
  } catch (error) {
    throw new Error(`Error posting contact data: ${error}`);
  }
}

// Function to update data in the customer endpoint
export async function updateContactData(
  contactId: string,
  contactData: Contact
): Promise<AxiosResponse<Contact>> {
  try {
    const response = await axios.put<Contact>(
      `${BASE_URL}/contact/${contactId}`,
      contactData
    );
    return response;
  } catch (error) {
    throw new Error(`Error updating contact data: ${error}`);
  }
}

// Function to delete data from the customer endpoint
export async function deleteContactData(contactId: string): Promise<void> {
  try {
    await axios.delete(`${BASE_URL}/contact/${contactId}`);
  } catch (error) {
    throw new Error(`Error deleting contact data: ${error}`);
  }
}
export async function fetchFooterDataAndDispatch(
  dispatch: Function
): Promise<void> {
  try {
    const response: AxiosResponse<Footer[]> = await axios.get<Footer[]>(
      `${BASE_URL}/footer`
    );

    // Extract footer array from response data
    const footerData: Footer[] = response.data;

    // Dispatch the action with the footer data
    dispatch({
      type: "SET_FOOTER",
      footerData,
    });
  } catch (error) {
    console.error(`Error fetching footer data: ${error}`);
    // Optionally handle the error here, e.g., dispatch an error action
  }
}

// Function to post data to the customer endpoint
export async function postFooterData(
  footerData: Footer
): Promise<AxiosResponse<Footer>> {
  try {
    const response = await axios.post<Footer>(`${BASE_URL}/footer`, footerData);
    return response;
  } catch (error) {
    throw new Error(`Error posting footer data: ${error}`);
  }
}

// Function to update data in the customer endpoint
export async function updateFooterData(
  footerId: string,
  footerData: Footer
): Promise<AxiosResponse<Footer>> {
  try {
    const response = await axios.put<Footer>(
      `${BASE_URL}/footer/${footerId}`,
      footerData
    );
    return response;
  } catch (error) {
    throw new Error(`Error updating footer data: ${error}`);
  }
}

// Function to delete data from the customer endpoint
export async function deleteFooterData(footerId: string): Promise<void> {
  try {
    await axios.delete(`${BASE_URL}/footer/${footerId}`);
  } catch (error) {
    throw new Error(`Error deleting footer data: ${error}`);
  }
}
export async function fetchUserDataAndDispatch(
  dispatch: Function
): Promise<void> {
  try {
    const response: AxiosResponse<User[]> = await axios.get<User[]>(
      `${BASE_URL}/user`
    );

    // Extract user array from response data
    const userData: User[] = response.data;

    // Dispatch the action with the user data
    dispatch({
      type: "SET_USER",
      userData,
    });
  } catch (error) {
    console.error(`Error fetching user data: ${error}`);
    // Optionally handle the error here, e.g., dispatch an error action
  }
}

// Function to post data to the customer endpoint
export async function postUserData(
  userData: User
): Promise<AxiosResponse<User>> {
  try {
    const response = await axios.post<User>(`${BASE_URL}/user`, userData);
    return response;
  } catch (error) {
    throw new Error(`Error posting user data: ${error}`);
  }
}

// Function to update data in the customer endpoint
export async function updateUserData(
  userId: string,
  userData: User
): Promise<AxiosResponse<User>> {
  try {
    const response = await axios.put<User>(
      `${BASE_URL}/user/${userId}`,
      userData
    );
    return response;
  } catch (error) {
    throw new Error(`Error updating user data: ${error}`);
  }
}

// Function to delete data from the customer endpoint
export async function deleteUserData(userId: string): Promise<void> {
  try {
    await axios.delete(`${BASE_URL}/user/${userId}`);
  } catch (error) {
    throw new Error(`Error deleting user data: ${error}`);
  }
}
// You can define similar functions for other endpoints as well
export async function Login(
  email: string,
  password: string
): Promise<AxiosResponse<any>> {
  try {
    const response = await axios.post<any>(`${BASE_URL}/login`, {
      email,
      password,
    });
    return response;
  } catch (error) {
    throw new Error(`Error logging in: ${error}`);
  }
}
export async function Register(
  username: string,
  password: string,
  email: string,
  name: string,
  is_admin: Boolean
): Promise<AxiosResponse<any>> {
  try {
    const response = await axios.post<any>(`${BASE_URL}/register`, {
      username,
      password,
      email,
      name,
      is_admin,
    });
    return response;
  } catch (error) {
    throw new Error(`Error registering: ${error}`);
  }
}
