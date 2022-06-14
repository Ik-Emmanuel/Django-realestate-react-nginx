import React, { useState } from 'react'
import { Anchor, Button, Drawer } from 'antd'
import { Link } from 'react-router-dom'

const AppHeader = () => {


    const [visible, setVisible] = useState(false)

    const showDrawer = () => {
        setVisible(true)
    }
    const closeDrawer = () => {
        setVisible(false)
    }

    return (
        <div>
            <div className="fluid-container">
                <div className="header">
                    <div className="logo">
                        <i className="fas fa-home fa-2x">

                        </i>
                        <Link to='/'> NuSpace</Link>
                        <div className="mobileHidden">
                            <Anchor targetOffset="65">
                            <Anchor.Link href='#banner' title="Home"></Anchor.Link>
                            <Anchor.Link href='#about' title="About"></Anchor.Link>
                            <Anchor.Link href='#options' title="Options"></Anchor.Link>
                            <Anchor.Link href='#faq' title="FAQ"></Anchor.Link>
                            <Link to='/properties' className='ant-anchor-link-title'>
                               Properties
                            </Link>
                            </Anchor>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AppHeader
