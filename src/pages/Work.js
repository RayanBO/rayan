import React from 'react';
import { Layout, Card, Row, Col, Button } from 'antd';
import Header from '../components/Header';
import AppFooter from '../components/Footer';

import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Content } = Layout;

const works = [
    {
        title: 'Projet 1',
        description: 'En cours ...',
    },
    {
        title: 'Projet 2',
        description: 'Description du projet 2.',
    },
    {
        title: 'Projet 1',
        description: 'Description du projet 1.',
    },
    {
        title: 'Projet 2',
        description: 'Description du projet 2.',
    },
    {
        title: 'Projet 1',
        description: 'Description du projet 1.',
    },
    {
        title: 'Projet 2',
        description: 'Description du projet 2.',
    },
    // Ajoutez d'autres projets ici
];

export default function Work() {
    const navigate = useNavigate();
    return (
        <Layout className="layout">
            <Header currentpage={'/work'} />
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content">
                    <div style={{ display: "flex" , alignItems:'center' , justifyContent:'space-between' }}>
                        <Button onClick={() => navigate('/')} icon={<ArrowLeftOutlined />}>Retour</Button>
                        <h1>#</h1>
                    </div>
                    <Row gutter={[16, 16]}>
                        {works.map((work) => (
                            <Col span={8} key={work.title}>
                                <Card title={work.title}>
                                    <p>{work.description}</p>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Content>
            <AppFooter />
        </Layout>
    );
}
