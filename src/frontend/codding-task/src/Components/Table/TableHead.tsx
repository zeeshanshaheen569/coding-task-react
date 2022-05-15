import React from "react";

const TableHeadItem = ({ item }:{item:string}) => {
    return (
        <td style={{
                padding:"8px",
                border:"1px solid black",
            }} 
            title={item}>
            {item}
        </td>
    );
};

export default TableHeadItem;