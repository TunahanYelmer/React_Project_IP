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
        Update About
      </button>
    </form>
  );
};

const EditAboutSection: React.FC = () => {
  const formElements: FormElement[] = [
    { name: "title", label: "Title", value: "About Title" },
    { name: "description", label: "Description", value: "About Description" },
    { name: "read", label: "Read", value: "About Read" },
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
            <h2 className="admin-h2">Edit About Section</h2>
            <Form
              formElements={formElements}
              formAction="/admin/content/update/about"
              formMethod="post"
              onSubmit={onSubmit}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditAboutSection;