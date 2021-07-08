import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useForm } from "react-hook-form";

export default function Home() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("body", { required: true })} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
