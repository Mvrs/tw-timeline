import styles from "./tweet-form.module.scss";
import Image from "next/image";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import { css } from "@emotion/css";

const profilePic =
  "https://pbs.twimg.com/profile_images/1220746647484813312/Lcg3Mww5_x96.jpg";
const twitterBlue = `#1da1f2`;
const borderColor = `rgb(47, 51, 54)`;

const Box = styled("div")`
  display: flex;
  flex-direction: row;
  padding: 8px 16px;
  border-bottom: 1px solid ${borderColor};
`;

const ColumnLeft = styled("div")`
  margin-right: 12px;
`;

const ColumnRight = styled("div")`
  flex-grow: 1;
`;

const ImageContainer = styled("div")`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
`;

const ButtonWrapper = styled("div")`
  text-align: right;
  width: 100%;
`;

export default function TweetForm({ onSubmit }: any): JSX.Element {
  const { register, handleSubmit } = useForm();
  return (
    <Box>
      <ColumnLeft>
        <ImageContainer>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={profilePic} alt="profile image" />
        </ImageContainer>
      </ColumnLeft>
      <ColumnRight>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className={css`
              background-color: black;
              outline: none;
              border: none;
              width: 100%;
              font-size: 20px;
              margin: 16px 0;
            `}
            {...register("body", { required: true })}
            placeholder="What's happening?"
          />
          <ButtonWrapper>
            <button
              className={css`
                color: white;
                background-color: ${twitterBlue};
                border: none;
                outline: none;
                font-weight: 700;
                font-size: 16px;
                padding: 0 16px;
                line-height: 38px;
                border-radius: 19px;
              `}
              type="submit"
            >
              Tweet
            </button>
          </ButtonWrapper>
        </form>
      </ColumnRight>
    </Box>
  );
}
