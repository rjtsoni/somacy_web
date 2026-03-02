import React from 'react'
import { render } from '@testing-library/react'
import { Download } from 'lucide-react';
import Table from '../Component/Table';

const LabReports = () => {
    const columns = [
        {
            header: "Test Name",
            accessor: "test_name",
        },
        {
            header: "Date",
            accessor: "date"
        },
        {
            header: "Patient",
            accessor: "patient",
        },
        {
            header: "Lab Partner",
            accessor: "lab_partner",
        },
        {
            header: "Status",
            accessor: "status",
            render: (row) => (
                <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${row.status === "Ready"
                            ? "bg-green-100 text-green-600"
                            : "bg-gray-100 text-gray-500"
                        }`}
                >
                    {row.status}
                </span>
            ),
        },
    ];

    const handleDownload =(row)=>{
        console.log("downloading report for:",row.text_name);
    };

    

    const data = [
        {
            id: 1,
            test_name: "CBC(Compele Blood Count)",
            date: "Oct 15, 2026",
            patient: "Ramprkash",
            lab_partner: "Somacy Labs",
            status: "Ready",
        },
        {
            id: 2,
            test_name: "Lipid profile",
            date: "Sep 28,2026",
            patient: "Cheten",
            lab_partner: "City Diagnostics",
            status: "Ready",
        },
    ];


    return (
        <div className='p-6'>
            <Table 
            title="Report History"
            columns={columns} data={data} 
            actions={(row)=>(
                <button 
                onClick={()=>handleDownload(row)}
                className='text-blue-600 hover:text-blue-800 transition text-sm'
                >
                    <Download size={18}/>

                </button>
            )}
            
            />



        </div>
    )

};


export default LabReports;