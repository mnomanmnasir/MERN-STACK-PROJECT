import React, { useState, useEffect } from "react";
import Layout from "../../components/Shared/Layout/Layout";
import API from "../../services/API";
import moment from "moment";

const Donar = () => {
  const [data, setData] = useState();
  // find donar record

  const getDonar = async () => {
    try {
      const { data } = await API.get("/inventory/get-donar");
      //   console.log(data);
      if (data?.success) {
        setData(data?.donars);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDonar();
  },[]);
  return (
    <Layout>
        <div className="container mt-3">
      <h1>
        Donar Manage 
      </h1>
      <div style={{ overflow: "auto" }}>
        <table className="table mt-3">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email ID</th>
              <th scope="col">Phone</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data) &&
              data?.map((record) => (
                <tr key={record._id}>
                  <td>{record.name || record.organizationName || record.hospitalName}</td>
                  <td>{record.email}</td>
                  <td>{record.phone}</td>
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

export default Donar;
