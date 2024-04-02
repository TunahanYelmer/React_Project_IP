import React from "react";

interface AdminTableProps {
  title: string;
  headings: string[];
  data: { [key: string]: string }[];
  addUrl: string;
  deleteUrl: string;
}

const AdminTable: React.FC<AdminTableProps> = ({
  title,
  headings,
  data,
  addUrl,
  deleteUrl,
}) => {
  return (
    <div className="admin-div">
      <h2 className="admin-h2">{title}</h2>
      <table className="admin-table">
        <thead>
          <tr>
            {headings.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={Object.values(item).join("")}>
              {Object.keys(item).map((key, index) => (
                <td key={index}>{item[key]}</td>
              ))}
              <td>
                <form
                  action={deleteUrl.replace(":id", String(item.id))}
                  method="POST"
                >
                  <button className="admin-button delete-button" type="submit">
                    Delete
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form action={addUrl} method="POST">
        <button className="admin-button add-button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

const AdminContent: React.FC = () => {
  const sliderData = [
    { title: "Slider 1", description: "Desc 1", contact_link: "Link 1", image: "Img 1", quote_link: "Quote 1", id: 1 },
    // Add more data here...
  ];

  const serviceData = [
    { title: "Service 1", description: "Desc 1", image: "Img 1", read: "Read 1", service_title: "Service Title 1", service_description: "Service Description 1", id: 1 },
    // Add more data here...
  ];

  // Add more data arrays for other entities like About, Work, Team, Client, Contact, and Footer

  return (
    <>
      <AdminTable
        title="Sliders"
        headings={["Title", "Description", "Contact_Link", "Image", "Quote_Link"]}
        data={sliderData}
        addUrl="/admin/content/update/slider"
        deleteUrl="/admin/delete/slider/:id"
      />
      <AdminTable
        title="Service"
        headings={["Title", "Description", "Image", "Read", "Service_Title", "Service_Description"]}
        data={serviceData}
        addUrl="/admin/content/update/service"
        deleteUrl="/admin/delete/service/:id"
      />
      {/* Add other AdminTable components for other entities */}
    </>
  );
};

export default AdminContent;