import { useGetProductsQuery } from "../../../context/api/productApi"
import "./ManageProduct.scss"
import productImg from "../../../assets/images/page/admin/manage-product/product.png"
import { Link } from "react-router-dom"
const ManageProduct = () => {
    const { data } = useGetProductsQuery()
    let product = (data?.data?.products);
    console.log(data?.data);
    let products = product?.map((product) => (
        <div key={product.id} className="manage-product__card">
            <Link to={`/single-rout/${product.id}`} className="manage-product__img-box">
                <img src={product.urls[0] ? product.urls[0] : productImg} alt={product?.title} className="manage-product__image" />
            </Link>
            <div className="manage-product__details">
                <h3 className="manage-product__title">{product?.title}</h3>
                <p className="manage-product__description">{product?.description}</p>
                <p className="manage-product__brand">Unit: {product?.units}</p>
                <p className="manage-product__category">Category: {product?.category}</p>
                <div className="manage-product__pricing">
                    <span className="manage-product__price">${product?.price}</span>
                    {product?.oldPrice && <span className="manage-product__old-price">${product?.oldPrice}</span>}
                </div>
                <div className="manage-product__actions">
                    <button className="manage-product__edit">Edit</button>
                    <button onClick={() => handelDelete(product?.id)} className="manage-product__delete">Delete</button>
                </div>
            </div>
        </div >
    )).reverse()
    const handelDelete = (id) => {
        product.filter((el) => el.id !== id)
    }
    return (
        <>
            <section className="manage-product">
                <div className="manage-product__wrapper">
                    <h1 className="manage-product__title-base">Manage Product</h1>
                    <div className="manage-product__cards">
                        {products}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ManageProduct