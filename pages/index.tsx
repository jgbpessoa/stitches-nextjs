import type { NextPage } from "next";
import { styled } from "../ui/stitches.config";
import { Text } from "../ui/text";

const Home: NextPage = () => {
  return (
    <>
      <Text>Introduction to Stitches</Text>
      <Text Color="primary">Introduction to Stitches</Text>
      <Text Color="secondary">Introduction to Stitches</Text>
      <Text Disabled Gradient>
        Introduction to Stitches
      </Text>
      <Text Color="primary" Disabled>
        Introduction to Stitches
      </Text>
      <Text Color="secondary" Disabled>
        Introduction to Stitches
      </Text>
      <Text Color="primary" Gradient>
        Introduction to Stitches
      </Text>
      <Text Color="secondary" Gradient>
        Introduction to Stitches
      </Text>
    </>
  );
};

export default Home;
