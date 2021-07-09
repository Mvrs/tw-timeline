import { Tweet } from "@prisma/client";
import styles from "./timeline.module.scss";

export default function Timeline({ createdAt, body }: Tweet) {
  return (
    <div key={body.indexOf(body)}>
      {new Date(createdAt).toLocaleString("en-US", { hour12: true })} {body}
    </div>
  );
}
