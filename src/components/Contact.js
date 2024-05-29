import React, { useState } from "react";
import { Space, Button, Modal, Radio } from 'antd';
import { WhatsAppOutlined, PhoneOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';

export default function Contact() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const showModal = (content) => {
        setModalContent(content);
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>

            <Space style={{ marginBottom:"24px" }}>
                <Button type="primary" icon={<WhatsAppOutlined />} style={{ backgroundColor: '#25D366', borderColor: '#25D366' }} onClick={() => showModal('WhatsApp: +123456789')}>
                    WhatsApp
                </Button>
                <Button type="primary" icon={<PhoneOutlined />} style={{ backgroundColor: '#0088cc', borderColor: '#0088cc' }} onClick={() => showModal('Telegram: @yourusername')}>
                    Telegram
                </Button>
                <Button type="primary" icon={<LinkedinOutlined />} style={{ backgroundColor: '#0e76a8', borderColor: '#0e76a8' }} onClick={() => showModal('LinkedIn: linkedin.com/in/yourprofile')}>
                    LinkedIn
                </Button>
                <Button type="primary" icon={<MailOutlined />} style={{ backgroundColor: '#EA4335', borderColor: '#EA4335' }} onClick={() => showModal('Email: yourname@example.com')}>
                    Email
                </Button>
            </Space>

            <Modal title="Contact Information" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>{modalContent}</p>
            </Modal>
        </>
    );
}
