import React, { useEffect } from "react";
import { updateServiceData } from "../../api/api";
import { useState } from "react";

interface Props {
  id: string;
}

export interface Service {
  _id: string;
  title: string;
  description: string;
  service_title: string;
  service_description: string;
  read: string;
  image: string;
}

const EditServiceSection: React.FC<Props> = ({ id }) => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [service_description, setServiceDescription] = useState("");
  const [service_title, setServiceTitle] = useState("");
  const [description, setDescription] = useState("");
  const [read, setRead] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();

    const imageData = formData.get("image") as File;
    if (imageData) {
      setImage(imageData.name);
    } else {
      setImage("");
    }
    const service: Service = {
      _id: id,
      title: title,
      description: description,
      service_title: title, // service_title
      service_description: description, // service_description
      read: read,
      image: image,
    };
    await updateServiceData(id, service);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    console.log(file);
    if (file) {
      setImage(file.name); // Access file.name only if file is not null
    } else {
      setImage("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-black mb-5">
        Update About Section
      </h1>
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Service_title"
            >
              Service Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="service_title"
              type="text"
              placeholder="Service Title"
              value={title}
              onChange={(e) => setServiceTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Service Description
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setServiceDescription(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="read"
            >
              Read
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="read"
              type="text"
              placeholder="Read"
              value={read}
              onChange={(e) => setRead(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image"
            >
              Image:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditServiceSection;
