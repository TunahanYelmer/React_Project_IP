import React from 'react';

interface FormValues {
  email: string;
  username: string;
  name: string;
  password: string;
  confirm: string;
}

interface FormProps {
  formValues: FormValues;
  onSubmit: (values: FormValues) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Form: React.FC<FormProps> = ({ formValues, onSubmit, onChange }) => {
  return (
    <form onSubmit={(event) => onSubmit(formValues)}>
      <div className="admin-form">
        <label className="admin-label" htmlFor="email">
          Email
        </label>
        <input
          className="admin-input"
          type="email"
          id="email"
          name="email"
          placeholder="Email:"
          value={formValues.email}
          onChange={onChange}
        />
      </div>

      <div className="admin-form">
        <label className="admin-label" htmlFor="username">
          Username
        </label>
        <input
          className="admin-input"
          type="text"
          id="username"
          name="username"
          placeholder="Username:"
          value={formValues.username}
          onChange={onChange}
        />
      </div>

      <div className="admin-form">
        <label className="admin-label" htmlFor="name">
          Name
        </label>
        <input
          className="admin-input"
          type="text"
          id="name"
          name="name"
          placeholder="Name:"
          value={formValues.name}
          onChange={onChange}
        />
      </div>

      <div className="admin-form">
        <label className="admin-label" htmlFor="password">
          Password
        </label>
        <input
          className="admin-input"
          type="password"
          id="password"
          name="password"
          placeholder="Password:"
          value={formValues.password}
          onChange={onChange}
        />
      </div>

      <div className="admin-form">
        <label className="admin-label" htmlFor="confirm">
          Confirm
        </label>
        <input
          className="admin-input"
          type="password"
          id="confirm"
          name="confirm"
          placeholder="Confirm:"
          value={formValues.confirm}
          onChange={onChange}
        />
      </div>

      <div className="admin-button-container">
        <button className="admin-button" type="submit">
          Sign Up
        </button>
      </div>
    </form>
  );
};

const Register: React.FC = () => {
  const [formValues, setFormValues] = React.useState<FormValues>({
    email: '',
    username: '',
    name: '',
    password: '',
    confirm: '',
  });

  const handleSubmit = (values: FormValues) => {
    console.log('Form submitted:', values);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="admin-register-section">
      <div className="admin-container">
        <div className="admin-col">
          <div className="admin-div">
            <h2 className="admin-h2">Sign-Up</h2>
            <Form formValues={formValues} onSubmit={handleSubmit} onChange={handleChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;