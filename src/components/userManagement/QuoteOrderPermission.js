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
    const [toolsAnsSettingsPermission, setToolsAnsSettingsPermission] =useState([]);

    const [additionalPermissions, setAdditionalPermissions] =useState([]);
    const [customerManagementPermission, setCustomerManagementPermission] =useState([]);
    const [userManagementPermission, setUserManagementPermission] =useState([]);
    const [inventoryManagementPermission, setInventoryManagementPermission] =useState([]);
    const [supplierManagementPermission, setSupplierManagementPermission] =useState([]);


    const [allInventoryPermissions, setAllInventoryPermissions] =useState([]);
    const [supervisorRolePermission, setSupervisorRolePermission] =useState([]);
    const [plantmanagerPermission, setPlantmanagerPermission] =useState([]);
    const [productManagerPermission, setProductManagerPermission] =useState([]);
    const [inventoryMangementPermissionT, setInventoryMangementPermissionT] =useState([]);


    const [allPermisssions, setAllPermisssions] =useState([]);
  
    let permissionList = props.finalPermissionLists


    useEffect (()=>{

        setquotePermissionListHere(permissionList);
        setPurchasePermissionListHere(permissionList);
        setAllPermisssions(permissionList)

        setToolsAnsSettingsPermission(permissionList)
        setAdditionalPermissions(permissionList)
        setCustomerManagementPermission(permissionList)
        setUserManagementPermission(permissionList)
        setSupplierManagementPermission(permissionList)
        setInventoryManagementPermission(permissionList)

        setAllInventoryPermissions(permissionList)
        setSupervisorRolePermission(permissionList)
        setPlantmanagerPermission(permissionList)
        setProductManagerPermission(permissionList)
        setInventoryMangementPermissionT(permissionList)
       
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

    let finalTSettingspermissions = toolsAnsSettingsPermission.filter(x=> x.id===128 || x.id===129 || x.id===130 || x.id===131 || x.id===132 )

    let additionalPermissionAll = additionalPermissions.filter(x=> x.id===128 || x.id===129 || x.id===130 || x.id===131 
        || x.id===132 || x.id===133 || x.id===134 || x.id===135 || x.id===136 || x.id===137 || x.id===138 
        || x.id===139 || x.id===140 || x.id===141 ||  x.id===142 || x.id===143 || x.id===144 || x.id===145
        || x.id===146 || x.id===147 || x.id===148 || x.id===149)


    let finalAllInventoryPermissions = allInventoryPermissions.filter(x=> x.id===150 || x.id===151 || x.id===152
         || x.id===153  || x.id===154 || x.id===155 || x.id===156 || x.id===157 || x.id===158 || x.id===159 || x.id===160
         || x.id===161 || x.id===162 || x.id===163 )

    let finalsupervisorRolePermission = supervisorRolePermission.filter(x=>x.id===150)
    let finalPlantmanagerPermission = plantmanagerPermission.filter(x=>  x.id===151 || x.id===152 || x.id===153  )
    let finalProductManagerPermission = productManagerPermission.filter(x=>  x.id===154 || x.id===155 || x.id===156  )
    let finalInventoryMangementPermissionT = inventoryMangementPermissionT.filter(x=> x.id===157 || x.id===158 
        || x.id===159 || x.id===160 || x.id===161 || x.id===162 || x.id===163 )

    

    let finalCMSettingsPermissions = customerManagementPermission.filter(x=>  x.id===133 || x.id===134 || x.id===135 || x.id===136 )

    let finalUserManagemnetPermission = userManagementPermission.filter(x=>  x.id===137 || x.id===138 || x.id===139 || x.id===140 || x.id===141)


    let finalInventoryManagemnetPermission = inventoryManagementPermission.filter(x=>  x.id===142 || x.id===143 || x.id===144 || x.id===145)

    let finalSupplierManagemnetPermission = supplierManagementPermission.filter(x=>  x.id===146 || x.id===147 || x.id===148 || x.id===149)


    let finalPOpermissions = purchasePermissionListHere.filter(x=> x.id===122 || x.id===123 || x.id===124 || x.id===125 || x.id===126 || x.id===127 )
    

    
     let finalAllCheckBox = allPermisssions.filter(x=>  x.id===99 || x.id===100 || x.id===101 
        || x.id===102 || x.id===103 || x.id===104 || x.id===105 || x.id===106
        || x.id===107 || x.id===108 || x.id===109  || x.id===110 || x.id===111 
        || x.id===112 || x.id===120 || x.id===121 || x.id===128 || x.id===129 || x.id===130 || x.id===131 
        || x.id===132 || x.id===133 || x.id===134 || x.id===135 || x.id===136 || x.id===137 || x.id===138 
        || x.id===139 || x.id===140 || x.id===141 ||  x.id===142 || x.id===143 || x.id===144 || x.id===145
        || x.id===146 || x.id===147 || x.id===148 || x.id===149 || x.id===122 || x.id===123 || x.id===124 
        || x.id===125 || x.id===126 || x.id===127 || x.id===150 || x.id===151 || x.id===152
        || x.id===153  || x.id===154 || x.id===155 || x.id===156 || x.id===157 || x.id===158 || x.id===159 || x.id===160
        || x.id===161 || x.id===162 || x.id===163 )
    
    console.log("quotesAndOrdersPemissionList1", finalAllCheckBox, finalCMSettingsPermissions)


    const handleChange=(e)=>{
//debugger;
         const {name, checked, id } = e.target;

         if(name === "SelectAllQuote"){
                    let tempUserP = finalQOPermissions.map(user=>{return {...user, isChecked:checked}});
                    setquotePermissionListHere(tempUserP)
         }

         else  if(name === "SelectAllPO"){
            let tempUserPO = finalPOpermissions.map(user=>{return {...user, isChecked:checked}});
            setPurchasePermissionListHere(tempUserPO)
         }


         //SelectAllINV
         else  if(name === "SelectAllINV"){
            let tempUserINV = finalAllInventoryPermissions.map(user=>{return {...user, isChecked:checked}});
            setInventoryMangementPermissionT(tempUserINV)
            setProductManagerPermission(tempUserINV)
            setPlantmanagerPermission(tempUserINV)
            setSupervisorRolePermission(tempUserINV)
            setAllInventoryPermissions(tempUserINV)

         }


         else  if(name === "SupervisorRoleInSupervisorRolePermissions"){
            let tempUserSVR = finalsupervisorRolePermission.map(user=>{return {...user, isChecked:checked}});
            setSupervisorRolePermission(tempUserSVR)
         }



         else  if(name === "PlantManagerInPlantManagerPermissions"){
            let tempUserPM = finalPlantmanagerPermission.map(user=>{return {...user, isChecked:checked}});
            setPlantmanagerPermission(tempUserPM)
         }


         else  if(name === "ProductManagerPermissions"){
            let tempUserProM = finalProductManagerPermission.map(user=>{return {...user, isChecked:checked}});
            setProductManagerPermission(tempUserProM)
         }

         else  if(name === "InventoryManagementInInventoryManagementPermissions"){
            let tempUserINVMangement = finalInventoryMangementPermissionT.map(user=>{return {...user, isChecked:checked}});
            setInventoryMangementPermissionT(tempUserINVMangement)
         }


         //SelectAllTS
         else  if(name === "SelectAllTS"){
            let tempUserALL = additionalPermissionAll.map(user=>{return {...user, isChecked:checked}});
            setToolsAnsSettingsPermission(tempUserALL)
            setUserManagementPermission(tempUserALL)
            setCustomerManagementPermission(tempUserALL)
            setUserManagementPermission(tempUserALL)
            setSupplierManagementPermission(tempUserALL)
            setInventoryManagementPermission(tempUserALL)
            setAdditionalPermissions(tempUserALL)
           
            
         }



         else  if(name === "toolsSettingsIntoolsSettingsPermissions"){
            let tempUserTS = finalTSettingspermissions.map(user=>{return {...user, isChecked:checked}});
           setToolsAnsSettingsPermission(tempUserTS)
         }

         else  if(name === "customerManagementInCustomerManagementPermissions"){
            let tempUserCMS = finalCMSettingsPermissions.map(user=>{return {...user, isChecked:checked}});
            setCustomerManagementPermission(tempUserCMS)
         }

         else  if(name === "userManagementInUserManagementPermissions"){
            let tempUserUMP = finalUserManagemnetPermission.map(user=>{return {...user, isChecked:checked}});
            setUserManagementPermission(tempUserUMP)
         }

         else  if(name === "InventoyManagementInInventoyManagementPermissions"){
            let tempUserINV = finalInventoryManagemnetPermission.map(user=>{return {...user, isChecked:checked}});
            setInventoryManagementPermission(tempUserINV)
         }

         else  if(name === "SupplierManagementInSupplierManagementPermissions"){
            let tempUserSMP = finalSupplierManagemnetPermission.map(user=>{return {...user, isChecked:checked}});
            setSupplierManagementPermission(tempUserSMP)
         }


        else if(name==="SelectAllPermissionOn"){
           
             let tempALL =  finalAllCheckBox.map(user=>{return {...user, isChecked:checked}});
             setInventoryMangementPermissionT(tempALL)
             setProductManagerPermission(tempALL)
             setPlantmanagerPermission(tempALL)
             setSupervisorRolePermission(tempALL)
             setAllInventoryPermissions(tempALL)

             setToolsAnsSettingsPermission(tempALL)
            setUserManagementPermission(tempALL)
            setCustomerManagementPermission(tempALL)
            setUserManagementPermission(tempALL)
            setSupplierManagementPermission(tempALL)
            setInventoryManagementPermission(tempALL)
            setAdditionalPermissions(tempALL)


            setquotePermissionListHere(tempALL)
            setPurchasePermissionListHere(tempALL)
            setAllPermisssions(tempALL)


            }

        

        
         else{
        let tempUserP = finalQOPermissions.map((user) =>
            user.name === name ? { ...user, isChecked: checked} : user);
            setquotePermissionListHere(tempUserP);

            let tempUserPO = finalPOpermissions.map((user) =>
            user.name === name ? { ...user, isChecked: checked} : user);
            setPurchasePermissionListHere(tempUserPO);


            let tempUserTS = finalTSettingspermissions.map((user) =>
            user.name === name ? { ...user, isChecked: checked} : user);
            setToolsAnsSettingsPermission(tempUserTS);
            

            let tempUserALL = additionalPermissionAll.map((user) =>
            user.name === name ? { ...user, isChecked: checked} : user);
            setAdditionalPermissions(tempUserALL);
        
            let tempUserCMS = finalCMSettingsPermissions.map((user) =>
            user.name === name ? { ...user, isChecked: checked} : user);
            setCustomerManagementPermission(tempUserCMS);


            let tempUserUMP = finalUserManagemnetPermission.map((user) =>
            user.name === name ? { ...user, isChecked: checked} : user);
            setUserManagementPermission(tempUserUMP);


            let tempUserINV = finalInventoryManagemnetPermission.map((user) =>
            user.name === name ? { ...user, isChecked: checked} : user);
            setInventoryManagementPermission(tempUserINV);


            let tempUserSMP = finalSupplierManagemnetPermission.map((user) =>
            user.name === name ? { ...user, isChecked: checked} : user);
            setSupplierManagementPermission(tempUserSMP);

            let tempUserINVM= finalAllInventoryPermissions.map((user) =>
            user.name === name ? { ...user, isChecked: checked} : user);
            setAllInventoryPermissions(tempUserINVM);

            let tempUserSUPV= finalsupervisorRolePermission.map((user) =>
            user.name === name ? { ...user, isChecked: checked} : user);
            setSupervisorRolePermission(tempUserSUPV);


            let tempUserPM= finalPlantmanagerPermission.map((user) =>
            user.name === name ? { ...user, isChecked: checked} : user);
            setPlantmanagerPermission(tempUserPM);


            let tempUserProM= finalProductManagerPermission.map((user) =>
            user.name === name ? { ...user, isChecked: checked} : user);
            setProductManagerPermission(tempUserProM);


            let tempUserINVMangement= finalInventoryMangementPermissionT.map((user) =>
            user.name === name ? { ...user, isChecked: checked} : user);
            setInventoryMangementPermissionT(tempUserINVMangement);


            let tempUserAllCheck= finalAllCheckBox.map((user) =>
            user.name === name ? { ...user, isChecked: checked} : user);
            setAllPermisssions(tempUserAllCheck);



            // let finalAllPermission = [quotePermissionListHere, purchasePermissionListHere]
            //  let tempALL = finalAllPermission.map((user) =>
            //  user.name === name ? { user, isChecked: checked} : user);
            // setAllPermisssions(tempALL);

    }
    };



    return (
        <>
           <div style={{padding:"0.5em"}}>
                <span style={{float:"right", marginTop:"-1em",fontWeight:"bold"}}>Turn On All / Turn On Off</span>
                                <div class="switcher switcher-sm ml-2 pr-2" style={{float:"right", marginRight:"4px", marginTop:"-15px"}}>
                                        <input type="checkbox"  name="SelectAllPermissionOn" id="SelectAllPermissionOn"   onChange={handleChange} 
                                        checked={finalAllCheckBox.filter((user) => user?.isChecked !== true).length < 1} />
                                        <label  for="SelectAllPermissionOn"></label>
                                    </div>
            </div>
        <div  class="bg-white mt-2">
                <div class="ContentSection p-15">
                        <h4>Quote &amp; Order Permissions</h4>
                            <div className="row1" style={{paddingBottom:"2em"}}>
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
                {/* <div class="custom-control custom-checkbox" style={{padding:"1em", marginLeft:"80%"}}>
                    <input type="checkbox" class="custom-control-input"  
                    onChange={handleChange} 
                    checked={finalQOPermissions.filter((user) => user?.isChecked !== true).length < 1}
                    name="SelectAllQuote" id="SelectAllQuote" />
                    <label class="custom-control-label pl-2" for="SelectAllQuote" >Select All / Select None </label>
                </div> */}

                            <div>
                                <span style={{float:"right", marginRight:"1em", marginTop:"-2em",fontWeight:"bold"}}>Select All / Select None</span>
                                <div class="switcher switcher-sm ml-2 pr-2" style={{float:"right", marginRight:"12.3em", marginTop:"-2em"}}>
                                        <input type="checkbox"  name="SelectAllQuote" id="SelectAllQuote"   onChange={handleChange} 
                                       checked={finalQOPermissions.filter((user) => user?.isChecked !== true).length < 1} />
                                        <label  for="SelectAllQuote"></label>
                                    </div>
                                </div>

        </div>




{/* Additional Permissions */}

<div  class="bg-white mt-2">
                                <div class="ContentSection p-15">
                                        <h4>Additional Permissions</h4>
                                        <div className="row1" style={{paddingBottom:"2em"}}>
                                            <div className="row2">
                                                { finalTSettingspermissions.map((userP)=>(
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

                                            <div className="row6">
                                                { finalCMSettingsPermissions.map((userP)=>(
                                                                <div  class="custom-control custom-checkbox">
                                                                          
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
                                
                                                  

                                                    <div className="row2">
                                                { finalUserManagemnetPermission.map((userP)=>(
                                                                <div  class="custom-control custom-checkbox">
                                                                          
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

                                            
                                            <div className="row7">
                                                { finalInventoryManagemnetPermission.map((userP)=>(
                                                                <div  class="custom-control custom-checkbox">
                                                                          
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

                                            <div className="row2">
                                                { finalSupplierManagemnetPermission.map((userP)=>(
                                                                <div  class="custom-control custom-checkbox">
                                                                          
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
                                
                                </div>

                                <div>
                                <span style={{float:"right", marginRight:"1em", marginTop:"-2em",fontWeight:"bold"}}>Select All / Select None</span>
                                <div class="switcher switcher-sm ml-2 pr-2" style={{float:"right", marginRight:"12.3em", marginTop:"-2em"}}>
                                        <input type="checkbox"  name="SelectAllTS" id="SelectAllTS"   onChange={handleChange} 
                                        checked={additionalPermissionAll.filter((user) => user?.isChecked !== true).length < 1} />
                                        <label  for="SelectAllTS"></label>
                                    </div>
                                </div>
                                

                </div>





        {/* Purchase &amp; Order Permissions */}
                <div  class="bg-white mt-2">
                                <div class="ContentSection p-15">
                                        <h4>Purchase &amp; Order Permissions</h4>
                                            <div className="row1" style={{paddingBottom:"3em"}}>
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
                                {/* <div class="custom-control custom-checkbox" style={{padding:"1em", marginLeft:"80%"}}>
                                    <input type="checkbox" class="custom-control-input"  
                                    onChange={handleChange} 
                                    checked={finalPOpermissions.filter((user) => user?.isChecked !== true).length < 1}
                                    name="SelectAllPO" id="SelectAllPO" />
                                    <label class="custom-control-label pl-2" for="SelectAllPO" >Select All / Select None </label>
                                </div> */}
                                 <div>
                                <span style={{float:"right", marginRight:"1em", marginTop:"-2em",fontWeight:"bold"}}>Select All / Select None</span>
                                <div class="switcher switcher-sm ml-2 pr-2" style={{float:"right", marginRight:"12.3em", marginTop:"-2em"}}>
                                        <input type="checkbox"  name="SelectAllPO" id="SelectAllPO"   onChange={handleChange} 
                                       checked={finalPOpermissions.filter((user) => user?.isChecked !== true).length < 1} />
                                        <label  for="SelectAllPO"></label>
                                    </div>
                                </div>

                </div>





    {/* Inventory Management Permissions */}
    <div  class="bg-white mt-2">
                                <div class="ContentSection p-15">
                                        <h4>Inventory Management Permissions</h4>
                                        <div className="row1" style={{paddingBottom:"2em"}}>
                                            {/* <div 
                                            className="row2"
                                            >
                                                
                                            </div> */}

                                            <div className="row3">
                                            { finalsupervisorRolePermission.map((userP)=>(
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

                                                { finalPlantmanagerPermission.map((userP)=>(
                                                                <div  class="custom-control custom-checkbox">
                                                                          
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
                                
                                                  

                                                    <div className="row4">
                                                { finalProductManagerPermission.map((userP)=>(
                                                                <div  class="custom-control custom-checkbox">
                                                                          
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

                                            
                                            <div className="row5">
                                                { finalInventoryMangementPermissionT.map((userP)=>(
                                                                <div  class="custom-control custom-checkbox">
                                                                          
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
                                
                                </div>

                          
                                <div>
                                <span style={{float:"right", marginRight:"1em", marginTop:"-2em",fontWeight:"bold"}}>Select All / Select None</span>
                                <div class="switcher switcher-sm ml-2 pr-2" style={{float:"right", marginRight:"12.3em", marginTop:"-2em"}}>
                                        <input type="checkbox"  name="SelectAllINV" id="SelectAllINV"   onChange={handleChange} 
                                        checked={finalAllInventoryPermissions.filter((user) => user?.isChecked !== true).length < 1} />
                                        <label  for="SelectAllINV"></label>
                                    </div>
                                </div>
                                

                </div>

               
                

                <div>
                                
            </div>
      
         
       </>
    )
}




const mapStateToProps = (state)=> (
    // console.log(state.customerReducer.payload)finalTSettingspermissions
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


