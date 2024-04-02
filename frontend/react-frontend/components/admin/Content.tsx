import React from "react";

const Content: React.FC = () => {
  return (
    <div className="admin-container mx-auto">
      <div className="admin-div bg-white rounded-lg shadow-md p-6">
        <h2 className="admin-h2 text-2xl font-semibold mb-4">Edit Website Sections</h2>

        {/* Edit Slider Section */}
        <h3 className="admin-h3 text-xl font-semibold mb-2">Slider</h3>
        <form>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700">
              Title
            </label>
            <input type="text" id="title" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700">
              Image
            </label>
            <input type="file" id="image" className="w-full p-2 border rounded" />
          </div>
          <button className="admin-button py-2 px-4 rounded-md bg-blue-500 text-white">
            Update Slide
          </button>
        </form>

        {/* Edit About Section */}
        <h3 className="admin-h3 text-xl font-semibold mb-2">About</h3>
        <form>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700">
              Title
            </label>
            <input type="text" id="title" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700">
              Image
            </label>
            <input type="file" id="image" className="w-full p-2 border rounded" />
          </div>
          <button className="admin-button py-2 px-4 rounded-md bg-blue-500 text-white">
            Update About
          </button>
        </form>

        {/* Edit Team Section */}
        <h3 className="admin-h3 text-xl font-semibold mb-2">Team</h3>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input type="text" id="name" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700">
              Image
            </label>
            <input type="file" id="image" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="facebook" className="block text-gray-700">
              Facebook
            </label>
            <input
              type="text"
              id="facebook"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="twitter" className="block text-gray-700">
              Twitter
            </label>
            <input
              type="text"
              id="twitter"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="linkedin" className="block text-gray-700">
              LinkedIn
            </label>
            <input
              type="text"
              id="linkedin"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="instagram" className="block text-gray-700">
              Instagram
            </label>
            <input
              type="text"
              id="instagram"
              className="w-full p-2 border rounded"
            />
          </div>
          <button className="admin-button py-2 px-4 rounded-md bg-blue-500 text-white">
            Update Team
          </button>
        </form>

        {/* Edit Contact Section */}
        <h3 className="admin-h3 text-xl font-semibold mb-2">Contact</h3>
        <form>
          <div className="mb-4">
            <label htmlFor="telephone" className="block text-gray-700">
              Telephone
            </label>
            <input
              type="text"
              id="telephone"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            className="admin-contact-button py-2 px-4 rounded-md bg-blue-500 text-white"
            type="submit"
          >
            Update Contact
          </button>
        </form>

        {/* Edit Services Section */}
        <h3 className="admin-h3 text-xl font-semibold mb-2">Services</h3>
        <form>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700">
              Title
            </label>
            <input type="text" id="title" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700">
              Image
            </label>
            <input type="file" id="image" className="w-full p-2 border rounded" />
          </div>
          <button className="admin-button py-2 px-4 rounded-md bg-blue-500 text-white">
            Update Service
          </button>
        </form>

        {/* Edit Footer Section */}
        <h3 className="admin-h3 text-xl font-semibold mb-2">Footer</h3>
        <form>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700">
              Title
            </label>
            <input type="text" id="title" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="facebook" className="block text-gray-700">
              Facebook
            </label>
            <input
              type="text"
              id="facebook"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="twitter" className="block text-gray-700">
              Twitter
            </label>
            <input
              type="text"
              id="twitter"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="linkedin" className="block text-gray-700">
              LinkedIn
            </label>
            <input
              type="text"
              id="linkedin"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="youtube" className="block text-gray-700">
              YouTube
            </label>
            <input
              type="text"
              id="youtube"
              className="w-full p-2 border rounded"
            />
          </div>
          <button className="admin-button py-2 px-4 rounded-md bg-blue-500 text-white">
            Update Footer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Content;