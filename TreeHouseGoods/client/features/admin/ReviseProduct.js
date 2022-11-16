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
        <div>
        <form className="editform" onSubmit={changeProduct}>
            <label>Product Name:</label>
            <input input name="name" value={name} onChange={(evt) => setName(evt.target.value)} />

            <label>Price:</label>
            <input input name="price" value={price} onChange={(evt) => setPrice(evt.target.value)} />

            <label>Category:</label>
            <input input name="catergory" value={category} onChange={(evt) => setCatergory(evt.target.value)} />

            <label>Description:</label>
            <input input name="desc" value={desc} onChange={(evt) => setDesc(evt.target.value)} />

            <label>Image:</label>
            <input input name="image" value={image} onChange={(evt) => setImage(evt.target.value)} />

            <label>Alternative Image:</label>
            <input input name="alt" value={imageAlt} onChange={(evt) => setAlt(evt.target.value)} />

            <label>Inventory:</label>
            <input input name="inventory" value={inventory} onChange={(evt) => setInventory(evt.target.value)} />

            <button type="submit">Edit</button>
            <button type="button" onClick={
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