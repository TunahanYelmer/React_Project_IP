import React from 'react';

interface FormValues {
  username: string;
  password: string;
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

      <div className="admin-button-container">
        <button className="admin-button" type="submit">
          Login
        </button>
      </div>

      <div className="admin-small">
        <p>
          <a className="admin-a" href="#!">
            Forgot password?
          </a>
        </p>
      </div>
    </form>
  );
};

const LoginPage: React.FC = () => {
  const [formValues, setFormValues] = React.useState<FormValues>({
    username: '',
    password: '',
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
    <div className="admin-section">
      <div className="admin-container">
        <div className="admin-col">
          <div className="admin-div">
            <h2 className="admin-h2">Login</h2>
            <p className="admin-p">Please enter your login and password!</p>
            <Form formValues={formValues} onSubmit={handleSubmit} onChange={handleChange} />
          </div>

          <div className="admin-div">
            <p className="admin-p">
              Don't have an account?
              <a href="#" className="admin-a-bold">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;