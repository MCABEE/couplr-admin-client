import Navbar from "@/components/Navbar";
import NavLink from "@/components/NavLink";
import Table from "@/components/photos/Table";
import ViewPhotos from "@/components/photos/ViewPhotos";
import React from "react";

const page = () => {
  return (
    <div>
      <NavLink />
      {/* <Table/> */}
      <ViewPhotos />
    </div>
  );
};

export default page;
