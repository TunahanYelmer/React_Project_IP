export interface State {
  route: string;
  Customer: Customer;
  NewsLetter: NewsLetter;
  Slider: Slider;
  About: About;
  Service: Service;
  Work: Work;
  Team: Team;
  Client: Client;
  Contact: Contact;
  Footer: Footer;
  User: User;
}

export interface Customer {
  name: string;
  email: string;
  subject: string;
  message: string;
  dateOfRegister: Date;
}

export interface NewsLetter {
  email: string;
  dateOfRegister: Date;
}

export interface Slider {
  title: string;
  description: string;
  contact_link: string;
  quote_link: string;
  image: string;
}

export interface About {
  title: string;
  description: string;
  read: string;
  image: string;
}

export interface Service {
  title: string;
  description: string;
  service_title: string;
  service_description: string;
  read: string;
  image: string;
}

export interface Work {
  title: string;
  description: string;
  service_title: string;
  service_description: string;
  read: string;
  image: string;
}

export interface Team {
  name: string;
  description: string;
  image: string;
  link_fb: string;
  link_tw: string;
  link_linkedin: string;
  link_insta: string;
}

export interface Client {
  name: string;
  description: string;
  image: string;
}

export interface Contact {
  telephone: string;
  email: string;
}

export interface Footer {
  link_facebook: string;
  link_twitter: string;
  link_linkedin: string;
  link_youtube: string;
}

export interface User {
  username: string;
  passwrdhash: string;
  email: string;
  name: string;
  is_admin: boolean;
  dateOfRegister: Date;
}

export const initialState: State = {
  route: "Home",
  Customer: {
    name: "",
    email: "",
    subject: "",
    message: "",
    dateOfRegister: new Date(),
  },
  NewsLetter: {
    email: "",
    dateOfRegister: new Date(),
  },
  Slider: {
    title: "",
    description: "",
    contact_link: "",
    quote_link: "",
    image: "",
  },
  About: {
    title: "",
    description: "",
    read: "",
    image: "",
  },
  Service: {
    title: "",
    description: "",
    service_title: "",
    service_description: "",
    read: "",
    image: "",
  },
  Work: {
    title: "",
    description: "",
    service_title: "",
    service_description: "",
    read: "",
    image: "",
  },
  Team: {
    name: "",
    description: "",
    image: "",
    link_fb: "",
    link_tw: "",
    link_linkedin: "",
    link_insta: "",
  },
  Client: {
    name: "",
    description: "",
    image: "",
  },
  Contact: {
    telephone: "",
    email: "",
  },
  Footer: {
    link_facebook: "",
    link_twitter: "",
    link_linkedin: "",
    link_youtube: "",
  },
  User: {
    username: "",
    passwrdhash: "",
    email: "",
    name: "",
    is_admin: false,
    dateOfRegister: new Date(),
  },
};


export interface Action {
  type: string;
  route?: string;
  // Add more properties as needed for other actions
}

const reducer = (state: State = initialState, action: Action): State => {
  console.log(action);
  switch (action.type) {
    case "SET_ROUTE":
      return {
        ...state,
        route: action.route || initialState.route,
      };
    // Add more cases for other actions if needed
    default:
      return state;
  }
};

export default reducer;
