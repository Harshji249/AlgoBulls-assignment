import React from 'react'
import 'antd/dist/reset.css'
import { Table } from 'antd'

const DataList = () => {
    const columns =[
        {
            title : "Time"
        },
        {
            title : "Title"
        },
        {
            title : "Description"
        },
        {
            title : "Due Date"
        },
        {
            title : "Tag"
        },
        {
            title : "Status"
        }

    ];
  return (
    <>
    <Table
    columns={columns}></Table>      
    </>
  )
}

export default DataList
