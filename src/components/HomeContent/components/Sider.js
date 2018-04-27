import React, { Component } from "react";

import style from "./Sider.scss";

import ContainerBar from "components/ContainerBar/ContainerBar";

export default class Sider extends Component {
  render() {
    return (
      <div className={style.siderBar}>
        <ContainerBar title="个人信息">个人信息</ContainerBar>

        <ContainerBar title="积分榜">积分榜</ContainerBar>
      </div>
    );
  }
}
