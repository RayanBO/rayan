import React, { useState } from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import { HomeOutlined } from '@ant-design/icons';


export default function Header({ currentpage }) {
  const navigate = useNavigate();


  return (
    <div style={{ margin: "24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>

      <Button type="link"
        onClick={() => navigate('/')}
        style={{ color: "black" , fontSize: "12px" }}
        icon={<HomeOutlined />}
      >
        Acceuil
      </Button>

      <div className='Navigation'>
        <Button type="link"
          onClick={() => navigate('/work')}
          style={{ color: "black" }}>
          <div className={currentpage === '/work' ? (' is-bt-actif') : ('')}>
            Travaux
          </div>
        </Button>
        <Button type="link"
          onClick={() => navigate('/tools')}
          style={{ marginLeft: "16px", color: "black" }} >
          <div className={currentpage === '/tools' ? (' is-bt-actif') : ('')}>
            Outils
          </div>
        </Button>
      </div>
    </div>
  );
}