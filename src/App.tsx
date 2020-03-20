import { Table } from 'antd';
import React from 'react';
import './App.css';

const { Column } = Table 

function App() {

  const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

  return (
    <div className="App">
      <Table
      dataSource={data}
      >
      <Column
        key="__status"
        dataIndex="__status"
        fixed="left"
        width={50}
        onCell={(record) => {
          return {
            record,
            dataIndex: "__status",
          }
        }}
      />
      <Column title="Name" dataIndex="name" key="name" />
      <Column title="Age" dataIndex="age" key="age" />
      <Column title="Address" dataIndex="address" key="address" />
      
    </Table>
    </div>
  );
}

export default App;
