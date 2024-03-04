import React, { useEffect, useState } from "react";
import Layout from "../../components/Shared/Layout/Layout";
import API from "../../services/API";
import moment from "moment";
import { useSelector } from "react-redux";

const Consumer = () => {
  const [data, setData] = useState([]);

  const { user } = useSelector((state) => state.auth);
  // find donar record
  const getHospitalInventory = async () => {
    try {
      const { data } = await API.post("/inventory/get-inventory-hospital", {
        filters: {
          inventoryType: "out",
          hospital: user?._id,
        },
      });
      console.log(data);
      if (data?.success) {
        setData(data?.inventory);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHospitalInventory();
  }, []);
  return (
    <Layout>
      <div className="container mt-3">
        <h1>Consumer Manage</h1>
        <div style={{ overflow: "auto" }}>
          <table className="table mt-3">
            <thead>
              <tr>
                <th scope="col">Blood Group</th>
                <th scope="col">Inventory Type</th>
                <th scope="col">Quantity</th>
                <th scope="col">Email</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(data) &&
                data?.map((record) => (
                  <tr key={record._id}>
                    <td>{record.bloodGroup}</td>
                    <td>{record.inventoryType}</td>
                    <td>{record.quantity}</td>
                    <td>{record.email}</td>
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

export default Consumer;
