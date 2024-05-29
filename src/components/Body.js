import React from 'react';
import { Profile } from './Profile';
import Status from './Status';
import PartOne from './PartOne';
import PartTwo from './PartTwo';
import { Divider } from "antd";
import Contact from './Contact';



export default function Body() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <Profile />
            <Divider />
            <Status />
            <Divider />
            <Contact />
            <PartOne />
            <Divider />
            <PartTwo />
        </div>
    );
}
