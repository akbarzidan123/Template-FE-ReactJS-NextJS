import { Checkbox as ChckBox, Col, Row } from 'antd';
import React from 'react';

const Checkbox = ({ onChange, isDisable }) => {

  return (
    <ChckBox.Group
      onChange={onChange}
    >
      <Row>
        <Col span={5}>
          <ChckBox value="A">A</ChckBox>
        </Col>
        <Col span={5}>
          <ChckBox value="B">B</ChckBox>
        </Col>
        <Col span={10}>
          <ChckBox value="C">C</ChckBox>
        </Col>
        <Col span={5}>
          <ChckBox value="D" disabled={isDisable}>D</ChckBox>
        </Col>
        <Col span={5}>
          <ChckBox value="E" disabled={isDisable}>E</ChckBox>
        </Col>
      </Row>
    </ChckBox.Group>
  );
}
export default Checkbox;
