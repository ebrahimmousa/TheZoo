import styled from "styled-components";

interface IWrapperProps {
  width?: string,
  justify?: string,
  align?: string,
  backgroundImg?: string,
  backgroundPos?: string
}

export const LayoutWrapper = styled.div`
width: 100vw;
height: 100vh;
`

export const FlexWrapperLg = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 10px;
width: ${(props: IWrapperProps) => props.width || "95%"};
margin: 20px auto;


@media (min-width: 768px) {
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  margin: 0 auto;
  padding: 50px 0px;
  }

a {
  text-decoration: none;
  width: 100%;

@media (min-width: 768px) {
  width: 40%;
  }

  @media (min-width: 1100px) {
    width: 30%;
  }
}
`

export const FlexWrapperSm = styled(FlexWrapperLg)`
  flex-direction: column;
  align-items: ${(props: IWrapperProps) => props.align || "flex-start"};
  justify-content: ${(props: IWrapperProps) => props.justify || "center"};
  width: ${(props: IWrapperProps) => props.width || "100%"};
  background-color: #f1f1f1;

  @media (min-width: 768px) {
  align-items: ${(props: IWrapperProps) => props.align || "center"};
  justify-content: ${(props: IWrapperProps) => props.justify || "flex-start"};
  padding: 0px 0px 20px;
  margin: 13px 0px;
  min-height: 510px;

  &:hover {
    opacity: 0.9;
  }
  }
`
export const SinglePageWrapperLg = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 15px;
width: 95%;
margin: 0 auto;

@media (min-width: 768px) {
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  width: 90%;
  padding: 30px 0px;
  }

  @media (min-width: 1100px) {
    width: 70%;
  }
  
`;

export const SinglePageWrapperSm = styled(SinglePageWrapperLg)`
width: 100%;

@media (min-width: 768px) {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 40%;
  padding: 0px;
  }
`;
export const TextWrapper = styled.div`
padding: 10px;

@media (min-width: 768px) {
  padding: 0px 20px;
  }

p {
  padding: 2px 0px;
  margin: 0;
}
`
export const GridImageWrapper = styled.div`
background-image: ${(props: IWrapperProps) => "url(" + props.backgroundImg + ")" || ""};
background-position: ${(props: IWrapperProps) => props.backgroundPos || "top"};
background-size: cover;
background-repeat: no-repeat;
height: 280px;
width: 100%;
border-radius:50%;

@media (min-width: 768px) {
  height: 350px;
  width: 100%;
  }

@media (min-width: 1100px) {
  width: 360px;
  }
`

export const SingleImageWrapper = styled.div`
width: 100%;

@media (min-width: 768px) {
  width: 50%;
  padding: 10px 0px;
  }
`;
