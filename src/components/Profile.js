import React from "react";
import {
    RotateLeftOutlined,
    RotateRightOutlined,
    SwapOutlined,
    ZoomInOutlined,
    ZoomOutOutlined,
} from '@ant-design/icons';
import { Image, Space, Button, Tooltip } from 'antd';
import { CloudOutlined, EnvironmentOutlined } from '@ant-design/icons';


const styles = {
    content: {
        textAlign: 'center',
    },
    image: {
        borderRadius: '20%',
        border: 'solid 2px #00000052'
    },
    name: {
        marginTop: '16px',
        fontSize: '24px',
        fontWeight: '600',
    },
};


export function Profile() {
    const src = 'image.jpg'
    return <div style={styles.content}>
        <Image width={75} src={src} style={styles.image} preview={{
            toolbarRender: (_, {
                transform: {
                    scale
                },
                actions: {
                    onFlipY,
                    onFlipX,
                    onRotateLeft,
                    onRotateRight,
                    onZoomOut,
                    onZoomIn
                }
            }) => <Space size={12} className="toolbar-wrapper">
                    <SwapOutlined rotate={90} onClick={onFlipY} />
                    <SwapOutlined onClick={onFlipX} />
                    <RotateLeftOutlined onClick={onRotateLeft} />
                    <RotateRightOutlined onClick={onRotateRight} />
                    <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
                    <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
                </Space>
        }} />
        <div style={styles.name}>Rayan RAVELONIRINA</div>

        {/* <Space size="large" style={{ marginTop: "16px" }}>
            <Tooltip placement="bottom" title="Antananarivo MADAGASCAR">
                <Button type="link" style={{ color: "black" }}>
                    <EnvironmentOutlined /> En présentiel
                </Button>
            </Tooltip>
            et / ou
            <Button type="link" style={{ color: "black" }}>
                <CloudOutlined /> En remote
            </Button>
        </Space> */}
    </div>;
}
