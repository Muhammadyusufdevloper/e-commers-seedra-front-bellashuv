import { useNavigate } from 'react-router-dom';
import { useGetValue } from '../../../hooks/useGetValue';
import { useEffect, useState } from 'react';
import { useCreateProductMutation } from '../../../context/api/productApi';
import './CreateProduct.scss';
import { useGetCategoryQuery } from '../../../context/api/categoryApi';
import LocalImages from './LocalImages';
import { toast } from 'react-toastify';

let initialState = {
    title: "Olma",
    price: "243567",
    oldPrice: "45678976543",
    category: "string",
    units: "kg",
    description: "Menva",
    info: "Meva",
}

const CreateProduct = () => {
    let navigate = useNavigate();
    const { formData, handleChange } = useGetValue(initialState);
    const [files, setFiles] = useState("");
    const [createProduct, { isLoading, isSuccess }] = useCreateProductMutation();
    const { data: category } = useGetCategoryQuery()
    let categories = (category?.data)
    useEffect(() => {
        if (isSuccess) {
            if (confirm("Malumot saqlandi malumotni ko'rmoqchimisiz")) return  
            navigate("/admin/manage-product");
        }
    }, [isSuccess]);

    const handelCreate = (e) => {
        e.preventDefault();
        let form = new FormData();
        form.append("title", formData.title);
        form.append("price", +formData.price);
        form.append("oldPrice", +formData.oldPrice);
        form.append("category", formData.category);
        form.append("units", formData.units);
        form.append("description", formData.description);
        form.append("info", JSON.stringify({}))
        
        Array.from(files).forEach(img => {
            form.append("files", img, img.name)
        })
        createProduct(form);
    };
    const handleChangeImage = e => {
        let chosenFiles = [...e.target.files]
        if (chosenFiles.length > 5) {
            return toast.error("rasm 5ta yuklay olasiz halos")
        }
        setFiles(e.target.files)
    }
    return (
        <section className="create-product">
            <div className="create-product__wrapper">
                <form className="create-product__form" onSubmit={handelCreate}>
                    <div className="create-product__group">
                        <input type="text" onChange={handleChange} value={formData.title} name="title" className="create-product__input" placeholder=" " required />
                        <label className="create-product__label">Title</label>
                    </div>
                    <div className="create-product__group">
                        <input type="number" onChange={handleChange} value={formData.price} name="price" className="create-product__input" placeholder=" " required />
                        <label className="create-product__label">Price</label>
                    </div>
                    <div className="create-product__group">
                        <input type="number" onChange={handleChange} value={formData.oldPrice} name="oldPrice" className="create-product__input" placeholder=" " required />
                        <label className="create-product__label">Old Price</label>
                    </div>
                    <div className="create-product__group">
                        <select type="text" onChange={handleChange} value={formData.category} name="category" className="create-product__input" placeholder=" " required >
                            <option selected hidden>Category</option>
                            {
                                categories?.map((el) => (
                                    <option key={el.id} value={el?.title}>{el?.title.slice(0, 1).toUpperCase() + el?.title.slice(1).toLowerCase()}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="create-product__group">
                        <select type="text" onChange={handleChange} value={formData.units} name="units" className="create-product__input" placeholder=" " required >
                            <option hidden selected>Unite</option>
                            <option value="dona">Dona</option>
                            <option value="kg">Kg</option>
                            <option value="gr">Gr</option>
                            <option value="ml">Ml</option>
                            <option value="t">T</option>
                        </select>
                    </div>
                    <div className="create-product__group">
                        <textarea className='create-product__textarea' type="text" onChange={handleChange} value={formData.description} name="description" placeholder=" Description" required />
                    </div>
                    <div className="create-product__group">
                        <textarea className='create-product__textarea' type="text" onChange={handleChange} value={formData.info} name="info" placeholder=" info " required />
                    </div>
                    <div className="create-product__group create-product__group--file">
                        <label htmlFor='create-product_input' className='create-product__image'>
                            <input id='create-product_input' onChange={handleChangeImage} multiple accept='image/*' type="file" />
                        </label>
                        <br />
                        <LocalImages files={files} setFiles={setFiles} />
                    </div>
                    <button disabled={isLoading} type="submit" className="create-product__button">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default CreateProduct;
