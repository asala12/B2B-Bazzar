import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete ,AiOutlineEye} from "react-icons/ai";
import { getProviders } from "../features/providers/providerSlice";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Providers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProviders());
  }, []);
  const providerstate = useSelector((state) => state.provider.providers);
const data1 = [];
if (Array.isArray(providerstate)) {
  for (let i = 0; i < providerstate.length; i++) {
    if (providerstate[i].role !== "admin") {
      data1.push({
        key: i + 1,
        name: providerstate[i].firstname + " " + providerstate[i].lastname,
        email: providerstate[i].email,
        mobile: providerstate[i].mobile,
         action: (
        <>
          <Link to="/" className=" fs-3 text-danger">
            <BiEdit />
          </Link>
          <Link className="ms-3 fs-3 text-danger" to="/">
            <AiFillDelete />
          </Link>
          <Link className="ms-3 fs-3 text-danger" to={`/admin/provider-products/${providerstate[i]._id}`}
>
            <AiOutlineEye />
          </Link>
        </>
      ),
      });
    }
  }
}


  return (
    <div>
      <h3 className="mb-4 title">Providers</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Providers;