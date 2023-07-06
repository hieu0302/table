import MyTable from "../../components/Table"
import AddStudent from "./subComponents/AddStudent"
import { useState } from "react"
import { Button } from 'react-bootstrap';
const defaultData = [
    {
        id: 'std1',
        fullName: 'Nguyen Van A',
        address: 'Đà Nẵng',
        age: 20,
        sex: 1
    },
    {
        id: 'std2',
        fullName: 'Nguyen Van B',
        age: 18,
        address: 'Hà Nội',
        sex: 0
    },
    {
        id: 'std3',
        fullName: 'Nguyen Van C',
        age: 18,
        address: 'Sài Gòn',
        sex: 1
    },
    {
        id: 'std4',
        fullName: 'Nguyen Van D',
        age: 17,
        address: 'Vũng Tàu',
        sex: 1
    },
]

const Student = () => {
    const [students, setStudents] = useState(defaultData)
    
    const columns = [
        {
            title: 'STT',
            width: 50,
            render: (row, value, index) => {
                return index + 1;
            }
        },
        {
            title: 'Họ và tên',
            dataIndex: 'fullName',
            width: 200,
            sortable: true,
            render: (_, value) => {

                return <b>{value}</b>
            }
        },
        {
            title: 'Mã học sinh',
            dataIndex: 'id',
            width: 200,
            sortable: true,
        },
        {
            title: 'Tuổi',
            dataIndex: 'age',
            width: 100,
            sortable: true,
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            width: 200,
            sortable: true,
        },
        {
            title: 'Giới tính',
            dataIndex: 'sex',
            width: 100,
            sortable: true,
            render: (_, value) => {
                let sexStr = null, color = null;
                if (value === 1) {
                    sexStr = 'Nữ';
                    color = 'green'
                } else {
                    sexStr = 'Nam';
                    color = 'blue';
                }
                return <div style={{color}}>{sexStr}</div>
            }
        },
        {
            title: 'Thao tác',
            width: 200,
            sortable: false,
            render: (row, _) => {
                return [
                    <Button variant="danger">Xóa</Button>,
                    <>{' '}</>,
                    <Button variant="warning">Sửa</Button>,
                ]
            }
        }
    ]

    const handleAddStudent = (student) => {
        setStudents([...students, student])
    }

    const handleSorting = (sortField, sortOrder) => {
        if (sortField) {
            const sorted = [...students].sort((a, b) => {
                if (a[sortField] === null) return 1;
                if (b[sortField] === null) return -1;
                if (a[sortField] === null && b[sortField] === null) return 0;
                return (
                    a[sortField].toString().localeCompare(b[sortField].toString(), "vi", {
                        numeric: true,
                    }) * (sortOrder === "asc" ? 1 : -1)
                );
            });
            setStudents(sorted);
        }
    };

    return (
        <div className="container" style={{paddingTop: 20}}>
            <h2>Quản lý học sinh</h2>
            <AddStudent onAdd={handleAddStudent}/>
            {' '}
            <Button variant="primary" style={{textAlign: 'right', float: 'right', marginBottom: 30, marginRight: 5}}>
                Sắp xếp
            </Button>
            <br />
            <MyTable columns={columns} data={students} handleSorting={handleSorting} />
        </div>
    )
}

export default Student;