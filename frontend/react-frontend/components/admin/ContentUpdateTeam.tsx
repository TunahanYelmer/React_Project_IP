import React, { useEffect } from "react";

import { updateTeamData } from "../../api/api";
import { useState } from "react";

interface Props {
  id: string;
}

interface Team {
  _id: string;
  name: string;
  description: string;
  image: string;
  link_fb: string;
  link_tw: string;
  link_linkedin: string;
  link_insta: string;
}

const EditAboutSection: React.FC<Props> = ({ id }) => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [link_fb, setFbLink] = useState("");
  const [link_tw, setTwLink] = useState("");
  const [link_linkedin, setLinkedinLink] = useState("");
  const [link_insta, setInstaLink] = useState("");
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
    const team: Team = {
      _id: id,
      name: name,
      description: description,
      image: image,
      link_fb: link_fb,
      link_tw: link_tw,
      link_linkedin: link_linkedin,
      link_insta: link_insta,
    };
    await updateTeamData(id, team);
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
      <h1 className="text-2xl font-bold text-black mb-5">Update Team</h1>
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
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              htmlFor="read"
            >
              Facebook Link
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="read"
              type="text"
              placeholder="Facebook Link"
              value={link_fb}
              onChange={(e) => setFbLink(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="read"
            >
              Twitter Link
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="read"
              type="text"
              placeholder="Twitter Link"
              value={link_tw}
              onChange={(e) => setTwLink(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="read"
            >
              Linkedin Link
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="read"
              type="text"
              placeholder="linkedin Link"
              value={link_tw}
              onChange={(e) => setLinkedinLink(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="read"
            >
              İnstagram Link
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="read"
              type="text"
              placeholder="İnstagram Link"
              value={link_tw}
              onChange={(e) => setInstaLink(e.target.value)}
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

export default EditAboutSection;
