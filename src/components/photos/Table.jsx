import React from "react";

const Table = () => {
  return (
    <div>
      <table className="w-full border-spacing-y-2 border-separate mt-10">
        <thead className="bg-[#C0D8F6] ">
          <tr className=" p-2 bg-[#C0D8F6]">
            <th className="text-base   border-[#F0F4F9] rounded-l-2xl  p-2">No</th>
            <th className="text-base border-l-4 border-[#F0F4F9]  p-2">
              Firstlook_ID
            </th>
            <th className="text-base border-l-4 border-[#F0F4F9]  p-2">
              Current Location
            </th>
            <th className="text-base border-l-4 border-[#F0F4F9]   p-2">Gender</th>

            <th className="text-base border-l-4 border-[#F0F4F9]   p-2">Login</th>
            <th className="text-base border-l-4 border-[#F0F4F9]   p-2 rounded-r-2xl">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="">
          <tr>
            <td className="rounded-t-2xl p-2 bg-[#C0D8F6]" colSpan="6">
              2024 September 01, Sunday{" "}
            </td>
          </tr>
          <tr className="bg-white border-">
            <td className="p-2">1</td>
            <td className="border-l-4 border-[#C0D8F6] p-2">ABC123</td>
            <td className=" border-l-4 border-[#C0D8F6] p-2">New York</td>
            <td className=" border-l-4 border-[#C0D8F6] p-2">New York</td>

            <td className=" border-x-4 border-[#C0D8F6] p-2">Yes</td>
            <td className="  p-2">Active</td>
          </tr>
          <tr className="bg-white">
            <td className=" p-2">1</td>
            <td className=" border-l-4 border-[#C0D8F6] p-2">ABC123</td>
            <td className=" border-l-4 border-[#C0D8F6] p-2">New York</td>
            <td className=" border-l-4 border-[#C0D8F6] p-2">New York</td>

            <td className=" border-x-4 border-[#C0D8F6] p-2">Yes</td>
            <td className=" p-2">Active</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
