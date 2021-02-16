import React, { Fragment, useState } from "react";
import { Button, Input, Space } from "antd";
import { testData } from "../utility/dummydata";
import {
  question0,
  question1,
  question2,
  question4,
  question5,
  question6,
  question7,
  question8,
  question9,
} from "../utility/homeworkFunctions";

export const ArrayHomework = () => {
  const [result, setResult] = useState(testData);
  const resetData = () => {
    setResult(testData);
  };

  return (
    <Fragment>
      <h2>Click Homework Functions</h2>
      <div style={{ marginBottom: 50 }}>
        <Button onClick={() => resetData()} danger>
          Reset
        </Button>
        <Button onClick={() => setResult(question0(testData))}>
          QUESTION 0
        </Button>
        <Button onClick={() => setResult(question1(testData))}>
          QUESTION 1
        </Button>
        <Button onClick={() => setResult(question2(testData))}>
          QUESTION 2
        </Button>
        <Button onClick={() => setResult(question4(testData))}>
          QUESTION 4
        </Button>
        <Button onClick={() => setResult(question5(testData))}>
          QUESTION 5
        </Button>
        <Button onClick={() => setResult(question6(testData))}>
          QUESTION 6
        </Button>
        <Button onClick={() => setResult(question7(testData))}>
          QUESTION 7
        </Button>
        <Button onClick={() => setResult(question8(testData))}>
          QUESTION 8
        </Button>
        <Button onClick={() => setResult(question9(testData))}>
          QUESTION 9
        </Button>
      </div>
      <h2>Result</h2>
      {result.map((n) => (
        <div style={{ marginBottom: 100, fontSize: "0.6em" }}>
          {JSON.stringify(n, undefined, 4)}
        </div>
      ))}
    </Fragment>
  );
};
