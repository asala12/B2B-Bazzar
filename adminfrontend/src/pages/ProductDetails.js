import React, { useEffect } from "react";
import { Table, Typography, Col, Row} from "antd";
import { useParams } from "react-router-dom";
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../features/product/productSlice";
const {Text, Title} = Typography;

const ProductDetails= () => {
const { id } = useParams();
const Price = [];
const Timestamp = [];
const product = JSON.parse(localStorage.getItem('product'));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(id));
  }, []);
  
  const productState = useSelector((state) => state.product.products);
      console.log(productState);
        for (let i = 0; i < productState?.history?.length; i += 1) {
    Price.push(productState?.history[i]?.price);
 const year = productState?.history[i]?.createdAt.substring(0, 4);
const month = productState?.history[i]?.createdAt.substring(4, 6);
const day = productState?.history[i]?.createdAt.substring(6, 8);
const formattedDate = `${day}/${month}/${year}`;
  Timestamp.push(formattedDate);
  }
const data = {
    labels: Timestamp,
    datasets: [
      {
        label: 'Historical Prices',
        data: Price,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  }; 
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  const data1 = [];
  for (let i = 0; i < productState.length; i++) {
    data1.push({
      title: productState[i].title,
      description: productState[i].description,
      brand: productState[i].brand,
      color: productState[i].color,
      price: `${productState[i].price}`,
    });
  }
  return (
    <Col className='product-detail-container'>
      <Col className='product-heading-container'>
        <Title level={2}>
          {productState?.title} Details
        </Title>
        <p>
          {productState?.description}
        </p>
        <Title level={3}>
          Current Price : {productState?.price}
        </Title>
        <p>
         brand: {productState?.brand}        
        </p>
        <p> color: {productState?.color}    </p>
      </Col>
      <Col className='chart-container'>
        <Line data={data} options={options} />
      </Col>
      

    </Col>
  );
};

export default ProductDetails;