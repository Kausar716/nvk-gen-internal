/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function PlantManager() {
    return (
        <div>
            <div class="contentHeader bg-white d-flex justify-content-between align-items-center">
				<h1 class="page-header mb-0">Plant Manager</h1>
				<div class="">
					<a href="javascript:;">
						<img src="assets/img/add.svg" alt=""/>
					</a>
					<a href="javascript:;" class="ml-2">
						<img src="assets/img/preview.svg" alt=""/>
					</a>
					<a href="javascript:;" class="ml-2">
						<img src="assets/img/print.svg" alt=""/>
					</a>
				</div>
			</div>
			<div class="contentWrapper">
				<div class="row">
					<div class="col-xl-12 col-md-12">
						<div class="bg-white p-15">
                            <div class="form-group row">
                                <div class="col-md-5 col-lg-5">
                                    <label for="plantSearch">Plant Search</label>
                                    <div class="searchInput">
                                        <button type="submit" class="btn btn-search">
                                            <img src="assets/img/search.svg" alt=""/>
                                        </button>
                                        <input type="text" class="form-control" placeholder="Search"/>
                                    </div>
                                </div>
                                <div class="col-md-5 col-lg-5 mt-2 mt-md-0">
                                    <label for="Category">Category</label>
                                    <select class="form-control">
                                        <option>None</option>
                                    </select>
                                </div>
                                <div class="col-md-2 col-lg-2">
                                    <a href="javascript:;" class="d-block topSpace">Reset</a>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-12">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="radio_default_inline" id="activePlants" value=""/>
                                        <label class="form-check-label" for="activePlants">Active Plants</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="radio_default_inline" id="archivedPlants" value=""/>
                                        <label class="form-check-label" for="archivedPlants">Archived Plants</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="radio_default_inline" id="allPlants" value=""/>
                                        <label class="form-check-label" for="allPlants">All Plants</label>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div class="form-group row mt-3">
                                <div class="col-md-12">
                                    <table id="plantDetails" class="table table-striped w-100">
                                        <thead>
                                            <tr>
                                                <th class="text-nowrap">Status</th>
                                                <th class="text-nowrap">Plant Name</th>
                                                <th class="text-nowrap">Category</th>
                                                <th class="text-nowrap">In Production</th>
                                                <th class="text-nowrap text-center">Discontinued</th>
                                                <th class="text-nowrap">Archived</th>
                                                <th class="text-nowrap text-center">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Active</td>
                                                <td>11</td>
                                                <td>Test Category</td>
                                                <td></td>
                                                <td class="text-center">
                                                    <div class="custom-control custom-checkbox mb-1">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                                                        <label class="custom-control-label" for="customCheck1"></label>
                                                    </div>
                                                </td>
                                                <td>Not Archived</td>
                                                <td class="text-center">
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
                                                <td class="text-center">
                                                    <div class="custom-control custom-checkbox mb-1">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                                                        <label class="custom-control-label" for="customCheck1"></label>
                                                    </div>
                                                </td>
                                                <td>Not Archived</td>
                                                <td class="text-center">
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
                                                <td class="text-center">
                                                    <div class="custom-control custom-checkbox mb-1">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                                                        <label class="custom-control-label" for="customCheck1"></label>
                                                    </div>
                                                </td>
                                                <td>Not Archived</td>
                                                <td class="text-center">
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
						</div>
					</div>
				</div>
			</div>
        </div>
    )
}
