import React, { useState, useEffect } from "react";
import Layout from "../components/Shared/Layout/Layout";
import Spinner from "../components/Shared/Spinner";
import { useSelector } from "react-redux";
import Modal from "../components/Shared/modal/Modal";
import API from "../services/API";
import moment from "moment";

const HomePage = () => {
  const { loading, error } = useSelector((state) => state.auth);

  const [data, setData] = useState([]);

  const getBloodRecords = async () => {
    try {
      const { data } = await API.get("/inventory/get-inventory");
      if (data?.success) {
        setData(data?.inventory);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBloodRecords();
  }, []);
  return (
    <Layout>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div
            className="container mt-4"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <h1 style={{ textAlign: "left" , marginTop: '10px'}}>Inventory Manage</h1>
            <button
              className="ms-4"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                border: "1px solid #ccc", // Add border
                borderRadius: "15px", // Add border radius for rounded corners
              }}
            >
              <i className="fa-solid fa-plus text-danger"></i>
              Add Inventory
            </button>
          </div>
          {/* Align to the left */}
          <div style={{ overflow: "auto" }} className="container mt-3">
            <table className="table ">
              <thead>
                <tr>
                  <th scope="col" className="bg-danger">Blood Group</th>
                  <th scope="col" className="bg-danger">Inventory Type</th>
                  <th scope="col" className="bg-danger">Quantity</th>
                  <th scope="col" className="bg-danger">Donar Email</th>
                  <th scope="col" className="bg-danger">Time and Date</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(data) &&
                  data?.map((record) => (
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
          <Modal />
        </>
      )}
    </Layout>
  );
};

export default HomePage;
