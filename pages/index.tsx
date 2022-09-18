import type { NextPage } from "next";
import { styled } from "../ui/stitches.config";

const Title = styled("h1", {
  color: "$primaryColor",
  fontSize: "$fs3",
});

const Home: NextPage = () => {
  return <Title>Introduction to Stitches</Title>;
};

export default Home;
