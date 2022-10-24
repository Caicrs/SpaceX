import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import logo from "../public/logo.svg";
import { button1, button2 } from "../src/store/Calculator/calculator.actions";

const Home: NextPage = (response: any) => {
  const initState = response;
  const [launches, setLaunches] = useState(initState.launches);
  const ButtonStatus = useSelector(
    (state: { chooseButton: any }) => state.chooseButton
  );
  const dispatch = useDispatch();
  return (
    <Container>
      <Head>
        <title>SpaceX</title>
        <meta name="description" content="SpaceX launches contents" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <Img width={250} height={100} src={logo}></Img>
      </Header>
      <Buttons>
        {ButtonStatus == 1 ? (
          <ButtonActive>Launches</ButtonActive>
        ) : (
          <ButtonOff onClick={() => dispatch(button1())}>Launches</ButtonOff>
        )}
        {ButtonStatus == 1 ? (
          <ButtonOff onClick={() => dispatch(button2())}>Analytics</ButtonOff>
        ) : (
          <ButtonActive>Analytics</ButtonActive>
        )}
      </Buttons>

        {ButtonStatus == 1 ? <List>
        {launches.map((data: any) => {
          return (
            <Card key={data.id}>
              <LabelText>Details :</LabelText>
              <h5>{data.details}</h5>
              <LabelText>Local date :</LabelText>
              <h5>{data.launch_date_local}</h5>
              <LabelText>Launch Sucess :</LabelText>
              <h5>{data.launch_success == true ? "Yes" : "No"}</h5>
              <LabelText>Mission Name :</LabelText>
              <h5>{data.mission_name}</h5>
              <LabelText>Rocket Name :</LabelText>
              <h5>{data.rocket.rocket_name}</h5>
            </Card>
          );
        })}
      </List> :
      <h3>Analytics Page</h3>
      }

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Caic Rocha
        </a>
      </footer>
    </Container>
  );
};

export default Home;

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: gql`
      query {
        launches(limit: 5) {
          id
          details
          launch_date_local
          launch_success
          mission_name
          rocket {
            rocket_name
          }
        }
      }
    `,
  });
  return {
    props: {
      launches: data.launches,
    },
  };
}

const Text = styled.h6`
  color: white;
`;

const Img = styled(Image)`
  margin: 0 auto;
`;

const Header = styled.div`
  height: fit-content;
  margin: 0 auto;
  text-align: center;
`;

const Container = styled.div`
  background-color: #2b2b2b;
  min-height: 100vh;
`;
const Card = styled.div`
  padding: 1rem 2rem;
  margin: 1rem 0;
  background-color: #dbdbdb;
  border-radius: 1rem;
`;

const List = styled.div`
  width: 700px;
  margin: 0 auto;
  padding: 2rem 0;
`;

const LabelText = styled.h5`
  font-weight: 700;
  opacity: 0.5;
`;
const ButtonActive = styled.div`
  width: fit-content;
  color: #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
  padding: 0.5rem 2rem;
  margin: 0 1rem;
`;

const ButtonOff = styled.div`
  width: fit-content;
  color: #dbdbdb;
  border-bottom: 1px solid transparent;
  padding: 0.5rem 2rem;
  transition: 0.5s;
  opacity: 0.3;
  cursor: pointer;
  margin: 0 1rem;
  &:hover {
    opacity: 1;
    border-bottom: 1px solid #dbdbdb;
  }
`;

const Buttons = styled.div`
  display: flex;
  margin: 0 auto;
  width: fit-content;
`;
