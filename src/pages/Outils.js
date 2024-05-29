import React from 'react';
import { Layout, Card, Row, Col, Button } from 'antd';
import Header from '../components/Header';
import AppFooter from '../components/Footer';

import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';


const { Content, Footer } = Layout;

const tools = [
    {
        category: 'Design',
        items: [
            { name: 'Figma', description: 'Design Tool' },
        ],
    },
    {
        category: 'Productivité',
        items: [
            { name: 'Notion', description: 'Note Taking' },
            { name: 'Obsidian', description: 'Long-form Writing' },
            { name: 'ChatGPT', description: 'AI' },
        ],
    },
    {
        category: 'Développement',
        items: [
            { name: 'VS Code', description: 'IDE' },
            { name: 'Github', description: 'Plateforme de développement collaboratif' },
        ],
    },
];


export default function Outils() {
    const navigate = useNavigate();
    return (
        <Layout className="layout">
            <Header currentpage={'/tools'} />
            <Content style={{ padding: '0 50px' }}>
                <div style={{ display: "flex", alignItems: 'center', justifyContent: 'space-between' }}>
                    <Button onClick={() => navigate('/')} icon={<ArrowLeftOutlined />}>Retour</Button>
                    <h1>#</h1>
                </div>
                <div className="site-layout-content">
                    <div>
                        {tools.map((tool) => (
                            <div key={tool.category}>
                                <h2>{tool.category}</h2>
                                <Row gutter={[16, 16]}>
                                    {tool.items.map((item) => (
                                        <Col span={8} key={item.name}>
                                            <Card title={item.name}>
                                                <p>{item.description}</p>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        ))}
                    </div>
                </div>
            </Content>
            <AppFooter />
        </Layout>
    );
}
