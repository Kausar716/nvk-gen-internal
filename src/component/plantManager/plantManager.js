/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React, { Component } from 'react';  
import Sidebar from '../../common/sidebar';  
import Header from '../../common/header'  
// import {  
//     Route, Switch, Redirect  
// } from 'react-router-dom';  
export class PlantManager extends Component {  
    loading = () => <div id="page-loader" className="fade show"> <span className="spinner"></span>	</div>  
    render() {  
        return (  
            <div>  
                <div>
     
			<Header/>
            <Sidebar />
        <div id="content" className="content">
			<div className="contentHeader bg-white d-flex justify-content-between align-items-center">
				{/* <!-- begin page-header --> */}
				<h1 className="page-header mb-0">Plant Manager</h1>
				{/* <!-- end page-header --> */}
				<div className="">
					<a href="javascript:;">
						<img src="assets/img/add.svg" alt=""/>
					</a>
					<a href="javascript:;">
						<img src="assets/img/preview.svg" alt=""/>
					</a>
					<a href="javascript:;">
						<img src="assets/img/print.svg" alt=""/>
					</a>
				</div>
			</div>
			<div className="contentWrapper">
				{/* <!-- begin row --> */}
				<div className="row">
					<div className="col-xl-12 col-md-12">
						<div className="bg-white p-15">
							<form action="/" method="POST">
								<div className="form-group row">
									<div className="col-md-5 col-lg-5">
										<label htmlFor="plantSearch">Plant Search</label>
										<div className="searchInput">
											<button type="submit" className="btn btn-search"><img src="assets/img/search.svg" alt=""/></button>
											<input type="text" className="form-control" placeholder="Search"/>
										</div>
									</div>
									<div className="col-md-5 col-lg-5 mt-2 mt-md-0">
										<label htmlFor="Category">Category</label>
										<select className="form-control">
											<option>None</option>
										</select>
									</div>
									<div className="col-md-2 col-lg-2">
										<a href="javascript:;" className="d-block topSpace">Reset</a>
									</div>
								</div>
								<div className="form-group row">
									<div className="col-md-12">
										<div className="form-check form-check-inline">
											<input className="form-check-input" type="radio" name="radio_default_inline" id="activePlants" value="" checked=""/>
											<label className="form-check-label" htmlFor="activePlants">Active Plants</label>
										</div>
										<div className="form-check form-check-inline">
											<input className="form-check-input" type="radio" name="radio_default_inline" id="archivedPlants" value=""/>
											<label className="form-check-label" htmlFor="archivedPlants">Archived Plants</label>
										</div>
										<div className="form-check form-check-inline">
											<input className="form-check-input" type="radio" name="radio_default_inline" id="allPlants" value=""/>
											<label className="form-check-label" htmlFor="allPlants">All Plants</label>
										</div>
									</div>
								</div>
								<hr/>
								<div className="form-group row mt-3">
									<div className="col-md-12">
										<table id="plantDetails" className="table table-striped w-100">
											<thead>
												<tr>
													<th className="text-nowrap">Status</th>
													<th className="text-nowrap">Plant Name</th>
													<th className="text-nowrap">Category</th>
													<th className="text-nowrap">In Production</th>
													<th className="text-nowrap text-center">Discontinued</th>
													<th className="text-nowrap">Archived</th>
													<th className="text-nowrap text-center">Actions</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>Active</td>
													<td>11</td>
													<td>Test Category</td>
													<td></td>
													<td className="text-center">
														<div className="custom-control custom-checkbox mb-1">
															<input type="checkbox" className="custom-control-input" id="customCheck1"/>
															<label className="custom-control-label" htmlFor="customCheck1"></label>
														</div>
													</td>
													<td>Not Archived</td>
													<td className="text-center">
														<span>
															<a href="javascript:;">
																<img src="assets/img/edit.svg" alt=""/>
															</a>
														</span>
														<span>
															<a href="javascript:;">
																<img src="assets/img/duplicate.svg" alt=""/>
															</a>
														</span>
														<span>
															<a href="javascript:;">
																<img src="assets/img/delete.svg" alt=""/>
															</a>
														</span>
													</td>
												</tr>
												<tr>
													<td>Active</td>
													<td>11</td>
													<td>Test Category</td>
													<td></td>
													<td className="text-center">
														<div className="custom-control custom-checkbox mb-1">
															<input type="checkbox" className="custom-control-input" id="customCheck2"/>
															<label className="custom-control-label" htmlFor="customCheck2"></label>
														</div>
													</td>
													<td>Not Archived</td>
													<td className="text-center">
														<span>
															<a href="javascript:;">
																<img src="assets/img/edit.svg" alt=""/>
															</a>
														</span>
														<span>
															<a href="javascript:;">
																<img src="assets/img/duplicate.svg" alt=""/>
															</a>
														</span>
														<span>
															<a href="javascript:;">
																<img src="assets/img/delete.svg" alt=""/>
															</a>
														</span>
													</td>
												</tr>
												<tr>
													<td>Active</td>
													<td>11</td>
													<td>Test Category</td>
													<td></td>
													<td className="text-center">
														<div className="custom-control custom-checkbox mb-1">
															<input type="checkbox" className="custom-control-input" id="customCheck3"/>
															<label className="custom-control-label" htmlFor="customCheck3"></label>
														</div>
													</td>
													<td>Not Archived</td>
													<td className="text-center">
														<span>
															<a href="javascript:;">
																<img src="assets/img/edit.svg" alt=""/>
															</a>
														</span>
														<span>
															<a href="javascript:;">
																<img src="assets/img/duplicate.svg" alt=""/>
															</a>
														</span>
														<span>
															<a href="javascript:;">
																<img src="assets/img/delete.svg" alt=""/>
															</a>
														</span>
													</td>
												</tr>
												<tr>
													<td>Active</td>
													<td>11</td>
													<td>Test Category</td>
													<td></td>
													<td className="text-center">
														<div className="custom-control custom-checkbox mb-1">
															<input type="checkbox" className="custom-control-input" id="customCheck4"/>
															<label className="custom-control-label" htmlFor="customCheck4"></label>
														</div>
													</td>
													<td>Not Archived</td>
													<td className="text-center">
														<span>
															<a href="javascript:;">
																<img src="assets/img/edit.svg" alt=""/>
															</a>
														</span>
														<span>
															<a href="javascript:;">
																<img src="assets/img/duplicate.svg" alt=""/>
															</a>
														</span>
														<span>
															<a href="javascript:;">
																<img src="assets/img/delete.svg" alt=""/>
															</a>
														</span>
													</td>
												</tr>
												<tr>
													<td>Active</td>
													<td>11</td>
													<td>Test Category</td>
													<td></td>
													<td className="text-center">
														<div className="custom-control custom-checkbox mb-1">
															<input type="checkbox" className="custom-control-input" id="customCheck5"/>
															<label className="custom-control-label" htmlFor="customCheck5"></label>
														</div>
													</td>
													<td>Not Archived</td>
													<td className="text-center">
														<span>
															<a href="javascript:;">
																<img src="assets/img/edit.svg" alt=""/>
															</a>
														</span>
														<span>
															<a href="javascript:;">
																<img src="assets/img/duplicate.svg" alt=""/>
															</a>
														</span>
														<span>
															<a href="javascript:;">
																<img src="assets/img/delete.svg" alt=""/>
															</a>
														</span>
													</td>
												</tr>
												<tr>
													<td>Active</td>
													<td>11</td>
													<td>Test Category</td>
													<td></td>
													<td className="text-center">
														<div className="custom-control custom-checkbox mb-1">
															<input type="checkbox" className="custom-control-input" id="customCheck6"/>
															<label className="custom-control-label" htmlFor="customCheck6"></label>
														</div>
													</td>
													<td>Not Archived</td>
													<td className="text-center">
														<span>
															<a href="javascript:;">
																<img src="assets/img/edit.svg" alt=""/>
															</a>
														</span>
														<span>
															<a href="javascript:;">
																<img src="assets/img/duplicate.svg" alt=""/>
															</a>
														</span>
														<span>
															<a href="javascript:;">
																<img src="assets/img/delete.svg" alt=""/>
															</a>
														</span>
													</td>
												</tr>
												<tr>
													<td>Active</td>
													<td>11</td>
													<td>Test Category</td>
													<td></td>
													<td className="text-center">
														<div className="custom-control custom-checkbox mb-1">
															<input type="checkbox" className="custom-control-input" id="customCheck7"/>
															<label className="custom-control-label" htmlFor="customCheck7"></label>
														</div>
													</td>
													<td>Not Archived</td>
													<td className="text-center">
														<span>
															<a href="javascript:;">
																<img src="assets/img/edit.svg" alt=""/>
															</a>
														</span>
														<span>
															<a href="javascript:;">
																<img src="assets/img/duplicate.svg" alt=""/>
															</a>
														</span>
														<span>
															<a href="javascript:;">
																<img src="assets/img/delete.svg" alt=""/>
															</a>
														</span>
													</td>
												</tr>
												<tr>
													<td>Active</td>
													<td>11</td>
													<td>Test Category</td>
													<td></td>
													<td className="text-center">
														<div className="custom-control custom-checkbox mb-1">
															<input type="checkbox" className="custom-control-input" id="customCheck8"/>
															<label className="custom-control-label" htmlFor="customCheck8"></label>
														</div>
													</td>
													<td>Not Archived</td>
													<td className="text-center">
														<span>
															<a href="javascript:;">
																<img src="assets/img/edit.svg" alt=""/>
															</a>
														</span>
														<span>
															<a href="javascript:;">
																<img src="assets/img/duplicate.svg" alt=""/>
															</a>
														</span>
														<span>
															<a href="javascript:;">
																<img src="assets/img/delete.svg" alt=""/>
															</a>
														</span>
													</td>
												</tr>
												<tr>
													<td>Active</td>
													<td>11</td>
													<td>Test Category</td>
													<td></td>
													<td className="text-center">
														<div className="custom-control custom-checkbox mb-1">
															<input type="checkbox" className="custom-control-input" id="customCheck9"/>
															<label className="custom-control-label" htmlFor="customCheck9"></label>
														</div>
													</td>
													<td>Not Archived</td>
													<td className="text-center">
														<span>
															<a href="javascript:;">
																<img src="assets/img/edit.svg" alt=""/>
															</a>
														</span>
														<span>
															<a href="javascript:;">
																<img src="assets/img/duplicate.svg" alt=""/>
															</a>
														</span>
														<span>
															<a href="javascript:;">
																<img src="assets/img/delete.svg" alt=""/>
															</a>
														</span>
													</td>
												</tr>
												<tr>
													<td>Active</td>
													<td>11</td>
													<td>Test Category</td>
													<td></td>
													<td className="text-center">
														<div className="custom-control custom-checkbox mb-1">
															<input type="checkbox" className="custom-control-input" id="customCheck10"/>
															<label className="custom-control-label" htmlFor="customCheck10"></label>
														</div>
													</td>
													<td>Not Archived</td>
													<td className="text-center">
														<span>
															<a href="javascript:;">
																<img src="assets/img/edit.svg" alt=""/>
															</a>
														</span>
														<span>
															<a href="javascript:;">
																<img src="assets/img/duplicate.svg" alt=""/>
															</a>
														</span>
														<span>
															<a href="javascript:;">
																<img src="assets/img/delete.svg" alt=""/>
															</a>
														</span>
													</td>
												</tr>
												<tr>
													<td>Active</td>
													<td>11</td>
													<td>Test Category</td>
													<td></td>
													<td className="text-center">
														<div className="custom-control custom-checkbox mb-1">
															<input type="checkbox" className="custom-control-input" id="customCheck1"/>
															<label className="custom-control-label" htmlFor="customCheck1"></label>
														</div>
													</td>
													<td>Not Archived</td>
													<td className="text-center">
														<span>
															<a href="javascript:;">
																<img src="assets/img/edit.svg" alt=""/>
															</a>
														</span>
														<span>
															<a href="javascript:;">
																<img src="assets/img/duplicate.svg" alt=""/>
															</a>
														</span>
														<span>
															<a href="javascript:;">
																<img src="assets/img/delete.svg" alt=""/>
															</a>
														</span>
													</td>
												</tr>
												<tr>
													<td>Active</td>
													<td>11</td>
													<td>Test Category</td>
													<td></td>
													<td className="text-center">
														<div className="custom-control custom-checkbox mb-1">
															<input type="checkbox" className="custom-control-input" id="customCheck1"/>
															<label className="custom-control-label" htmlFor="customCheck1"></label>
														</div>
													</td>
													<td>Not Archived</td>
													<td className="text-center">
														<span>
															<a href="javascript:;">
																<img src="assets/img/edit.svg" alt=""/>
															</a>
														</span>
														<span>
															<a href="javascript:;">
																<img src="assets/img/duplicate.svg" alt=""/>
															</a>
														</span>
														<span>
															<a href="javascript:;">
																<img src="assets/img/delete.svg" alt=""/>
															</a>
														</span>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>

							</form>
						</div>
					</div>
				</div>
				{/* <!-- end row --> */}
			</div>
		</div>

                   
                </div>
            </div>  
        )  
    }  
}  
  
export default PlantManager