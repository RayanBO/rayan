import React from 'react';
import { Card, Divider, Timeline, Typography, Row } from 'antd';
import { ProfileOutlined, ProjectOutlined, LaptopOutlined } from '@ant-design/icons';
import { bgf } from './Utils'

const { Title, Text } = Typography;

export default function PartOne() {
    return (
        <Row style={{ width: "100%" }} >
            <Card style={{ width: "100%" , ...bgf }} className='block'>
                <Title level={4}><ProfileOutlined /> A propos</Title>
                <Text>Je suis passionné par le développement 🔥. Je suis développeur Malagasy, Âgé de 26ans, je suis ravi de vous aider 😊. Mes services peuvent être gratuits 😇, alors n'hésitez pas à me contacter.</Text>
            </Card>
            <Divider />
            <Card style={{ width: "100%",  ...bgf  }} className='block'>
                <Title level={4}><ProjectOutlined /> Projets</Title>
                <Timeline>
                    <Timeline.Item color="green">17 mai 2024 - Application de Chat Local</Timeline.Item>
                    <Timeline.Item color="green">26 avr. 2024 - Mon 2e portfolio</Timeline.Item>
                    <Timeline.Item color="green">30 janv. 2024 - Mon 1er portfolio</Timeline.Item>
                </Timeline>
            </Card>
            <Divider />
            <Card style={{ width: "100%",  ...bgf  }} className='block'>
                <Title level={4}><LaptopOutlined /> Expérience</Title>
                <Card style={ bgf } type="inner" title="Développeur IT - Chez OBS-OI" extra="Fév 2022 - Présent">
                    <ul>
                        <li>Dans mon rôle de développeur IT, j'ai été responsable du développement de l'interface de l'application, de la gestion de la base de données ainsi que de la liaison entre les deux.</li>
                        <li>Application conçue : TPI, TA, TF, BIANCO, ANBG, Stallion RH ou UMO.</li>
                    </ul>
                </Card>
                <Card type="inner" title="Développeur Mobile / Frontend - Freelance" extra="Jan 2024 - Présent" style={{ marginTop: 16 , ...bgf }}>
                    <Text>Expérience en développement mobile et frontend en freelance.</Text>
                </Card>
            </Card>
        </Row>
    );
}