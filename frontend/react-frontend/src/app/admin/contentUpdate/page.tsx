import React from "react";
import ContentUpdate from "../../../../components/admin/ContentUpdate";
import { DataProvider } from "../../../../context/DataContext";

function UpdateContentPage() {
  return (
    <DataProvider>
      <div className="bg-white">
        {" "}
        <ContentUpdate />{" "}
      </div>
    </DataProvider>
  );
}

export default UpdateContentPage;
