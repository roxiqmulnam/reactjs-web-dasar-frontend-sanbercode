import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router"
import { Button, Table, Space } from 'antd';
import { Context } from "../../config/Context";
import './index.css'

const MobileList = () => {
    let history = useHistory()


    const { setInput, dataGame, functions, fetchStatus, setFetchStatus } = useContext(Context)
    const { fetchData, functionDelete} = functions

    useEffect(() => {

        if (fetchStatus === false) {
            fetchData()
            setFetchStatus(true)
        }

    }, [fetchData, fetchStatus, setFetchStatus])



    const handleDelete = (event) => {
        let idMahasiswa = parseInt(event.currentTarget.value)

        functionDelete(idMahasiswa)
    }

    const handleEdit = (event) => {
        let idGameList = parseInt(event.currentTarget.value)
        history.push(`/mobile-list/edit/${idGameList}`)
        // functionUpdate(idMahasiswa)
    }

    const handleCreate = () => {
        history.push('/mobile-list/create-mobile-form')
        setInput({
            name: "",
            category: "",
            release_year: 0,
            size: 0,
            price: 0,
            rating: 0,
            imgUrl:""
        })
    }

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Year',
            dataIndex: 'release_year',
            key: 'release_year',
        },
        {
            title: 'Size',
            dataIndex: 'size',
            key: 'size',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Rating',
            dataIndex: 'rating',
            key: 'rating',
        },
        {
            title: 'Image_url',
            dataIndex: 'image_url',
            key: 'image_url',
        },
        {
            title: 'is_android_app',
            dataIndex: 'indexScore',
            key: 'indexScore',
        },
        {
            title: 'is_ios_app',
            dataIndex: 'indexScore',
            key: 'indexScore',
        },
        {
          title: 'Action',
          key: 'action',
          render: (e) => (
            <Space >
                <button className="edit-btn" value={e.id}  onClick={handleEdit}>edit</button>
                <button className="delete-btn"  value={e.id}  onClick={handleDelete}>delete</button> 
            </Space>
          ),
        },
      ];
      
    const data = dataGame

    return (
        <div className="list">
        <h1>List Mobile App</h1>
        <Button type="primary" className="btn-create" onClick={handleCreate} >
            Create Data
        </Button>
        <Table className="table-mhs" columns={columns} dataSource={data} />

    </div>
    )
}

export default MobileList
