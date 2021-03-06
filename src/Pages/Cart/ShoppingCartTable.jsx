import {
  Button,
  Image,
  InputNumber,
  Popconfirm,
  Table,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import { AiFillDelete, AiOutlineQuestionCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import Loader from "../../Components/Loader/Loader";
import { removeProductFromCart } from "../../redux/actions/cart-actions";
import { SectionHeader } from "../Home/HomeHotSellers";

const { Text } = Typography;

const ShoppingCartTable = ({ cartProducts = [], setCartProducts }) => {
  const [quantities, setQuantities] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (quantities.length <= 0) return;
    let localStorageProducts = cartProducts.map((cartProduct) => {
      let founded_product = quantities.findIndex(
        (quantity) => quantity.productId === cartProduct.product.productId
      );
      if (founded_product < 0) return cartProduct;
      let newProduct = {
        ...cartProduct,
        quantity: quantities[founded_product].data,
      };
      return newProduct;
    });

    localStorage.setItem("cart-products", JSON.stringify(localStorageProducts));
    setCartProducts((old) => JSON.parse(localStorage.getItem("cart-products")));

    // eslint-disable-next-line
  }, [quantities, setCartProducts]);
  const handleQuantityChange = ({ data, productId }) => {
    setQuantities((oldQuantities) => {
      const Existing_Object = oldQuantities.findIndex(
        (eachObj) => eachObj.productId === productId
      );

      if (Existing_Object >= 0) {
        let quntitiesAfterDelete = [...oldQuantities];
        quntitiesAfterDelete.splice(Existing_Object, 1);

        return [...quntitiesAfterDelete, { data, productId }];
      }

      return [
        ...oldQuantities,
        {
          data,
          productId,
        },
      ];
    });
  };

  const handleDelete = (product) => {
    console.log(product);
    let newCartProducts = [...cartProducts];
    const Existing_Product_on_localstorage = cartProducts.findIndex(
      (cProduct) => cProduct.product.productId === product.productId
    );
    newCartProducts.splice(Existing_Product_on_localstorage, 1);
    localStorage.setItem("cart-products", JSON.stringify(newCartProducts));
    setCartProducts(JSON.parse(localStorage.getItem("cart-products")));
    dispatch(removeProductFromCart(newCartProducts))
  };

  const columns = [
    {
      title: "Photo",
      key: "productCoverUrl",
      render: (text, data) => (
        <Image
          width={60}
          height={60}
          src={data.productCoverUrl}
          alt="productPhoto"
          className=" mx-2"
          style={{ objectFit: "contain", borderRadius: 7 }}
          fallback="data:image/png;base64,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"
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Price",
      dataIndex: "productPrice",
      key: "productPrice",
      render: (text, data) => <Text>Rs {text}</Text>,
    },
    {
      title: "Weight",
      dataIndex: "productWeight",
      key: "productWeight",
    },
    {
      title: "Size",
      dataIndex: "productSize",
      key: "productSize",
    },

    {
      title: "Quantity",
      dataIndex: "productMinOrder",
      key: "productMinOrder",
      render: (text, data) => {
        return (
          <InputNumber
            onChange={(inputData) =>
              handleQuantityChange({
                data: inputData,
                productId: data.productId,
              })
            }
            min={data.productMinOrder}
            defaultValue={data.quantity}
          />
        );
      },
    
    },
    {
      title: "Brand",
      dataIndex: "brandName",
      key: "brand",
      render:(text,data)=>(
        <Text strong mark>{text}</Text>
      )
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, data) => (
        <Popconfirm
          icon={<AiOutlineQuestionCircle color="red" />}
          title="Sure to Delete?"
          onConfirm={() => handleDelete(data)}
        >
          <Button
            className="bg-danger text-white"
            icon={<AiFillDelete />}
          ></Button>
        </Popconfirm>
      ),
    },
  ];

  let dataSource = cartProducts.map(({ quantity, product }) => {
    return { ...product, quantity ,brandName:product.supplier.brandName  };
  });

  return (
    <section className="col px-0  me-1 " style={{ overflowX: "auto" }}>
      {!cartProducts.length ? (
        <SectionHeader
          key={23}
          level={4}
          classnames={"mt-0"}
          title="Your Cart is Empty"
        />
      ) : (
        <Table
          loading={{
            spinning: false,
            indicator: <Loader />,
          }}
          className=""
          columns={columns}
          dataSource={dataSource}
          rowKey={(product) => product.productId}
        />
      )}
    </section>
  );
};

export default ShoppingCartTable;
