import React from "react";
import { Space, Button } from 'antd';
import { LaptopOutlined, MobileOutlined, CodeOutlined, EnvironmentOutlined, WhatsAppOutlined } from '@ant-design/icons';



export default function Status() {

    const handleItemClick = (item) => {
        console.log(`Clicked on ${item}`);
    };

    return (
        <>
            <Space size="large" >
                <Button type="link" style={{ color: "black" }} onClick={() => handleItemClick('Développeur IT')}>
                    <LaptopOutlined /> Développeur IT
                </Button>
                <Button type="link" style={{ color: "black" }} onClick={() => handleItemClick('Application Mobile')}>
                    <MobileOutlined /> Application Mobile
                </Button>
                <Button type="link" style={{ color: "black" }} onClick={() => handleItemClick('Fullstack')}>
                    <CodeOutlined /> Fullstack
                </Button>
            </Space>
        </>
    );
}
