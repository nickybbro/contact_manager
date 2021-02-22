import React from "react";
import { Slider, InputNumber, Row, Col } from "antd";

export const AgeSelect = () => {
  const [inputValue, setInputValue] = useState(1);

  const onChange = (value) => {
    setInputValue(value);
  };

  return (
    <>
      <Row className="s-text">Age</Row>
      <Row>
        <Col span={12}>
          <Slider
            min={1}
            max={60}
            onChange={(value) => onChange(value)}
            value={typeof inputValue === "number" ? inputValue : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={60}
            style={{ margin: "0 16px" }}
            value={inputValue}
            onChange={(value) => onChange(value)}
          />
        </Col>
      </Row>
    </>
  );
};

// export const Slider = () => {
//   return (
//     <>
//       <Row className="s-text">Age</Row>
//       <Row>
//         <Col span={12}>
//           <Slider
//             min={1}
//             max={20}
//             onChange={this.onChange}
//             value={typeof inputValue === "number" ? inputValue : 0}
//           />
//         </Col>
//         <Col span={4}>
//           <inputNumber
//             min={1}
//             max={20}
//             style={{ margin: "0 16px" }}
//             value={inputValue}
//             onChange={this.onChange}
//           />
//         </Col>
//       </Row>
//     </>
//   );
// };
