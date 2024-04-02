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
        Update Footer
      </button>
    </form>
  );
};

const EditFooterSection: React.FC = () => {
  const formElements: FormElement[] = [
    { name: "title", label: "Title", value: "Footer Title" },
    { name: "description", label: "Description", value: "Footer Description" },
    { name: "link_facebook", label: "Link Facebook", value: "https://www.facebook.com/example" },
    { name: "link_twitter", label: "Link Twitter", value: "https://www.twitter.com/example" },
    { name: "link_linkedin", label: "Link LinkedIn", value: "https://www.linkedin.com/company/example" },
    { name: "link_youtube", label: "Link YouTube", value: "https://www.youtube.com/user/example" },
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
            <h2 className="admin-h2">Edit Footer Section</h2>
            <Form
              formElements={formElements}
              formAction="/admin/content/update/footer"
              formMethod="post"
              onSubmit={onSubmit}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditFooterSection;