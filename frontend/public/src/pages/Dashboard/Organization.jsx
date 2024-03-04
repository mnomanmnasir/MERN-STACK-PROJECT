import React, { useState, useEffect } from "react";
import Layout from "../../components/Shared/Layout/Layout";
import API from "../../services/API";
import moment from "moment";
import { useSelector } from "react-redux";

const Organization = () => {
  const [data, setData] = useState([]);

  const { user } = useSelector((state) => state.auth);

  // find donar record
  const getOrganization = async () => {
    try {
      if (user?.role === "donar") {
        const { data } = await API.get("/inventory/get-organization");
        if (data?.success) {
          setData(data?.organizations);
          console.log(setData);
        }
      }
      if (user?.role === "hospital") {
        const { data } = await API.get(
          "/inventory/get-organization-for-hospital"
        );
        if (data?.success) {
          setData(data?.organizations);
        }
      }
    } catch (error) {
      console.log("Error fetching organization data:", error);
    }
  };

  useEffect(() => {
    getOrganization();
  }, [user]);

  
  return (
    <Layout>
      <div className="container mt-3">
        <h1>Organization Manage</h1>
        <div style={{ overflow: "auto" }}>
          <table className="table mt-3">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email ID</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(data) &&
                data.map((record) => (
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

export default Organization;
