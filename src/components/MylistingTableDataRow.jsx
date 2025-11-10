import React from "react";
import { MdDeleteOutline, MdModeEditOutline } from "react-icons/md";
import { useNavigate } from "react-router";

const MylistingTableDataRow = ({ row }) => {
  const navigate = useNavigate();
  return (
    <>
      <tr className="bg-white/30 dark:bg-white/5 border-b backdrop-blur-md ">
        <td className="p-4 font-medium dark:text-white/90 rounded-bl-lg">
          {row._id}
        </td>
        <td className="p-4 font-medium">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={row.image || "jhghgh"} alt={row.name} />
            </div>
          </div>
        </td>
        <td className="p-4 font-medium dark:text-white/90">{row.name}</td>
        <td className="p-4 dark:text-white/70">{row.category}</td>
        <td className="p-4 dark:text-white/70">৳{row.price}</td>
        <td className="p-4 dark:text-white/70">{row.location}</td>
        <td className="p-4 dark:text-white/70">{row.email}</td>

        <td className="p-4 text-right rounded-br-lg">
          <div className="inline-flex gap-4">
            <button
              onClick={() => navigate(`/my-listings/update/${row._id}`)}
              className="dark:text-white/60 hover:text-primary transition-colors cursor-pointer"
            >
              <MdModeEditOutline className="text-2xl" />
            </button>
            <button className="dark:text-white/60 hover:text-red-500 transition-colors cursor-pointer">
              <MdDeleteOutline className="text-2xl" />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default MylistingTableDataRow;
