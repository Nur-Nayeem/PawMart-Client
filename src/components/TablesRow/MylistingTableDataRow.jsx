import React from "react";
import { MdDeleteOutline, MdModeEditOutline } from "react-icons/md";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MylistingTableDataRow = ({ row, setRefetch, refetch }) => {
  const navigate = useNavigate();
  const axiosSecureInstance = useAxiosSecure();

  const handleRowClick = () => {
    navigate(`/category-filtered-product/pet-and-supplies/${row._id}`);
  };

  const handleDeleteListing = (e) => {
    e.stopPropagation();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecureInstance
          .delete(`/listings/${row._id}?email=${row.email}`)
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            setRefetch(!refetch);
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: err,
            });
          });
      }
    });
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    navigate(`/my-listings/update/${row._id}`);
  };

  return (
    <>
      <tr
        onClick={handleRowClick}
        className="bg-white/30 dark:bg-white/5 border-b backdrop-blur-md cursor-pointer hover:bg-white/40 dark:hover:bg-white/10 transition-colors"
      >
        <td className="p-4 font-medium dark:text-white/90 rounded-bl-lg">
          {row._id}
        </td>
        <td className="p-4 font-medium">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={row.image || "/fallback.png"}
                alt={row.name}
                onError={(e) => {
                  e.currentTarget.src = "/fallback.png";
                }}
              />
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
              onClick={handleEditClick}
              className="dark:text-white/60 hover:text-primary transition-colors cursor-pointer"
              aria-label="Edit listing"
            >
              <MdModeEditOutline className="text-2xl" />
            </button>
            <button
              onClick={handleDeleteListing}
              className="dark:text-white/60 hover:text-red-500 transition-colors cursor-pointer"
              aria-label="Delete listing"
            >
              <MdDeleteOutline className="text-2xl" />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default MylistingTableDataRow;
