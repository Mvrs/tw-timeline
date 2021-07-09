import { Tweet } from "@prisma/client";
import styles from "./timeline.module.scss";

import styled from "@emotion/styled";
import { css } from "@emotion/css";

const profilePic =
  "https://pbs.twimg.com/profile_images/1220746647484813312/Lcg3Mww5_x96.jpg";
const twitterBlue = `#1da1f2`;
const borderColor = `rgb(47, 51, 54)`;

const Box = styled("div")`
  padding: 12px 16px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${borderColor};
`;

const ColumnLeft = styled("div")`
  margin-right: 12px;
`;

const ColumnRight = styled("div")`
  /* flex-grow: 1; */
`;

const ImageContainer = styled("div")`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
`;

const InfoWrapper = styled("div")`
  margin-bottom: 3px;
  span {
    margin-right: 4px;
    color: #6e767d;
  }
`;

const InfoName = styled("span")`
  font-weight: 700;
  color: rgb(217, 217, 217) !important;
`;

const InfoUserName = styled("span")``;

const Dot = styled("span")``;

const InfoDate = styled("span")``;

export default function Timeline({ createdAt, body }: Tweet) {
  return (
    <Box>
      <ColumnLeft>
        <ImageContainer>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={profilePic} alt="profile image" />
        </ImageContainer>
      </ColumnLeft>
      <ColumnRight>
        <InfoWrapper>
          <InfoName>Anonymous</InfoName>
          <InfoUserName>@soanonymous</InfoUserName>
          <Dot>•</Dot>
          <InfoDate key={body.indexOf(body)}>
            {new Date(createdAt).toLocaleString("en-US", { hour12: true })}{" "}
          </InfoDate>
        </InfoWrapper>
        {body}
      </ColumnRight>
    </Box>
  );
}
