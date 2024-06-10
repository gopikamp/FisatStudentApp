import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {
    const [data, changeData] = useState([])
    const fetchData = () => {
        console.log("hello")
        axios.get("https://courseapplogix.onrender.com/getdata").then(
            (Response) => {
                console.log(Response.data)
                changeData(Response.data)
            }
        ).catch(
            (error) => {
                console.console.log(error.message)
                alert(error.message)
            }
        ).finally()
    }
    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>College</th>
                                            <th>Date Of Birth</th>
                                            <th>Course</th>
                                            <th>Mobile</th>
                                            <th>Email</th>
                                            <th>Address</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map(
                                            (value, index) => {
                                                return <tr>
                                                    <th>{value.firstname}</th>
                                                    <th>{value.lastname}</th>
                                                    <th>{value.college}</th>
                                                    <th>{value.do}</th>
                                                    <th>{value.course}</th>
                                                    <th>{value.mobile}</th>
                                                    <th>{value.email}</th>
                                                    <th>{value.address}</th>
                                                </tr>
                                            }
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll