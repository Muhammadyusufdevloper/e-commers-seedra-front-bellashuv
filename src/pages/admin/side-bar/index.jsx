import { AiFillProduct } from 'react-icons/ai';
import { IoMdHome } from 'react-icons/io';
import { MdCreateNewFolder } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import "./SideBar.scss";

const SideBar = ({ menu }) => {
  return (
    <>
      <div className='side-bar'>
        <div className='side-bar__wrapper'>
          <ul className='side-bar__list'>
            <li className='side-bar__item'>
              <NavLink to="admin-home" className='side-bar__link'>
                <div><IoMdHome width={24} height={24} /></div>
                <span className={`${menu ? "" : "side-bar__link-span"}`}>Home</span>
              </NavLink>
              <NavLink to="create-product" className='side-bar__link'>
                <div><MdCreateNewFolder width={24} height={24} /></div>
                <span className={`${menu ? "" : "side-bar__link-span"}`}>Create Products</span>
              </NavLink>
            </li>
            <li className='side-bar__item'>
              <NavLink to="manage-product" className='side-bar__link'>
                <div><AiFillProduct width={24} height={24} /></div>
                <span className={`${menu ? "" : "side-bar__link-span"}`}>Manage Products</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideBar;
