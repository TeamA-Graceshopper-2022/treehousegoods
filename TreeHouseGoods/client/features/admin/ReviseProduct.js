import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editProduct } from "../../app/AllProductsSlice/allProductsSlice";

const ReviseProduct = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    // const product = useSelector((state) => state.singleProduct.product)

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCatergory] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState('');
    const [imageAlt, setAlt] = useState('');
    const [inventory, setInventory] = useState('');

    const changeProduct = () => {
        dispatch(editProduct({ id, name, price, category, desc, image, imageAlt, inventory }));
        setName('');
        setPrice('');
        setCatergory('');
        setDesc('');
        setImage('');
        setAlt('');
        setInventory('')
    };

    return (
        <div className="editproductForm">
        <form className="editform" onSubmit={changeProduct}>
            <input input name="name" placeholder="Product Name"value={name} type="text" onChange={(evt) => setName(evt.target.value)} />

            <input input name="price" placeholder="Price" value={price} type="text" onChange={(evt) => setPrice(evt.target.value)} />

            <input input name="catergory" placeholder="Category" value={category} type="text" onChange={(evt) => setCatergory(evt.target.value)} />

            <input input name="desc" value={desc} placeholder="Description" type="text" onChange={(evt) => setDesc(evt.target.value)} />

            <input input name="image" value={image} placeholder="Image" type="text" onChange={(evt) => setImage(evt.target.value)} />

            <input input name="alt" value={imageAlt} placeholder="Alternative Image" type="text" onChange={(evt) => setAlt(evt.target.value)} />

            <input input name="inventory" value={inventory} placeholder="Inventory" type="text" onChange={(evt) => setInventory(evt.target.value)} />

            <button type="submit" className="signButton">Edit</button>
            <button type="button" className="signButton" onClick={
                () => {
                    setName('');
                    setPrice('');
                    setCatergory('');
                    setDesc('');
                    setImage('');
                    setAlt('');
                    setInventory('')
                }
            }>Reset Form</button>
        </form>
        </div>
    );
};

export default ReviseProduct;