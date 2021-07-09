import styles from "./tweet-form.module.scss";
import Image from "next/image";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import { css } from "@emotion/css";

const profilePic =
  "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg";
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
  const { register, handleSubmit, formState } = useForm({ mode: "onChange" });
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
              color: white;
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
              disabled={
                !formState.isDirty || (formState.isDirty && !formState.isValid)
              }
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
                cursor: pointer;
                :disabled {
                  opacity: 0.5;
                }
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
