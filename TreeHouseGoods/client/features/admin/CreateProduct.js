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
        <div>
        <form className="addform" onSubmit={handleSubmit}>
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

            <button type="submit">Submit</button>
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

export default CreateProduct;