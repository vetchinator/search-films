import React from "react";
import "antd/dist/antd.css";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Preloader: React.FC = () => {
    const antIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;
    return (
        <div style={{ width: '100%', height: '100%', textAlign: 'center' }}>
            <Spin indicator={antIcon} />
        </div>
    )
}

export default Preloader;