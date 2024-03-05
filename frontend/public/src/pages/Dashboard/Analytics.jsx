import React, { useState, useEffect } from "react";
import Header from "../../components/Shared/Layout/Header";
import API from "../../services/API";
import moment from "moment";



const Analytics = () => {
  const [data, setData] = useState([]);

  const [inventoryData, setInventoryData] = useState([]);
  const colors = [
    "#9B4444",
    "#FF407D",
    "#2D9596",
    "#7469B6",
    "#7F27FF",
    "#9195F6",
    "#CD8D7A",
    "#51829B",
  ];
  // GET BLOOD GROUP DATA

  const getBloodGroupData = async () => {
    try {
      const { data } = await API.get("/analytics/bloodGroups-data");
      if (data?.success) {
        setData(data?.bloodGroupsData);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBloodGroupData();
  }, []);

  const getBloodRecords = async () => {
    try {
      const { data } = await API.get("/inventory/get-recent-inventory");
      if (data?.success) {
        setInventoryData(data?.inventory);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBloodRecords();
  }, []);
  return (
    <>
      <Header />
      <div className="d-flex flex-row flex-wrap align-items-center justify-content-center">
        {data?.map((record, i) => (
          <div
            className="card m-2 p-1"
            key={i}
            style={{ width: "18rem", backgroundColor: `${colors[i]}` }}
          >
            <div className="card-body">
              <h1 className="card-title bg-light text-dark text-center mb-3">
                {record.bloodGroup}
              </h1>
              <p className="card-text">
                Total In : <b>{record.totalIn}</b> (ML)
              </p>
              <p className="card-text">
                Total Out : <b>{record.totalOut}</b> (ML)
              </p>
            </div>
            <div className="card-footer text-light bg-dark text-center">
              Total Available : <b>{record.availableBlood}</b>
            </div>
          </div>
        ))}
      </div>
      <div className="container mt-4">
        <h1>Recent Transaction Inventory Records</h1>
        <table className="table table-hover table-bordered border-dark">
          <thead>
            <tr>
              <th scope="col" className="bg-danger">
                Blood Group
              </th>
              <th scope="col" className="bg-danger">
                Inventory Type
              </th>
              <th scope="col" className="bg-danger">
                Quantity
              </th>
              <th scope="col" className="bg-danger">
                Donar Email
              </th>
              <th scope="col" className="bg-danger">
                Time and Date
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data) &&
              inventoryData?.map((record) => (
                <tr key={record._id}>
                  <td>{record.bloodGroup}</td>
                  <td>{record.inventoryType}</td>
                  <td>{record.quantity} (ML)</td>
                  <td>{record.email}</td>
                  <td>
                    {moment(record.createdAt).format("MM/DD/YYYY hh:mm A")}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Analytics;
