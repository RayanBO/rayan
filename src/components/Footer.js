import React from 'react';
import { Layout, Button } from 'antd';
import { SmileOutlined, WhatsAppOutlined } from '@ant-design/icons';

const { Footer } = Layout;

export default function AppFooter() {
    return (
        <div className="footer">
            <Footer>
                <div className='footerContent'>
                    <div>© 2024 | by Rayan RAVELONIRINA <SmileOutlined /></div>
                    <div>
                        <Button type='primary' className="attentionButton"  icon={<WhatsAppOutlined />}>
                            Me contacter
                        </Button>
                    </div>
                </div>
            </Footer>
        </div>
    );
}
