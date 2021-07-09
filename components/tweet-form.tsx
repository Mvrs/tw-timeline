import styles from "./tweet-form.module.scss";
import { useForm } from "react-hook-form";

export default function TweetForm({ onSubmit }: any): JSX.Element {
  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("body", { required: true })} />
      <button type="submit">Submit</button>
    </form>
  );
}
