import React from "react";
import "antd/dist/antd.css";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import styled from 'styled-components/macro';

const PreloaderContainer = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
`;


const Preloader: React.FC = (props) => {
    const antIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;
    return (
        <PreloaderContainer>
            <Spin indicator={antIcon} />
        </PreloaderContainer>
    )
}

export default Preloader;