import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../app/AllProductsSlice/allProductsSlice";

const CreateProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCatergory] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState('');
    const [imageAlt, setAlt] = useState('');
    const [inventory, setInventory] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch(addProduct({ name, price, category, desc, image, imageAlt, inventory }));
        setName('');
        setPrice('');
        setCatergory('');
        setDesc('');
        setImage('');
        setAlt('');
        setInventory('')
    };

    return (
        <div className="createproductForm">
        <form className="addform" onSubmit={handleSubmit}>
            <input input name="name" placeholder="Product Name" value={name} type="text" onChange={(evt) => setName(evt.target.value)} />

            <input input name="price" value={price} placeholder="Price" type="text" onChange={(evt) => setPrice(evt.target.value)} />

            <input input name="catergory" value={category} placeholder="Category" type="text" onChange={(evt) => setCatergory(evt.target.value)} />

            <input input name="desc" value={desc} type="text" placeholder="Description" onChange={(evt) => setDesc(evt.target.value)} />

            <input input name="image" value={image} placeholder="Image" type="text" onChange={(evt) => setImage(evt.target.value)} />

            <input input name="alt" value={imageAlt} placeholder="Alternative Image"type="text" onChange={(evt) => setAlt(evt.target.value)} />

            <input input name="inventory" value={inventory} placeholder="Inventory"type="text" onChange={(evt) => setInventory(evt.target.value)} />

            <button type="submit" className="signButton">Submit</button>
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

export default CreateProduct;