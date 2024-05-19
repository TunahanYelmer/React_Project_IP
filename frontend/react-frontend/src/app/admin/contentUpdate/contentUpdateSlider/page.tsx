"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ContentUpdateSlider from "../../../../../components/admin/ContentUpdateSlider";
import { DataProvider } from "../../../../../context/DataContext";

const ContentUpdateAboutUpdate = ({ params }: { params: { id: String } }) => {
  if (typeof params.id !== "string") {
    // Handle the case where id is not a string (it could be undefined or an array)
    return null;
  }

  return (
    <DataProvider>
      <div>
        <ContentUpdateSlider id={params.id} />
      </div>
    </DataProvider>
  );
};

export default ContentUpdateAboutUpdate;
