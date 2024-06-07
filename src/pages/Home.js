import React from 'react';
import { Layout } from 'antd';
import Header from '../components/Header';
import Body from '../components/Body';
import AppFooter from '../components/Footer';
// import bgImage from '../assets/bg.svg'



export default function Home() {
    return (
        <Layout style={{ height: "100vh" }} className='bg'>
            <div style={{ height: "100px" }} className='block2'>
                <Header />
            </div>
            <div className="scroll-container" style={{ overflowY: "auto", height: "calc(100vh - 100px)" }}>
                <Body />
            </div>
            <div className='block2'>
                <AppFooter />
            </div>
        </Layout>
    );
}