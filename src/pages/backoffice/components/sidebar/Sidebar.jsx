import React, { useState, useEffect } from 'react';
import './Sidebar.css'
import Logo from '../../../../img/fte.png';
import { NavLink, Link } from 'react-router-dom'
import { SidebarData } from '../data/Data';
import { UilSignOutAlt } from '@iconscout/react-unicons';
import { FaBook, FaBookOpen, FaChartPie, FaHome, FaMoon, FaRocket, FaUserAlt, FaUsers } from 'react-icons/fa'
import { MdSunny } from 'react-icons/md'
import { ImBell } from 'react-icons/im'
import { IconContext} from 'react-icons/lib';
import { backdropClasses } from '@mui/material';

const Sidebar = (theme = true ) => {
  const [selected, setSelected] = useState(0);
  const [dark, setDark] = useState(false)
    useEffect(() => {
        setDark(theme)
    }, [theme])

const [subItems, setSubItems] = useState(false);
const showSubItmes = () => setSubItems(!subItems);
  return (
    <div>
    <div className="Sidebar">
    <div className="logo">
            <img src={Logo} alt="IMG" />
          </div>
      <div className='menu'>
            {SidebarData.map((item, index) => {
                return(

                    <NavLink className={selected===index?'menuItem active': 'menuItem'}
                        key={index}
                            onClick={()=>setSelected(index) && item.subItems && showSubItmes}
                            to={item.route && item.subItems && subItems
                            ? item.iconOpened
                            : item.subItems
                            ? item.iconClosed
                            : null    
                        }
                            >
                        
                        <item.icon/>
                        <span>
                            {item.heading}
                        </span>
                    </NavLink>
                    
                )
                // {subItems && item.subItems.map{(item, index) =>{
                //     return {
                //         <DropdownLink to={item.route} key={index}>
                //             {item.icon}
                //         </DropdownLink>
                //     }
                // }}}
            })}

            <div className='menuItem'>
                <UilSignOutAlt/>

            </div>

            <div className='topbar' style={{ color: dark ? 'white' : 'black' }}>
      
            <div style={{
                fontSize: 10, fontWeight: 300,
            }}><span style={{display: 'flex', alignItems: 'center', color:'Black'}}></span></div>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', }}>
                <div style={{ display: 'flex', flexDirection: 'row-reverse', gap: 15, cursor: 'pointer', }}>
                    <div style={{
                        position: 'absolute', width: 20, height: 20,
                        borderRadius: 50, background: 'red', top: 22, color: 'white',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>2</div>
                    <div style={{
                        background: dark ? '#ffffff67' : '#00000067',
                        borderRadius: 50, marginRight: 8,
                        width: 36, height: 36, flexDirection: 'row-reverse',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                        <ImBell size={22} />
                    </div>
                </div>
                <div onClick={() => { setDark(!dark) }} style={{
                    width: 36, height: 36, cursor: 'pointer',
                    background: dark ? '#ffffff67' : '#00000067',
                    borderRadius: 50, display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>{dark ? <FaMoon color='white' size={22} /> : <MdSunny color='yellow' size={25} />}</div>

                <img src={dark ? "logout3.png" : "logout2.png"} alt="" style={{ width: 50, height: 50, cursor: 'pointer' }} />
            </div>
        </div>
            

        </div>
    </div>
      
  </div>
  )
}

export default Sidebar;
