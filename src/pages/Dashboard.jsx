// const Dashboard = ({ setIsAdminLoggedIn }) => {
//   const logout = async () => {
//     await fetch("http://localhost:5000/api/auth/logout", {
//       method: "POST",
//       credentials: "include"
//     });

//     // 🔥 Show navbar + go back to login
//     setIsAdminLoggedIn(false);
//     window.location.reload(); // optional but clean reset
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Admin Dashboard 🔥</h1>
//       <p>Welcome bro 😎</p>

//       <button onClick={logout} style={{ marginTop: "20px" }}>
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";

const Dashboard = ({
  currentPage,
  setCurrentPage,
  totalPages,
  currentData,
  updateStatus,
  handleDelete,
  selectedMessage,
  setSelectedMessage,
  formatDate,
  isDark,
  stats
}) => {
  return (
    <>
      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {Object.entries(stats).map(([k, v]) => (
          <div
            key={k}
            className={`p-4 rounded-xl shadow ${
              isDark
                ? "bg-gray-800 text-white"
                : "bg-white text-black"
            }`}
          >
            <p className="text-sm capitalize text-gray-400">{k}</p>
            <p className="text-xl font-bold">{v}</p>
          </div>
        ))}
      </div>

      {/* TABLE */}
      <div
        className={`p-4 rounded-xl shadow ${
          isDark ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-left">

            {/* HEADER */}
            <thead
              className={`border-b text-xs md:text-sm ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <tr>
                <th className="p-3">No</th>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Phone</th>
                <th className="p-3 hidden md:table-cell">Company</th>
                <th className="p-3">Message</th>
                <th className="p-3 hidden md:table-cell">Date</th>
                <th className="p-3 hidden md:table-cell">Time</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {currentData.map((c, i) => {
                const { date, time } = formatDate(c.created_at);

                return (
                  <tr
                    key={c.id}
                    className={`border-b ${
                      isDark
                        ? "hover:bg-gray-700"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <td className="p-3 text-xs md:text-sm">
                      {(currentPage - 1) * 5 + i + 1}
                    </td>

                    <td className="p-3 font-medium">{c.name}</td>

                    <td className="p-3 break-words max-w-[120px]">
                      {c.email}
                    </td>

                    <td className="p-3">{c.phone}</td>

                    <td className="p-3 hidden md:table-cell">
                      {c.company}
                    </td>

                    {/* MESSAGE */}
                    <td className="p-3">
                      <button
                        onClick={() => setSelectedMessage(c.message)}
                        className="text-blue-500 hover:underline text-sm"
                      >
                        {c.message?.length > 20
                          ? c.message.slice(0, 20) + "..."
                          : c.message}
                      </button>
                    </td>

                    <td className="p-3 hidden md:table-cell">
                      {date}
                    </td>

                    <td className="p-3 hidden md:table-cell">
                      {time}
                    </td>

                    {/* STATUS */}
                    <td className="p-3">
                      <select
                        value={c.status || "new"}
                        onChange={(e) =>
                          updateStatus(c.id, e.target.value)
                        }
                        className={`px-2 py-1 rounded text-sm ${
                          isDark
                            ? "bg-gray-700 text-white border-gray-600"
                            : "bg-white border-gray-300"
                        }`}
                      >
                        <option value="new">New</option>
                        <option value="reviewed">Reviewed</option>
                        <option value="contacted">Contacted</option>
                        <option value="closed">Closed</option>
                      </select>
                    </td>

                    {/* ACTION */}
                    <td className="p-3">
                      <button
                        onClick={() => handleDelete(c.id)}
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>

          </table>
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center mt-6 gap-2 items-center flex-wrap">

          {/* PREV */}
          <button
            onClick={() =>
              setCurrentPage((p) => Math.max(p - 1, 1))
            }
            className="px-3 py-1 rounded bg-gray-600 text-white text-sm"
          >
            Prev
          </button>

          {totalPages <= 5 ? (
            [...Array(totalPages)].map((_, i) => {
              const page = i + 1;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 rounded text-sm ${
                    page === currentPage
                      ? "bg-blue-600 text-white"
                      : "bg-gray-300"
                  }`}
                >
                  {page}
                </button>
              );
            })
          ) : (
            <>
              {currentPage > 3 && (
                <>
                  <button
                    onClick={() => setCurrentPage(1)}
                    className="px-3 py-1 bg-gray-300 rounded text-sm"
                  >
                    1
                  </button>
                  <span>...</span>
                </>
              )}

              {[currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2]
                .filter((p) => p > 0 && p <= totalPages)
                .map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1 rounded text-sm ${
                      page === currentPage
                        ? "bg-blue-600 text-white"
                        : "bg-gray-300"
                    }`}
                  >
                    {page}
                  </button>
                ))}

              {currentPage < totalPages - 2 && (
                <>
                  <span>...</span>
                  <button
                    onClick={() => setCurrentPage(totalPages)}
                    className="px-3 py-1 bg-gray-300 rounded text-sm"
                  >
                    {totalPages}
                  </button>
                </>
              )}
            </>
          )}

          {/* NEXT */}
          <button
            onClick={() =>
              setCurrentPage((p) =>
                Math.min(p + 1, totalPages)
              )
            }
            className="px-3 py-1 rounded bg-gray-600 text-white text-sm"
          >
            Next
          </button>

        </div>
      </div>

      {/* MESSAGE POPUP */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center px-4">

          <div
            className={`w-full max-w-md max-h-[80vh] overflow-y-auto p-4 sm:p-6 rounded-2xl shadow-xl ${
              isDark
                ? "bg-gray-800 text-white"
                : "bg-white text-black"
            }`}
          >
            <h2 className="font-bold mb-3 text-base sm:text-lg">
              Message
            </h2>

            <p className="text-sm leading-relaxed break-words">
              {selectedMessage}
            </p>

            <button
              onClick={() => setSelectedMessage(null)}
              className="mt-4 w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm"
            >
              Close
            </button>
          </div>

        </div>
      )}
    </>
  );
};

export default Dashboard;