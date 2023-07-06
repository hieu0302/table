import TableCell from "../TableCell";

const TableRow = (props) => {
    const {columns, data} = props;
    return (
        <>
            {
                data.map((row, rowIndex) => 
                    <tr key={rowIndex}>
                        {
                            columns.map((column, colIndex) => <TableCell rowIndex={rowIndex} colIndex={colIndex} column={column} row={row}/>)
                        }
                    </tr>
                )
            }
        </>
    )
}

export default TableRow;