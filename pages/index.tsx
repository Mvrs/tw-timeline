import Head from "next/head";
import Image from "next/image";
import styles from "./index.module.scss";
import { useForm } from "react-hook-form";

import { PrismaClient, PrismaPromise, Tweet } from "@prisma/client";

import TweetForm from "../components/tweet-form";
import Timeline from "../components/timeline";

import { GetServerSideProps } from "next";

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

type JSONResponse = {
  body?: string;
  data?: string;
};

async function saveTweet(data: string) {
  await fetch("/api/tweet", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export default function Home({ tweets }: ITweets) {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    try {
      saveTweet(data);
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

      <div>Hello</div>
      <TweetForm onSubmit={onSubmit} />
      {tweets?.map(data => (
        <Timeline key={data.id} {...data} />
      ))}
    </div>
  );
}
