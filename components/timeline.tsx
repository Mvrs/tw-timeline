import { Tweet } from "@prisma/client";

import styled from "@emotion/styled";
import { css } from "@emotion/css";

const profilePic =
  "https://pbs.twimg.com/profile_images/1220746647484813312/Lcg3Mww5_x96.jpg";
const twitterBlue = `#1da1f2`;
const borderColor = `rgb(47, 51, 54)`;

const convertTime = (timestamp: string) => {
  const date = new Date(timestamp);
  const now = new Date();

  // @ts-ignore
  let timeDifference = Math.floor((now - date) / 1000 / 60);
  if (timeDifference < 60) {
    return `${timeDifference} mins`;
  } else if (timeDifference < 24 * 60) {
    return `${Math.floor(timeDifference / 60)}h`;
    // greater than 24hrs
  } else {
    return date.toLocaleString("en-US", {
      month: "short",
      hour12: true,
      day: "numeric",
    });
  }
};

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
          {/* @ts-ignore */}
          <InfoDate key={body.indexOf(body)}>{convertTime(createdAt)}</InfoDate>
        </InfoWrapper>
        {body}
      </ColumnRight>
    </Box>
  );
}
