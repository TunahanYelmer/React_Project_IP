import React, { useState } from "react";
import { updateFooterData } from "../../api/api";

interface Props {
  id: string;
}

export interface Footer {
  _id: string;
  link_facebook: string;
  link_twitter: string;
  link_linkedin: string;
  link_youtube: string;
}

const EditFooterSection: React.FC<Props> = ({ id }) => {
  const [link_facebook, setFb] = useState("");
  const [link_twitter, setTw] = useState("");
  const [link_linkedin, setLinkedin] = useState("");
  const [link_youtube, setYoutube] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    const footer: Footer = {
      _id: id,
      link_facebook: link_facebook,
      link_twitter: link_twitter,
      link_linkedin: link_linkedin,
      link_youtube: link_youtube,
    };

    await updateFooterData(id, footer);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-black mb-5">
        Update Footer Section
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
              Footer Facebook Link
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="facebook"
              type="text"
              placeholder="Facebook Link"
              value={link_facebook}
              onChange={(e) => setFb(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Footer Twitter Link
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="twitter"
              type="text"
              placeholder="Twitter Link"
              value={link_twitter}
              onChange={(e) => setTw(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Footer Linkedin Link
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="linkedin"
              type="text"
              placeholder="Linkedin Link"
              value={link_linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Footer Youtube Link
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="youtube"
              type="text"
              placeholder="Youtube Link"
              value={link_youtube}
              onChange={(e) => setYoutube(e.target.value)}
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

export default EditFooterSection;
