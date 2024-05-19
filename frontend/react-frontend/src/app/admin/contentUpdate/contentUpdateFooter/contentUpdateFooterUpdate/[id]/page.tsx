import React from "react";
import ContentUpdateFooter from "../../../../../../../components/admin/ContentUpdateContact";
import { DataProvider } from "../../../../../../../context/DataContext";

const ContentUpdateContactUpdate = ({ params }: { params: { id: string } }) => {
  return (
    <DataProvider>
      <div>
        <ContentUpdateFooter id={params.id} />
      </div>
    </DataProvider>
  );
};

export default ContentUpdateContactUpdate;
