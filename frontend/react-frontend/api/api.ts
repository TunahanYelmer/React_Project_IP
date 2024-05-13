import axios, { AxiosResponse } from "axios";
import {
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

// Define the base URL of your API
const BASE_URL = "https://example.com/api";

// Function to fetch data from the customer endpoint
export async function fetchCustomerData(): Promise<AxiosResponse<Customer[]>> {
  try {
    const response = await axios.get<Customer[]>(`${BASE_URL}/customer`);
    return response;
  } catch (error) {
    throw new Error(`Error fetching customer data: ${error}`);
  }
}

// Function to post data to the customer endpoint
export async function postCustomerData(
  customerData: Customer
): Promise<AxiosResponse<Customer>> {
  try {
    const response = await axios.post<Customer>(
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
export async function fetchNewsletterData(): Promise<AxiosResponse<NewsLetter[]>> {
  try {
    const response = await axios.get<NewsLetter[]>(`${BASE_URL}/newsletter`);
    return response;
  } catch (error) {
    throw new Error(`Error fetching customer data: ${error}`);
  }
}

// Function to post data to the customer endpoint
export async function postNewsletterData(
  newsletterData: NewsLetter
): Promise<AxiosResponse<NewsLetter>> {
  try {
    const response = await axios.post<NewsLetter>(
      `${BASE_URL}/newsletter`,
      newsletterData
    );
    return response;
  } catch (error) {
    throw new Error(`Error posting newsletter data: ${error}`);
  }
}

// Function to update data in the customer endpoint
export async function updateNewsletterData(
  newsletterID: string,
  newsletterData: NewsLetter
): Promise<AxiosResponse<NewsLetter>>{
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
export async function deleteNewsletterData(newsletterID: string,): Promise<void> {
  try {
    await axios.delete(`${BASE_URL}/newsletter/${newsletterID}`);
  } catch (error) {
    throw new Error(`Error deleting customer data: ${error}`);
  }
}
export async function fetchSliderData(): Promise<AxiosResponse<Slider[]>> {
  try {
    const response = await axios.get<Slider[]>(`${BASE_URL}/slider`);
    return response;
  } catch (error) {
    throw new Error(`Error fetching slider data: ${error}`);
  }
}

// Function to post data to the customer endpoint
export async function postSliderData(
  sliderData: Slider
): Promise<AxiosResponse<Slider>> {
  try {
    const response = await axios.post<Slider>(
      `${BASE_URL}/slider`,
      sliderData
    );
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
export async function fetchAboutData(): Promise<AxiosResponse<About[]>> {
  try {
    const response = await axios.get<About[]>(`${BASE_URL}/about`);
    return response;
  } catch (error) {
    throw new Error(`Error fetching about data: ${error}`);
  }
}

// Function to post data to the customer endpoint
export async function postAboutData(
  aboutData: About
): Promise<AxiosResponse<About>> {
  try {
    const response = await axios.post<About>(
      `${BASE_URL}/about`,
      aboutData
    );
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
    const response = await axios.post<About>(
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
export async function fetchServiceData(): Promise<AxiosResponse<Service[]>> {
  try {
    const response = await axios.get<Service[]>(`${BASE_URL}/service`);
    return response;
  } catch (error) {
    throw new Error(`Error fetching service data: ${error}`);
  }
}

// Function to post data to the customer endpoint
export async function postServiceData(
  serviceData: Service
): Promise<AxiosResponse<Service>> {
  try {
    const response = await axios.post<Service>(
      `${BASE_URL}/service`,
      serviceData
    );
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
export async function fetchWorkData(): Promise<AxiosResponse<Work[]>> {
  try {
    const response = await axios.get<Work[]>(`${BASE_URL}/work`);
    return response;
  } catch (error) {
    throw new Error(`Error fetching work data: ${error}`);
  }
}

// Function to post data to the customer endpoint
export async function postWorkData(
  workData: Work
): Promise<AxiosResponse<Work>> {
  try {
    const response = await axios.post<Work>(
      `${BASE_URL}/work`,
      workData
    );
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
export async function fetchTeamData(): Promise<AxiosResponse<Team[]>> {
  try {
    const response = await axios.get<Team[]>(`${BASE_URL}/team`);
    return response;
  } catch (error) {
    throw new Error(`Error fetching team data: ${error}`);
  }
}

// Function to post data to the customer endpoint
export async function postTeamData(
  teamData: Team
): Promise<AxiosResponse<Team>> {
  try {
    const response = await axios.post<Team>(
      `${BASE_URL}/team`,
      teamData
    );
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
export async function fetchClientData(): Promise<AxiosResponse<Client[]>> {
  try {
    const response = await axios.get<Client[]>(`${BASE_URL}/client`);
    return response;
  } catch (error) {
    throw new Error(`Error fetching client data: ${error}`);
  }
}

// Function to post data to the customer endpoint
export async function postClientData(
  clientData: Client
): Promise<AxiosResponse<Client>> {
  try {
    const response = await axios.post<Client>(
      `${BASE_URL}/client`,
      clientData
    );
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
export async function fetchContactData(): Promise<AxiosResponse<Contact[]>> {
  try {
    const response = await axios.get<Contact[]>(`${BASE_URL}/contact`);
    return response;
  } catch (error) {
    throw new Error(`Error fetching contact data: ${error}`);
  }
}

// Function to post data to the customer endpoint
export async function postContactData(
  contactData: Contact
): Promise<AxiosResponse<Contact>> {
  try {
    const response = await axios.post<Contact>(
      `${BASE_URL}/contact`,
      contactData
    );
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
export async function fetchFooterData(): Promise<AxiosResponse<Footer[]>> {
  try {
    const response = await axios.get<Footer[]>(`${BASE_URL}/footer`);
    return response;
  } catch (error) {
    throw new Error(`Error fetching footer data: ${error}`);
  }
}

// Function to post data to the customer endpoint
export async function postFooterData(
  footerData: Footer
): Promise<AxiosResponse<Footer>> {
  try {
    const response = await axios.post<Footer>(
      `${BASE_URL}/footer`,
      footerData
    );
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
export async function fetchUserData(): Promise<AxiosResponse<User[]>> {
  try {
    const response = await axios.get<User[]>(`${BASE_URL}/user`);
    return response;
  } catch (error) {
    throw new Error(`Error fetching user data: ${error}`);
  }
}

// Function to post data to the customer endpoint
export async function postUserData(
  userData: User
): Promise<AxiosResponse<User>> {
  try {
    const response = await axios.post<User>(
      `${BASE_URL}/user`,
      userData
    );
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
