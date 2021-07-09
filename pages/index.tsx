import Head from "next/head";
import styles from "./index.module.scss";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import { css } from "@emotion/css";

import { PrismaClient, PrismaPromise, Tweet } from "@prisma/client";

import TweetForm from "../components/tweet-form";
import Timeline from "../components/timeline";
import StarSvg from "../components/svg/star";

import { GetServerSideProps } from "next";

const borderColor = `rgb(47, 51, 54)`;
const twitterBlue = `#1da1f2`;

const MainContainer = styled("div")`
  max-width: 600px;
  margin: 0 auto;
  border-color: ${borderColor};
  border-style: solid;
  border-width: 0 1px 0 1px;
`;

const HeaderContainer = styled("div")`
  font-size: 22px;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  border-bottom: 1px solid ${borderColor};
`;

const Header = styled("h1")`
  line-height: 53px;
  font-size: inherit;
`;

const SVGContainer = styled("div")`
  width: 22px;
  height: 22px;
`;

const Divider = styled("div")`
  height: 12px;
  background-color: rgb(21, 24, 28);
  border-bottom: 1px solid ${borderColor};
`;

interface ITweets extends GetServerSideProps {
  tweets: Tweet[];
}

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const tweet: PrismaPromise<Tweet[]> = prisma.tweet.findMany({
    orderBy: { createdAt: "desc" },
  });

  return {
    props: {
      tweets: (await tweet).map((data: Tweet) => ({
        ...data,
        createdAt: data.createdAt.getTime(),
      })),
    },
  };
}

async function saveTweet(data: string) {
  const response = await fetch("/api/tweet", {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

export default function Home({ tweets }: ITweets) {
  const onSubmit = async (
    data: any,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    try {
      await saveTweet(data);
      // when we recieve a new message reload
      // helps optimistic ui updates
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Twitter-Timeline</title>
        <meta
          name="description"
          content="A Feature Clone of the Twitter Timeline"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <HeaderContainer>
          <Header>Home</Header>
          <SVGContainer
            className={css`
              svg {
                fill: ${twitterBlue};
              }
            `}
          >
            <StarSvg />
          </SVGContainer>
        </HeaderContainer>
        <TweetForm onSubmit={onSubmit} />
        <Divider />
        {tweets?.map(data => (
          <Timeline key={data.id} {...data} />
        ))}
      </MainContainer>
    </div>
  );
}
