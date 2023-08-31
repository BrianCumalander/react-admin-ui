import { DataGrid, GridColDef, GridToolbar, GridValueGetterParams } from "@mui/x-data-grid";
import "./dataTable.scss";

const DataTable = () => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field:"avatar", headerName:"Avatar", width:100,
      renderCell: (params)=>{
        return <img src={params.row.img || "/noavatar.png"} alt="" />
      }
    },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field:"email",
      headerName:"Email",
      width:150,
      editable: true,
    },
    {
      field:"phone",
      headerName:"Phone",
      width:100,
      editable: true,
    },
    {
      field:"createdAt",
      headerName:"Created At",
      width:100,
      editable: true,
    },
    {
      field:"verified",
      headerName:"Verified",
      width:100,
      type: "boolean",
    },
    {
      field:"action",
      headerName:"Action",
      width:200,
      editable: true,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35, verified:true },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42, verified:false },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <div className="dataTable">
      <DataGrid className="dataGrid"
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        //slots displays a table view of the data
        slots={{toolbar:GridToolbar}}
        //slotProps is a prop that contains the props for all slots within a component
        //once the user begins typing in a search term to filter by, slots will wait 500ms before searching the terms typed.
        //This will cut down on the cpu's calculation time cost and benifit the cpu for other things. Also will not appear choppy to the user if the cpu is under intense load at the time that they are typing in their search.
        slotProps={{
            toolbar: {
                showQuickFilter: true,
                quickFilterProps: { debounceMs:500 },
            },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        
      />
    </div>
  );
};

export default DataTable;
