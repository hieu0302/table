import { useState } from 'react';
const TableHeader = (props) => {
    const {columns, handleSorting } = props;
    const [sortField, setSortField] = useState("");
    const [order, setOrder] = useState("asc");
    const handleSortingChange = (accessor) => {
        const sortOrder = accessor === sortField && order === "asc" ? "desc" : "asc";
        setSortField(accessor);
        setOrder(sortOrder);
        handleSorting(accessor, sortOrder);
        console.log(accessor)
    };
    
    return (
        <tr>
            {
                columns.map((column, index) => {
                    const cl = column.sortable
                     ? sortField ===  column.dataIndex && order === "asc"
                     ? "up"
                     : sortField ===  column.dataIndex && order === "desc"
                     ? "down"
                     : "default"
                    : "";
                  
                    return <th 
                        className={cl}
                        style={{width: column.width}}
                        key={index}
                        onClick={column.sortable ? () => handleSortingChange(column.dataIndex) : null}
                    >
                        {column.title}
                        
                        
                    </th>
                })
            }
        </tr>
    )
}


//danh sach hoc sinh

export default TableHeader;