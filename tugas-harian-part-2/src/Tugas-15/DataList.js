import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router"
import { DataContextnew } from "./dataContext"
import { Button, Table, Tag, Space } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
const DataListNew = () => {
    let history = useHistory()


    const { input, setInput, dataMahasiswa, functions, fetchStatus, setFetchStatus } = useContext(DataContextnew)
    const { fetchData, getScore,  functionDelete, functionUpdate, functionEdit } = functions

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
        let idMahasiswa = parseInt(event.currentTarget.value)
        history.push(`/tugas-15/edit/${idMahasiswa}`)
        // functionUpdate(idMahasiswa)
    }

    const handleCreate = () => {
        history.push('/tugas-15/create')
        setInput({
            nama: "",
            course: "",
            score: 0
        })
    }

    const columns = [
        {
          title: 'Nama',
          dataIndex: 'name',
          key: 'name',
        },
        {
            title: 'Mata Kuliah',
            dataIndex: 'course',
            key: 'course',
        },
        {
            title: 'Nilai',
            dataIndex: 'score',
            key: 'score',
        },
        {
            title: 'Indeks Nilai',
            dataIndex: 'indexScore',
            key: 'indexScore',
        },
        {
          title: 'Action',
          key: 'action',
          render: (e, index) => (
            <Space >
                <button className="edit-btn" value={e.id}  onClick={handleEdit}><EditOutlined /></button>
                <button className="delete-btn"  value={e.id}  onClick={handleDelete}><DeleteOutlined /></button> 
            </Space>
          ),
        },
      ];
      
    const data = dataMahasiswa

    return (
        <div className="list">
        <h1>Daftar Nilai Mahasiswa</h1>
        <Button type="primary" className="btn-create" style={{marginLeft: 400 }} onClick={handleCreate} >
            Tambah Data Nilai Mahasiswa
        </Button>
        <h6>Use Context</h6>
        <Table className="table-mhs" columns={columns} dataSource={dataMahasiswa} />

    </div>
    )
}

export default DataListNew
