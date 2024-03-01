import React, { useState, useEffect } from "react";
import Layout from "../components/Shared/Layout/Layout";
import Spinner from "../components/Shared/Spinner";
import { useSelector } from "react-redux";
import Modal from "../components/Shared/modal/Modal";
import API from "../services/API";

const HomePage = () => {
  const { loading, error } = useSelector((state) => state.auth);

  const [data, setData] = useState([]);
  
  const getBloodRecords = async () => {
    try {
      const { data } = await API.get("/inventory/get-inventory");
      if (data?.success) {
        setData(data?.inventory);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBloodRecords();
  });
  return (
    <Layout>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h4
            className="ms-4"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            style={{ cursor: "pointer" }}
          >
            <i className="fa-solid fa-plus text-danger py-4"></i>
            Add Inventory
          </h4>

          <Modal />
        </>
      )}
    </Layout>
  );
};

export default HomePage;
