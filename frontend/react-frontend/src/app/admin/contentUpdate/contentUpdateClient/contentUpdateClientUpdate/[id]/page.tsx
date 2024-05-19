import React from "react";
import ContentUpdateClient from "../../../../../../../components/admin/ContentUpdateClient";
import { DataProvider } from "../../../../../../../context/DataContext";

const ContentUpdateClientUpdate = ({ params }: { params: { id: string } }) => {
  return (
    <DataProvider>
      <div>
        <ContentUpdateClient id={params.id} />
      </div>
    </DataProvider>
  );
};

export default ContentUpdateClientUpdate;
