import Head from "next/head";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  sum,
  min,
  button1,
  button2,
} from "../../src/store/Calculator/calculator.actions";

const TestRedux = () => {
  const result = useSelector((state: { calculator: any }) => state.calculator);
  const ButtonStatus = useSelector(
    (state: { chooseButton: any }) => state.chooseButton
  );
  const dispatch = useDispatch();

  return (
    <>
      <Head>
        <title>Redux</title>
        <meta name="description" content="SpaceX launches contents" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Text>Learning Redux</Text>
      <Buttons>
        <Text>{ButtonStatus}</Text>
      </Buttons>
      <Buttons>
        <Btn type="button" onClick={() => dispatch(button1())}>
          ON
        </Btn>
        <Btn type="button" onClick={() => dispatch(button2())}>
          OFF
        </Btn>
      </Buttons>
    </>
  );
};

export default TestRedux;

const Text = styled.div`
  width: 100%;
  padding: 10% 0 5% 0;
  text-align: center;
  font-weight: 700;
  font-size: 2rem;
  color: white;
  background-color: #2b2b2b;
`;

const Buttons = styled.div`
  width: 100%;
  padding: 1% 0;
  text-align: center;
  background-color: #2b2b2b;
`;
const Btn = styled.button`
  border: none;
  padding: 1rem 2rem;
  background: #dbdbdb;
`;

const Input = styled.input`
  width: 200px;
`;
