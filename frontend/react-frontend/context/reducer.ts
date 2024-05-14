import { ObjectId } from "mongodb";
export interface State {
  route: string;
  customerArray: Customer[];
  newsLetterArray: NewsLetter[];
  sliderArray: Slider[];
  aboutArray: About[];
  serviceArray: Service[];
  workArray: Work[];
  teamArray: Team[];
  clientArray: Client[];
  contactArray: Contact[];
  footerArray: Footer[];
}

export interface Customer {
  _id: string
  name: string;
  email: string;
  subject: string;
  message: string;
  dateOfRegister: Date;
}

export interface NewsLetter {
  _id: string
  email: string;
  dateOfRegister: Date;
}

export interface Slider {
  _id: string
  title: string;
  description: string;
  contact_link: string;
  quote_link: string;
  image: string;
}

export interface About {
  _id: string
  title: string;
  description: string;
  read: string;
  image: string;
}

export interface Service {
  _id: string
  title: string;
  description: string;
  service_title: string;
  service_description: string;
  read: string;
  image: string;
}

export interface Work {
  _id: string
  title: string;
  description: string;
  service_title: string;
  service_description: string;
  read: string;
  image: string;
}

export interface Team {
  _id: string
  name: string;
  description: string;
  image: string;
  link_fb: string;
  link_tw: string;
  link_linkedin: string;
  link_insta: string;
}

export interface Client {
  _id: string
  name: string;
  description: string;
  image: string;
}

export interface Contact {
  _id: string
  telephone: string;
  email: string;
}

export interface Footer {
  _id: string
  link_facebook: string;
  link_twitter: string;
  link_linkedin: string;
  link_youtube: string;
}

export interface User {
  _id: string
  username: string;
  passwrdhash: string;
  email: string;
  name: string;
  is_admin: boolean;
  dateOfRegister: Date;
}

export const initialState: State = {
  route: "Home",
  customerArray: [{_id:"", name: "", email: "", subject: "", message: "", dateOfRegister: new Date() }],
  newsLetterArray: [{_id:"", email: "", dateOfRegister: new Date() }],
  sliderArray: [{_id:"", title: "", description: "", contact_link: "", quote_link: "", image: "" }],
  aboutArray: [{_id:"", title: "", description: "", read: "", image: "" }],
  serviceArray: [{_id:"", title: "", description: "", service_title: "", service_description: "", read: "", image: "" }],
  workArray: [{ _id:"",title: "", description: "", service_title: "", service_description: "", read: "", image: "" }],
  teamArray: [{_id:"", name: "", description: "", image: "", link_fb: "", link_tw: "", link_linkedin: "", link_insta: "" }],
  clientArray: [{_id:"", name: "", description: "", image: "" }],
  contactArray: [{_id:"", telephone: "", email: "" }],
  footerArray: [{_id:"", link_facebook: "", link_twitter: "", link_linkedin: "", link_youtube: "" }],
};


export interface Action {
  type: string;
  route?: string;
  customerArray : Customer[]
  newLetterArray: NewsLetter[]
  sliderArray : Slider[]
  aboutArray : About[]
  serviceArray : Service[]
  workArray : Work[]
  teamArray : Team[]
  clientArray : Client[]
  contactArray : Contact[]
  footerArray : Footer[] 
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
    case "SET_CUSTOMER":
      return{ ...state, 
        customerArray: action.customerArray
      }
    case "SET_NEWLETTER":
      return{
        ...state,
        newsLetterArray : action.customerArray
      }
    case "SET_SLIDER":
      return{...state,
        sliderArray:action.sliderArray
      }
    case "SET_ABOUT":
      return{...state,
        aboutArray:action.aboutArray
      }
    case "SET_SERVICE":
     return{...state,
      serviceArray:action.serviceArray
     }
     case "SET_WORK":
      return{...state,
        workArray:action.workArray
      }
      case "SET_TEAM":
        return{...state,
          teamArray:action.teamArray
        }
      case "SET_CLIENT":
        return{...state,
          clientArray:action.clientArray
        } 
      case "SET_CONTACT":
        return{...state,
        contactArray:action.contactArray
        } 
      case "SET_FOOTER":
        return{...state,
          footerArray:action.footerArray
        } 
    // Add more cases for other actions if needed
    default:
      return state;
  }
};

export default reducer;
