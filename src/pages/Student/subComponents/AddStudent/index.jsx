import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Button, Modal, Row, Col } from 'react-bootstrap';
const AddStudent = (props) => {
    const { onAdd } = props;
    const [show, setShow] = useState(false);
    const [student, setStudent] = useState(null)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setStudent({
            ...student,
            [name]: value
        })
    }
    
    const handleSubmit = (e) => {
        // Chặn load lại page
        e.preventDefault();
        // Gọi hàm thực hiện thêm học sinh
        onAdd(student);
        // Sau khi thêm xong thì reset lại giá trị cho student
        setStudent(null);
        // Đóng form
        handleClose();
    }

    return (
        <>
            <Button variant="success" onClick={handleShow} style={{textAlign: 'right', float: 'right', marginBottom: '30px'}}>
                Thêm học sinh mới
            </Button>
            <Form onSubmit={handleSubmit}>
                <Modal show={show} size='lg' onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Thêm học sinh mới</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row className='mb-3'>
                            <Form.Group as={Col} controlId="form.fullName">
                                <Form.Label>Họ và tên</Form.Label>
                                <Form.Control type="text" onChange={handleInputChange} placeholder="Nhập họ và tên" name="fullName" required />
                            </Form.Group>
                            <Form.Group as={Col} controlId="form.id">
                                <Form.Label>Mã học sinh</Form.Label>
                                <Form.Control type="text" onChange={handleInputChange} placeholder="Nhập mã học sinh" name="id" required />
                            </Form.Group>
                        </Row>
                        <Row className='mb-3'>
                            <Form.Group as={Col} controlId="form.age">
                                <Form.Label>Tuổi</Form.Label>
                                <Form.Control type="number" onChange={handleInputChange} placeholder="Nhập tuổi" name="age" required />
                            </Form.Group>
                            <Form.Group as={Col} controlId="form.sex">
                                <Form.Label>Giới tính</Form.Label>

                                <Form.Select aria-label="Chọn giới tính" required name='sex'>
                                    <option value="0">Nữ</option>
                                    <option value="1">Nam</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Form.Group className='mb-3' controlId="form.address">
                            <Form.Label>Địa chỉ</Form.Label>
                            <Form.Control type="text" onChange={handleInputChange} placeholder="Nhập địa chỉ" name="address" required />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Hủy
                        </Button>
                        <Button variant="primary" type='submit' onClick={handleSubmit}>
                            Thêm
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Form>
        </>
    );
}

export default AddStudent;