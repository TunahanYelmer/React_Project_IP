"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ContentUpdateWork from "../../../../../../../components/admin/ContentUpdateAbout";
import { DataProvider } from "../../../../../../../context/DataContext";

const ContentUpdateWorkUpdate = ({ params }: { params: { id: String } }) => {
  if (typeof params.id !== "string") {
    // Handle the case where id is not a string (it could be undefined or an array)
    return null;
  }

  return (
    <DataProvider>
      <div>
        <ContentUpdateWork id={params.id} />
      </div>
    </DataProvider>
  );
};

export default ContentUpdateWorkUpdate;
