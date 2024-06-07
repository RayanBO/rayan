import React from 'react';
import { Card, Divider, Typography, Tag, Row, Col } from 'antd';
import { bgf } from './Utils'

const { Title, Text } = Typography;


const PartTwo = () => {
    return (
        <div>
            <Card className='block' style={bgf}>
                <Title level={4}>Projets d'entreprise</Title>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card style={bgf} type="inner" title="Stallion RH" bordered={false}>
                            <img alt="Stallion RH" src="stallion-rh-logo.png" style={{ width: '100%', marginBottom: '15px' }} />
                            <Text>UMO-Interim est une équipe de professionnels passionnés et spécialisés dans les services et le conseil en ressources humaines. Ils proposent des services de recrutement, de formation, de gestion de la paie et d'intérim.</Text>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card style={bgf} type="inner" title="Les Tribunaux de Madagascar" bordered={false}>
                            <img alt="Les Tribunaux de Madagascar" src="tribunaux-madagascar-logo.png" style={{ width: '100%', marginBottom: '15px' }} />
                            <Text>Digitalisation des tribunaux de Madagascar TPI, TA, TF et PAC.</Text>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card style={bgf} type="inner" title="Prochainement..." bordered={false}>
                            <img alt="Prochainement" src="prochainement.png" style={{ width: '100%', marginBottom: '15px' }} />
                            <Text>Prochain projet à venir.</Text>
                        </Card>
                    </Col>
                </Row>
            </Card>
            <Divider />
            <Card className='block' style={bgf}>
                <Title level={4}>Certifications - Etudes</Title>
                <ul>
                    <li>Certificat Python - Sololearn, En ligne, 2024</li>
                    <li>Certificat Javascript - Sololearn, En ligne, 2022</li>
                    <li>Certificat SQL - Sololearn, En ligne, 2022</li>
                    <li>L3 en Mathématique et Informatique (MISS) - Faculté des Sciences Fianarantsoa Madagascar, 2019</li>
                    <li>Certificat BST (leadership) - Jeunesse adventiste, 2018</li>
                    <li>BACCALAUREAT Scientifique - Lycée RAHERIVELO RAMAMONJY, 2016</li>
                </ul>
            </Card>
            <Divider />
            <Card className='block' style={bgf}>
                <Title level={4}>Compétences</Title>
                <Text>Languages</Text>
                <div>
                    <Tag>Html/Css/Js</Tag>
                    <Tag>Php</Tag>
                    <Tag>Python</Tag>
                    <Tag>Ruby</Tag>
                    <Tag>Dart</Tag>
                </div>
                <Text>Frontend</Text>
                <div>
                    <Tag>React.js</Tag>
                    <Tag>Astro</Tag>
                    <Tag>Angular</Tag>
                    <Tag>Vue.js</Tag>
                </div>
                <Text>Backend</Text>
                <div>
                    <Tag>Django</Tag>
                    <Tag>Omnis Studio</Tag>
                    <Tag>Node.js</Tag>
                </div>
                <Text>Autres</Text>
                <div>
                    <Tag>Flutter</Tag>
                    <Tag>Unity</Tag>
                    <Tag>Sql, NoSQL, PostgreSQL</Tag>
                    <Tag>Office tools</Tag>
                    <Tag>PAO: Photoshop, Illustrator, InDesign</Tag>
                    <Tag>Mt4/Mt5</Tag>
                </div>
            </Card>
        </div>
    );
}

export default PartTwo;
