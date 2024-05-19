import React from "react";
import ContentUpdateContact from "../../../../../../../components/admin/ContentUpdateContact";
import { DataProvider } from "../../../../../../../context/DataContext";

const ContentUpdateContactUpdate = ({ params }: { params: { id: string } }) => {
  return (
    <DataProvider>
      <div>
        <ContentUpdateContact id={params.id} />
      </div>
    </DataProvider>
  );
};

export default ContentUpdateContactUpdate;
