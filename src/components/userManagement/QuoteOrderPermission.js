import React, { useEffect, useState } from 'react'
import {  Tabs,  TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {connect} from "react-redux";

import {getRolesList,showRole,addRoler,updateRole,deleteRole,getPermissionList,handleUserUpdateUserPermission,
    handleUserAccessInputAction,handleUserSelect, resetUserData} from "../../actions/userAccessAction";
import {getUsersList,showUser} from "../../actions/userAction";
import { Link ,withRouter} from "react-router-dom";



function QuoteOrderPermission(props) {
    const [website_url,setWebsiteUrl] = useState("");
    const [allChecked, setAllChecked] = useState(false)
    const [isChecked, setIsChecked]=useState(false)

     const [permissionListHere, setPermissionListHere] =useState([]);
  
    let permissionList = props.finalPermissionLists


    useEffect (()=>{

        setPermissionListHere(permissionList);
       
        props.getPermissionList();

    },[]);

   // console.log("permissionList123", props.finalPermissionLists)
    
    console.log("permissionListHere", permissionListHere)
    // if(permissionList){
     let finalQOPermissions  = permissionListHere.filter(x=> x.id===99 || x.id===100 || x.id===101 
        || x.id===102 || x.id===103 || x.id===104 || x.id===105 || x.id===106
        || x.id===107 || x.id===108 || x.id===109 )
    //     setPermissionListHere(permissionList)|| 100||101||102||103||104||105||106||107||108||109
    // }
    console.log("quotesAndOrdersPemissionList", finalQOPermissions)

    const handleChange=(e)=>{

         const {name, checked, id} = e.target;

         if(name === "SelectAll"){
                    let tempUserP = finalQOPermissions.map(user=>{return {...user, isChecked:checked}});
                    setPermissionListHere(tempUserP)
         }

         else{

        let tempUserP = finalQOPermissions.map((user) =>
            user.name === name ? { ...user, isChecked: checked} : user);
            setPermissionListHere(tempUserP);

    }
    };




    return (
        <div>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input"  
                        onChange={handleChange} 
                        checked={finalQOPermissions.filter((user) => user?.isChecked !== true).length < 1}
                        name="SelectAll" id="SelectAll" />
                        <label class="custom-control-label pl-2" for="SelectAll" >Select All</label>
                    </div>
           


                 { finalQOPermissions.map((userP)=>(
                       <div className="row">
                            <div className="col-md-6 col-lg-6">
                    {/* <div class="custom-control custom-checkbox" > */}
                        <input type="checkbox" class="custom-control-input" 
                         name={userP.name} 
                         id={userP.id}
                        onChange={handleChange}
                        checked={userP?.isChecked || false}
                          />
                        <label class="custom-control-label pl-2" for={userP.id}>{userP.name}</label>
                    </div>
                    </div>
                    // </div>
                 ))}




                    

            
        </div>
       
    )
}




const mapStateToProps = (state)=> (
    // console.log(state.customerReducer.payload)
    {
        roles:state.userAccessReduser.roles,
        users:state.userReduser.users.payload,
        user:state.userReduser,
        finalPermissionLists:state.userAccessReduser.finalPermissionLists,
        temp:state.userAccessReduser,
        reduxSelectedUser:state.userAccessReduser.selectedUser
    }

)

export default connect(mapStateToProps,{getRolesList,showRole,showUser,addRoler,updateRole,
   
    deleteRole,
    getUsersList
    ,getPermissionList,
    handleUserSelect,
    handleUserUpdateUserPermission
,handleUserAccessInputAction, resetUserData})(QuoteOrderPermission)
