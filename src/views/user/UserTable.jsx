import { Form, Input, Button, Table, Tag } from "antd"
import './userTable.scss'
import { useForm } from "antd/es/form/Form";
import { Select } from "antd";

import { getUserTableDataApi } from '../../api/modules/user'
import { useState } from "react";
import { useEffect } from "react";
import {
  USER_STATUS_ENABLE,
  USER_STATUS_DISABLE,
  USER_STATUS_MAP
} from '../../assets/dictionary/user'
import { getSelectOptions } from '../../assets/dictionary'

const UserTable = () => {
  

  const statusOptions = getSelectOptions(USER_STATUS_MAP)

  const [form] = useForm()
  const initialValues = {
    nickName: '',
    status: null
  }
  const search = (values) => {
    getTableData(values)
  }
  
  useEffect(() => {
    getTableData()
  }, [])

  const modifyUser = (id) => {
    console.log(id)
  }

  const [ tableData, setTableData ] = useState([])
  const [ pagination, setPagination ] = useState({
    position: 'topLeft',
    current: 3,
    pageSize: 10,
    total: 100
  })
  
  const columns = [
    { title: 'ID', dataIndex: 'id' },
    { title: '用户名', dataIndex: 'username' },
    { title: '昵称', dataIndex: 'nickName' },
    { title: '邮箱', dataIndex: 'email' },
    {
      title: '状态',
      dataIndex: 'status',
      render: (value) => {
        const tagColorMap = {
          [USER_STATUS_ENABLE]: 'success',
          [USER_STATUS_DISABLE]: 'default'
        }
        return (
          <Tag color={tagColorMap[value]}>
            {USER_STATUS_MAP[value]}
          </Tag>
        )
      }
    },
    { title: '创建时间', dataIndex: 'createTime' },
    {
      title: '操作',
      dataIndex: 'id',
      render: (id) => 
        <Button type="text" danger onClick={() => modifyUser(id)}>
          编辑
        </Button>
    }
  ]
  const getTableData = async (searchFormData) => {
    try {
      const params = {
        current: pagination.current,
        pageSize: pagination.pageSize,
        ...searchFormData
      }
      const res = await getUserTableDataApi(params)
      const { list, total } = res.data
      setTableData(list)
      setPagination({
        ...pagination,
        total
      })

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
            <Select placeholder="状态" options={ statusOptions } allowClear />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">搜索</Button>
          </Form.Item>
        </Form>
      </div>
      <Table
        rowKey="id"
        dataSource={tableData}
        columns={columns}
        pagination={pagination} />
    </div>
  )
}

export default UserTable