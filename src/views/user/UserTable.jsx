import { Form, Input, Button, Table } from "antd"
import './userTable.scss'
import { useForm } from "antd/es/form/Form";
import { Select } from "antd";

import { getUserTableDataApi } from '../../api/modules/user'
import { useState } from "react";
import { useEffect } from "react";

const UserTable = () => {
  

  const statusOptions = [
    { label: '禁用', value: 0 },
    { label: '可用', value: 1 }
  ]

  const [form] = useForm()
  const initialValues = {
    nickName: '',
    status: null
  }
  const search = (values) => {
    console.log('search')
    getTableData(values)
  }
  useEffect(() => {
    getTableData()
  }, [])

  const [ tableData, setTableData ] = useState([])
  const [ tableDataTotal, setTableDataTotal ] = useState(0)

  
  const columns = [
    { title: 'ID', dataIndex: 'name' },
    { title: '用户名', dataIndex: 'username' },
    { title: '昵称', dataIndex: 'nickName' },
    { title: '邮箱', dataIndex: 'email' },
    { title: '状态', dataIndex: 'status' },
    { title: '创建时间', dataIndex: 'createTime' },
  ]
  const getTableData = async (searchFormData) => {
    try {
      const params = {
        pageNum: 1,
        pageSize: 10,
        ...searchFormData
      }
      const res = await getUserTableDataApi(params)
      const { list, total } = res.data
      setTableData(list)
      setTableDataTotal(total)


    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="user">
      <div className="title">用户列表</div>
      <div className="searchForm">
        <Form
          form={ form }
          layout="inline"
          initialValues={ initialValues }
          onFinish={ search }>
          <Form.Item name="nickName">
            <Input placeholder="昵称" />
          </Form.Item>
          <Form.Item name="status">
            <Select placeholder="状态" options={ statusOptions } />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">搜索</Button>
          </Form.Item>
        </Form>
      </div>
      <Table
        rowKey="id"
        dataSource={tableData}
        columns={columns} />
    </div>
  )
}

export default UserTable