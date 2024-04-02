import React from 'react';

interface ContactProps {
  form: {
    name: JSX.Element;
    email: JSX.Element;
    subject: JSX.Element;
    message: JSX.Element;
  };
}

const Contact: React.FC<ContactProps> = ({ form }) => {
  return (
    <section className="contact_section bg-gray-100 px-8 py-12">
      <div className="container mx-auto">
        <div className="heading_container">
          <h2 className="text-3xl font-medium mb-4">Get In touch</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-8 mx-auto">
              <form
                action="/contact"
                method="post"
                className="bg-white shadow-md rounded-lg p-8"
              >
                <div className="form-row">
                  <div className="form-group col-md-6">
                    {form.name}
                  </div>
                  <div className="form-group col-md-6">
                    {form.email}
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col">
                    {form.subject}
                  </div>
                </div>
                <div className="form-group">
                  {form.message}
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;