import React from "react";

const TableRow = ({ data }:{data:Array<string>}) => {
    return (
        <tr style={{
            padding:"8px",
            border:"1px solid black",
        }} >
            {data.map((item) => {
                return <td key={item}>{item}</td>;
            })}
        </tr>
    );
};

export default TableRow;