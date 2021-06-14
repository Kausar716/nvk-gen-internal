import Pagination from "@material-ui/lab/Pagination";
import  React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

function TablePagination(props) {

  const useStyles = makeStyles(() => ({
      ul: {
        "& .MuiPaginationItem-root": {
          color: "#629c44",
          backgroundColor: "",
          // border: "1px solid #629c44"
        },
  
        "& .MuiPaginationItem-outlined" :{
          border: "1px solid #629c44"
        },
  
        "& .MuiPaginationItem-page.Mui-selected" :{
          backgroundColor: "#629c44",
          color: "white"
        },
  
      }
    }));
    const classes = useStyles();

  return (
      <div>
           <Pagination
          count={props.pageCount}
          onChange = {props.pageChange}
          page = {props.pageNumber}
          // color="secondary"
          variant="outlined"
          shape="rounded"
          classes={{ ul: classes.ul }} 
        />
      </div>
  )
}

export default TablePagination