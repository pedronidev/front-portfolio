import React from "react";
import styled from "styled-components";

const Box = ({
  aside,
  children,
  direction = "top left",
  asideProps = {},
  centerProps = {},
  bottomProps = {},
  bottom,
  ...props
}) => {
  return (
    <StyledBoxWrapper {...props} className={`${direction}`}>
      <StyledBox>
        <StyledBoxMain>
          <StyledBoxAside {...asideProps}>{aside}</StyledBoxAside>
          <StyledBoxCenter {...centerProps}>{children}</StyledBoxCenter>
        </StyledBoxMain>
        {bottom && <StyledBoxBottom {...bottomProps}>{bottom}</StyledBoxBottom>}
      </StyledBox>
    </StyledBoxWrapper>
  );
};

const StyledBoxBottom = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  width: 100%;
`;
const StyledBoxMain = styled.div`
  display: flex;
`;
const StyledBox = styled.section`
  background-color: #101010;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: var(--box-padding);
  box-shadow: 0 0 30px black;
  flex-wrap: wrap;
`;

const StyledBoxCenter = styled.div`
  padding-left: 64px;
`;

const StyledBoxWrapper = styled.section`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: var(--container-width);
  max-width: 100%;
  display: flex;
  &.right {
    justify-content: flex-end;
    ${StyledBox} {
      ${StyledBoxMain} {
        flex-direction: row-reverse;
      }
      ${StyledBoxCenter} {
        padding-left: 0;
        padding-right: 64px;
        text-align: right;
      }
    }
  }
  &.top.left {
    ${StyledBox} {
      border-top-left-radius: 24px;
    }
  }
  &.top.right {
    ${StyledBox} {
      border-top-right-radius: 24px;
    }
  }
  &.bottom.left {
    ${StyledBox} {
      border-bottom-left-radius: 24px;
    }
  }
  &.bottom.right {
    ${StyledBox} {
      border-bottom-right-radius: 24px;
    }
  }
`;

const StyledBoxAside = styled.aside`
  width: 200px;
  flex: 0 0 200px;
  text-align: right;
`;

export default Box;
