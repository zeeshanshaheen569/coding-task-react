import React from "react";
import TableRow from "./TableRow";
import TableHeadItem from "./TableHead";

const Table = ({ theadData, tbodyData, customClass }:{
    theadData:Array<string>,
    tbodyData:{
        id:string,
        items:Array<string>
    }[]
    ,
    customClass:any
}) => {
    console.log(customClass)
    return (
        <table 
        style={{
            fontFamily:"Arial, Helvetica, sans-serif",
            borderCollapse:"collapse",
            width:"100%",
        }}>
            <thead style={{
            border:"1px solid #ddd",
            padding:"8px",
            paddingTop:"12px",
            paddingBottom:"12px",
            textAlign:"left",
            backgroundColor:"#04AA6D",
            color:"white"
        }}>
                <tr > 
                    {theadData.map((h:any) => {
                        return <TableHeadItem key={h} item={h} />;
                    })}
                </tr>
            </thead>
            <tbody>
                {tbodyData.map((item) => {
                    return <TableRow key={item.id} data={item.items}  />;
                })}
            </tbody>
        </table>
    );
};

export default Table;