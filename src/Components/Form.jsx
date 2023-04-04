import React, { useState } from 'react'
import 'antd/dist/reset.css'
import { Button, DatePicker, Input, Table } from 'antd'
import "../App.css"
// import DataList from './DataList'

const Form = () => {
    const getLocalItems = () => {
        let list = localStorage.getItem('lists');

        if (list) {
            return JSON.parse(localStorage.getItem('lists'));
        } else {
            return []
        }

    }
    const datamain = { Title: "", Desc: "", Tags: [] };
    const [data, setData] = useState(datamain);
    const [records, setRecords] = useState(getLocalItems())
    // const [title,setTitle] = useState("");
    // const [desc,setDesc] = useState("");
    // const [tags,setTags] = useState(["tag1","tag2","tag3"]);
    function handleInput(e) {
        setData({ ...data, [e.target.name]: e.target.value })
        // console.log(vehicleRegisteration)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecord = { ...data, id: new Date().getTime().toString() };
        setRecords([...records, newRecord]);
        setData({
            Title: "",
            Desc: "",
            Tags: []
        })
        console.log(records);
    }
    const dataSource = records.map((record,index)=>{
        return(
            [
                {
                    key : index,
                    title : record.Title,
                    desc : record.Desc,
                    tags : record.Tags
                }
            ]
        )
    })
    const columns = [
        {
            title: "Time",
            dataIndex: "key"
        },
        {
            title: "Title",
            dataIndex: "title",
            key: "title"
        },
        {
            title: "Description",
            dataIndex: "desc",
            key: "desc"
        },
        // {
        //     title : "Due Date"
        // },
        {
            title: "Tag",
            dataIndex: "tags",
            key: "tags"
        }
        // {
        //     title : "Status"
        // }

    ];
    return (
        <>
            <div className='main-form'>
                <div className='title'>
                    <h1>Title</h1>
                    <Input
                        placeholder='Add Title'
                        // style={{ width: "50%" }}
                        allowClear
                        required
                        onChange={handleInput}
                        value={data.Title}
                        name='Title'
                    ></Input>
                </div>
                <div className='desc'>
                    <h1>Description</h1>
                    <Input
                        placeholder='Add Desc'
                        // style={{ width: "50%" }}
                        allowClear
                        required
                        onChange={handleInput}
                        value={data.Desc}
                        name='Desc'
                    ></Input>
                </div>
                <div className='date'>
                    <h1>Due date</h1>
                    <DatePicker></DatePicker>
                </div>
                <div className='tags'>
                    <h1>Add Tags</h1>
                    <Input
                        placeholder='Add Desc'
                        // style={{ width: "50%" }}
                        allowClear
                        onChange={handleInput}
                        value={data.Tags}
                        name='Tags'
                    >
                    </Input>
                </div>
                <div>

                    <Button
                        className='btn'
                        type='primary'
                        onClick={handleSubmit}
                    >Submit</Button>
                </div>
            </div>
            <Table
                dataSource={dataSource}
                columns={columns}
            >

            </Table>
        </>
    )
}

export default Form

