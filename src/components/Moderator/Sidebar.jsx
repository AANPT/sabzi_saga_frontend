import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './sidebar.css';
import { IconContext } from 'react-icons';

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='sidebar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'side-menu active' : 'side-menu'}>
                    <ul className='side-menu-items' onClick={showSidebar}>
                        <li className='sidebar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span className='menu-title'>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Sidebar

const SidebarData = [
    {
        title: 'DashBoard',
        path: '/vendor/dashboard',
        icon: <AiIcons.AiFillHome />,
        cName: 'sidebar-text'
    },
    {
        title: 'Product Mangaer',
        path: '/vendor/productmgmt',
        icon: <IoIcons.IoIosDocument />,
        cName: 'sidebar-text'
    },

    {
        title: 'Order Manager',
        path: '/vendor/ordermgmt',
        icon: <FaIcons.FaCartPlus />,
        cName: 'sidebar-text'
    },

];