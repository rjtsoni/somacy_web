// import React from "react";


const Table = ({ title, columns = [], data = [],actions }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border-gray-100 overflow-hidden">

            {title && (
                <div className="px-6 py-4 border-b border-gray-100">
                    <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                </div>
            )}
            <div className="overflow-z-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                            {columns.map((col, index) => (
                                <th
                                    key={index}
                                    className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider"

                                >
                                    {col.header}
                                </th>
                            ))}
                            {actions &&(
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Action
                                </th>
                            )}

                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                        {data.length > 0 ? (
                            data.map((row, rowIndex) => (
                                <tr
                                    key={row.id || rowIndex}
                                    className="hover:bg-gray-50 transition"
                                >
                                    {columns.map((col, colIndex) => (
                                        <td
                                            key={colIndex}
                                            className="px-6 py-4 text-sm text-gray-700"
                                        >
                                            {col.render ? col.render(row, rowIndex) : row[col.accessor]}
                                        </td>
                                    ))}
                                    {actions &&(
                                        <td className="px-6 py-4 text-left">
                                            {actions(row)}
                                        </td>
                                    )}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={columns.length}
                                    className="px-6 py-10 text-center text-gray-400"
                                >No Data available</td>
                            </tr>
                        )}

                    </tbody>

                </table>

            </div>

        </div>
    )
}

export default Table;