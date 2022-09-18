import type { NextPage } from "next";
import { styled } from "@stitches/react";

const Title = styled("h1", {
  color: "blue",
});

const Home: NextPage = () => {
  return <Title>Introduction to Stitches</Title>;
};

export default Home;
