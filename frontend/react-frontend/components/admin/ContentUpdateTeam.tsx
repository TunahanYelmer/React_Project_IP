import React from "react";

interface FormElement {
  name: string;
  label: string;
  value: string;
}

interface FormProps {
  formElements: FormElement[];
  formAction: string;
  formMethod: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<FormProps> = ({
  formElements,
  formAction,
  formMethod,
  onSubmit,
}) => {
  return (
    <form className="admin-form" onSubmit={onSubmit} action={formAction} method={formMethod} encType="multipart/form-data">
      {formElements.map((element, index) => (
        <div key={index}>
          <label htmlFor={element.name} className="admin-form-label">
            {element.label}
          </label>
          {element.name === "image" ? (
            <input
              className="admin-form-input image-input"
              type="file"
              id={element.name}
              name={element.name}
              accept="image/*"
            />
          ) : (
            <input
              className="admin-form-input"
              type="text"
              id={element.name}
              name={element.name}
              value={element.value}
            />
          )}
        </div>
      ))}

      <button className="admin-button" type="submit">
        Update Team
      </button>
    </form>
  );
};

const EditTeamSection: React.FC = () => {
  const formElements: FormElement[] = [
    { name: "name", label: "Name", value: "Team Member Name" },
    { name: "description", label: "Description", value: "Team Member Description" },
    { name: "image", label: "Image", value: "" },
    { name: "link_fb", label: "Facebook", value: "https://www.facebook.com/team-member" },
    { name: "link_tw", label: "Twitter", value: "https://www.twitter.com/team-member" },
    { name: "link_linkedin", label: "LinkedIn", value: "https://www.linkedin.com/in/team-member" },
    { name: "link_insta", label: "Instagram", value: "https://www.instagram.com/team-member" },
  ];

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here.
  };

  return (
    <section className="admin-section update-section">
      <div className="admin-container">
        <div className="admin-col">
          <div className="admin-div">
            <h2 className="admin-h2">Edit Team Section</h2>
            <Form
              formElements={formElements}
              formAction="/admin/content/update/team"
              formMethod="post"
              onSubmit={onSubmit}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditTeamSection;