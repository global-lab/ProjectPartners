import React, {Component} from "react";
import TableData from "./IQPTableData";
import MaterialTable from "material-table";
import Box from "@material-ui/core/Box";

const colnames = [
    {
        title: 'Sponsor', field: 'Sponsor'
    },
    {
        title: 'Location', field: 'Location'
    }
]

const IQPTable =  ({ tabledata }) => {
        return(
            <div>
                <Box mt={2} />
                <MaterialTable title="IQPs"
                    columns={colnames.map((c) => ({ ...c, tableData: undefined }))}
                               data={tabledata}
                               options={{
                                   search: true,
                                   pageSize:200,
                                   pageSizeOptions: [10]
                               }}/>
            </div>
        )
}

export default IQPTable;

