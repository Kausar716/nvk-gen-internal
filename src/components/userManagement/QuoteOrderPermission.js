import React, { useEffect, useState } from 'react'
import {  Tabs,  TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {connect} from "react-redux";
import './style.css';
import {getRolesList,showRole,addRoler,updateRole,deleteRole,getPermissionList,handleUserUpdateUserPermission,
    handleUserAccessInputAction,handleUserSelect, resetUserData} from "../../actions/userAccessAction";
import {getUsersList,showUser} from "../../actions/userAction";
import { Link ,withRouter} from "react-router-dom";



function QuoteOrderPermission(props) {
    const [website_url,setWebsiteUrl] = useState("");
    // const [allChecked, setAllChecked] = useState(false)
    const [isChecked, setIsChecked]=useState(false)
    //const [isCheckedPO, setIsCheckedPO]=useState(false)

    const [quotePermissionListHere, setquotePermissionListHere] =useState([]);
    const [purchasePermissionListHere, setPurchasePermissionListHere] =useState([]);
    const [allPermisssions, setAllPermisssions] =useState([]);
  
    let permissionList = props.finalPermissionLists


    useEffect (()=>{

        setquotePermissionListHere(permissionList);
        setPurchasePermissionListHere(permissionList);
        setAllPermisssions(permissionList)
       
        props.getPermissionList();

    },[]);

   // console.log("permissionList123", props.finalPermissionLists)
    
    console.log("quotePermissionListHere", quotePermissionListHere)
    // if(permissionList){
     let finalQOPermissions  = quotePermissionListHere.filter(x=>
         x.id===99 || x.id===100 || x.id===101 
        || x.id===102 || x.id===103 || x.id===104 || x.id===105 || x.id===106
        || x.id===107 || x.id===108 || x.id===109  || x.id===110 || x.id===111 
        || x.id===112 || x.id===120 || x.id===121)
    //     setquotePermissionListHere(permissionList)|| 100||101||102||103||104||105||106||107||108||109
    // }121



    let finalPOpermissions = purchasePermissionListHere.filter(x=> x.id===122 || x.id===123 || x.id===124 || x.id===125 || x.id===126 || x.id===127 )
    

    
     let finalAllCheckBox = allPermisssions.filter(x=> x.id===99 || x.id===100 || x.id===101 
        || x.id===102 || x.id===103 || x.id===104 || x.id===105 || x.id===106
        || x.id===107 || x.id===108 || x.id===109 || x.id===115 || x.id===118 || x.id===119)
    
    console.log("quotesAndOrdersPemissionList1", finalAllCheckBox, allPermisssions)


    const handleChange=(e)=>{

         const {name, checked, id } = e.target;

         if(name === "SelectAllQuote"){
                    let tempUserP = finalQOPermissions.map(user=>{return {...user, isChecked:checked}});
                    setquotePermissionListHere(tempUserP)
         }

         else  if(name === "SelectAllPO"){
            let tempUserPO = finalPOpermissions.map(user=>{return {...user, isChecked:checked}});
            setPurchasePermissionListHere(tempUserPO)
         }


        else if(name==="SelectAllEverything"){
            let finalAllPermission = [...quotePermissionListHere, ...purchasePermissionListHere]
             let tempALL =  finalAllPermission.map(user=>{return {...user, isChecked:checked}});
            setAllPermisssions( tempALL)
            setPurchasePermissionListHere(tempALL)
            setquotePermissionListHere(tempALL)
            }

        

        
         else{
        let tempUserP = finalQOPermissions.map((user) =>
            user.name === name ? { ...user, isChecked: checked} : user);
            setquotePermissionListHere(tempUserP);

            let tempUserPO = finalPOpermissions.map((user) =>
            user.name === name ? { ...user, isChecked: checked} : user);
            setPurchasePermissionListHere(tempUserPO);
        

            // let finalAllPermission = [quotePermissionListHere, purchasePermissionListHere]
            //  let tempALL = finalAllPermission.map((user) =>
            //  user.name === name ? { user, isChecked: checked} : user);
            // setAllPermisssions(tempALL);

    }
    };


    const handleChangePO=(e)=>{

        const {name, checked, id } = e.target;

         if(name === "SelectAllPO"){
            let tempUserPO = finalPOpermissions.map(user=>{return {...user, isChecked:checked}});
            setPurchasePermissionListHere(tempUserPO)
         }

        else if(name==="SelectAllEverything"){
            let tempALL =  finalPOpermissions.map(user=>{return {...user, isChecked:checked}});
            setPurchasePermissionListHere(tempALL)
            }

        
        else{
       let tempUserPO = finalPOpermissions.map((user) =>
           user.name === name ? { ...user, isChecked: checked} : user);
           setPurchasePermissionListHere(tempUserPO);

   }
   };

   const handleChangeEverything=(e)=>{
    const {name, checked, id } = e.target;
       
                if(name==="SelectAllEverything"){
                let tempALL =  finalAllCheckBox.map(user=>{return {...user, isChecked:checked}});
                // let tempALL2 =  finalPOpermissions.map(user=>{return {...user, isChecked:checked}});
                // let tempall3 =[...tempALL,tempALL2 ]
                    setAllPermisssions(tempALL)
                }
                else{
                    let tempALL = finalAllCheckBox.map((user) =>
                    user.name === name ? { ...user, isChecked: checked} : user);
                     setAllPermisssions(tempALL);
                }
   }

   let finalAllPermission = [...quotePermissionListHere, ...purchasePermissionListHere]
    return (
        <>
        <div  class="bg-white mt-2">
                <div class="ContentSection p-15">
                        <h4>Quote &amp; Order PermissionsTESTING</h4>
                            <div className="row1">
                                { finalQOPermissions.map((userP)=>(
                                                <div  class="custom-control custom-checkbox">
                                                            {/* <div class="custom-control custom-checkbox" > */}
                                                    <input type="checkbox" class="custom-control-input" 
                                                    name={userP.name} 
                                                    id={userP.id}
                                                    onChange={handleChange}
                                                    checked={userP?.isChecked || false}
                                                    />
                                                    <label class="custom-control-label pl-2" for={userP.id}> {userP.label}</label>
                                                </div>
                                        
                                ))}
                            </div>
                 
                 
                </div>
                <div class="custom-control custom-checkbox" style={{padding:"1em", marginLeft:"80%"}}>
                    <input type="checkbox" class="custom-control-input"  
                    onChange={handleChange} 
                    checked={finalQOPermissions.filter((user) => user?.isChecked !== true).length < 1}
                    name="SelectAllQuote" id="SelectAllQuote" />
                    <label class="custom-control-label pl-2" for="SelectAllQuote" >Select All / Select None </label>
                </div>

        </div>



{/* PO PERMISSIONS */}



                    {/* <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input"  
                        onChange={handleChange} 
                        checked={finalAllPermission.filter((user) => user?.isChecked !== true).length < 1}
                        name="SelectAllEverything" id="SelectAllEverything" />
                        <label class="custom-control-label pl-2" for="SelectAllEverything" >Select EVERYTHING</label>
                    </div> */}

                    {/* { finalAllCheckBox.map((userP)=>(
                       <div className="row">
                            <div className="col-md-6 col-lg-6">
                        <input type="checkbox" class="custom-control-input" 
                         name={userP.name} 
                         id={userP.id}
                         onChange={handleChangeEverything}
                        //onChange={()=>{handleChangeEverything(); handleChangePO(); handleChange(); }}
                        checked={userP?.isChecked || false}
                          />
                        <label class="custom-control-label pl-2" for={userP.id}>{userP.name}</label>
                    </div>
                    </div>
                 ))} */}



                <div  class="bg-white mt-2">
                                <div class="ContentSection p-15">
                                        <h4>Purchase &amp; Order Permissions</h4>
                                            <div className="row1">
                                                { finalPOpermissions.map((userP)=>(
                                                                <div  class="custom-control custom-checkbox">
                                                                            {/* <div class="custom-control custom-checkbox" > */}
                                                                    <input type="checkbox" class="custom-control-input" 
                                                                    name={userP.name} 
                                                                    id={userP.id}
                                                                    onChange={handleChange}
                                                                    checked={userP?.isChecked || false}
                                                                    />
                                                                    <label class="custom-control-label pl-2" for={userP.id}> {userP.label}</label>
                                                                </div>
                                                ))}
                                            </div>
                                
                                
                                </div>
                                <div class="custom-control custom-checkbox" style={{padding:"1em", marginLeft:"80%"}}>
                                    <input type="checkbox" class="custom-control-input"  
                                    onChange={handleChange} 
                                    checked={finalPOpermissions.filter((user) => user?.isChecked !== true).length < 1}
                                    name="SelectAllPO" id="SelectAllPO" />
                                    <label class="custom-control-label pl-2" for="SelectAllPO" >Select All / Select None </label>
                                </div>

                </div>
            
      
       
       </>
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


