import React from 'react';
import { Layout } from 'antd';
import Header from '../components/Header';
import Body from '../components/Body';
import AppFooter from '../components/Footer';

const { Content } = Layout;

export default function Home() {
    return (
        <Layout>
            <Header />
            <Body />
            <AppFooter />
        </Layout>
    );
}