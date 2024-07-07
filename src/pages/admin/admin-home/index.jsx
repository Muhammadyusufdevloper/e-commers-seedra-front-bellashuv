import './AdminHome.scss';
import userImg from "../../../assets/images/page/admin/admin-home/user-img.png"
import { useState } from 'react';
const AdminHome = () => {
    const [data, setData] = useState(JSON.parse(localStorage.getItem("user-data")) || [])
    console.log();
    return (
        <>
            <section className="admin-home">
                <div className="admin-home__wrapper">
                    <h1>{data?.role?.slice(0, 1).toUpperCase() + data?.role?.slice(1).toLowerCase()}</h1>
                    <div className="admin-home__user-card">
                        <div className="admin-home__user-card__image">
                            <img src={userImg} alt="User Image" />
                        </div>
                        <div className="admin-home__user-card__info">
                            <h2 className="admin-home__user-card__name">{data?.FirstName?.slice(0, 1).toUpperCase() + data?.FirstName?.slice(1).toLowerCase()} {data?.LastName?.slice(0, 1).toUpperCase() + data?.LastName?.slice(1).toLowerCase()}</h2>
                            <p className="admin-home__user-card__username">{data?.UserName}</p>
                            <p className="admin-home__user-card__created">Created on: {data?.UpdatedAt.split("T").slice(1).join(".").split(".").slice(0, 1).join("")}</p>
                            <p className="admin-home__user-card__username">{data?.phones[0]}</p>
                            <p className="admin-home__user-card__username">{data?.phones[1]}</p>
                            <p className="admin-home__user-card__created">Created on: {data?.UpdatedAt.split("T").slice(1).join(".").split(".").slice(0, 1).join("")}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AdminHome;
