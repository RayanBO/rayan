import React from "react";
import {
    RotateLeftOutlined,
    RotateRightOutlined,
    SwapOutlined,
    ZoomInOutlined,
    ZoomOutOutlined,
} from '@ant-design/icons';
import { Image, Space } from 'antd';
import Spline from '@splinetool/react-spline';
import bgImage from '../assets/bg.svg';

const styles = {
    content: {
        textAlign: 'start',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: "24px"
    },
    image: {
        borderRadius: '5px',
        border: 'solid .5px #00000052'
    },
    bgImage: {
        position: 'absolute',
        right: 500,
        bottom: 50,
        width: '200px',
        height: '200px',
        opacity: 0.3
    }
};

export function Profile() {
    const src = 'image.jpg';
    return (
        <div style={{ position: 'relative', display: "flex", justifyContent: "center", width: "100%" }}>
            <div style={{ height: "400px", width: "500px" }}>
                <Spline scene="https://prod.spline.design/WtXOjxgiZGfRn6-T/scene.splinecode" />
            </div>
            <div style={styles.content}>
                <div>
                    <Image
                        width={75}
                        src={src}
                        style={styles.image}
                        preview={{
                            toolbarRender: (_, { transform: { scale }, actions: { onFlipY, onFlipX, onRotateLeft, onRotateRight, onZoomOut, onZoomIn } }) => (
                                <Space size={12} className="toolbar-wrapper">
                                    <SwapOutlined rotate={90} onClick={onFlipY} />
                                    <SwapOutlined onClick={onFlipX} />
                                    <RotateLeftOutlined onClick={onRotateLeft} />
                                    <RotateRightOutlined onClick={onRotateRight} />
                                    <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
                                    <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
                                </Space>
                            )
                        }}
                    />
                </div>
                <div style={{ marginTop: '16px', marginBottom: '8px', fontSize: '24px', fontWeight: '100', color: '#000000' }}>
                    Rayan RAVELONIRINA
                </div> 
                <div style={{ fontWeight:"500"}}>
                    J'ai 26ans et je suis ...
                </div>
            </div>
            <img src={bgImage} alt="Background" style={styles.bgImage} />
        </div>
    );
}
