import React, { useState, useEffect } from "react";
import Layout from "../../components/Shared/Layout/Layout";
import API from "../../services/API";
import moment from "moment";

const Hospitals = () => {
  const [data, setData] = useState();
  // find donar record

  const getHospital = async () => {
    try {
      const { data } = await API.get("/inventory/get-hospitals");
      //   console.log(data);
      if (data?.success) {
        setData(data?.hospitals);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHospital();
  });
  return (
    <Layout>
      <div className="container mt-4">
        <h1 style={{ textAlign: "left" , marginTop: '10px'}}>Hospital Manage</h1>
        <div style={{ marginTop: '3%'}}>
          <table className="table table-hover table-bordered border-dark">
            <thead>
              <tr className="text-center">
                <th scope="col" className="bg-danger">
                  Name
                </th>
                <th scope="col" className="bg-danger">
                  Email ID
                </th>
                <th scope="col" className="bg-danger">
                  Phone
                </th>
                <th scope="col" className="bg-danger">
                  Address
                </th>
                <th scope="col" className="bg-danger">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(data) &&
                data?.map((record) => (
                  <tr key={record._id}>
                    <td>
                      {record.name ||
                        record.organizationName ||
                        record.hospitalName}
                    </td>
                    <td>{record.email}</td>
                    <td>{record.phone}</td>
                    <td>{record.address}</td>
                    <td>
                      {moment(record.createdAt).format("MM/DD/YYYY hh:mm A")}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Hospitals;
