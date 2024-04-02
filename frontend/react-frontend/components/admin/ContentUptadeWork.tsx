import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  title: yup.string().required(),
  service_title: yup.string().required(),
  service_description: yup.string().required(),
  read: yup.boolean(),
  description: yup.string().required(),
  image: yup.mixed().required(),
});

interface FormValues {
  title: string;
  service_title: string;
  service_description: string;
  read: boolean;
  description: string;
  image: FileList;
}

const UpdateWorkSection: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    // Handle form submission here
    console.log(data);
  };

  return (
    <div className="admin-section update-section bg-white p-6">
      <div className="admin-container">
        <div className="admin-col">
          <div className="admin-div">
            <h2 className="admin-h2 text-2xl font-bold mb-4">
              Edit Work Section
            </h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
              encType="multipart/form-data"
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="title"
                  name="title"
                  ref={register}
                />
                {errors.title && (
                  <p className="text-red-500">{errors.title.message}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="service_title"
                >
                  Service Title
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="service_title"
                  name="service_title"
                  ref={register}
                />
                {errors.service_title && (
                  <p className="text-red-500">{errors.service_title.message}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="service_description"
                >
                  Service Description
                </label>
                <textarea
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="service_description"
                  name="service_description"
                  rows={4}
                  ref={register}
                />
                {errors.service_description && (
                  <p className="text-red-500">
                    {errors.service_description.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="read"
                >
                  Read
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="read"
                  name="read"
                  type="checkbox"
                  ref={register}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="description"
                  name="description"
                  rows={4}
                  ref={register}
                />
                {errors.description && (
                  <p className="text-red-500">{errors.description.message}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="image"
                >
                  Image
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="image"
                  name="image"
                  type="file"
                  ref={register}
                />
                {errors.image && (
                  <p className="text-red-500">{errors.image.message}</p>
                )}
              </div>
              <button
                className="admin-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Update Work
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateWorkSection;
