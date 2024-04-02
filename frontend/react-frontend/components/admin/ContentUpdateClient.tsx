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
        Update Client
      </button>
    </form>
  );
};

const EditClientSection: React.FC = () => {
  const formElements: FormElement[] = [
    { name: "title", label: "Title", value: "Client Title" },
    { name: "client_title", label: "Client Title", value: "Client Client Title" },
    { name: "client_description", label: "Client Description", value: "Client Client Description" },
    { name: "read", label: "Read", value: "Client Read" },
    { name: "description", label: "Description", value: "Client Description" },
    { name: "image", label: "Image", value: "" },
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
            <h2 className="admin-h2">Edit Client Section</h2>
            <Form
              formElements={formElements}
              formAction="/admin/content/update/client"
              formMethod="post"
              onSubmit={onSubmit}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditClientSection;