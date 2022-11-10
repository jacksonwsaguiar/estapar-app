import styled from "styled-components";

export const Card = styled.div`
  & + & {
    margin-top: 15px;
  }
  transition: 300ms;
  /* cursor: pointer; */
  height: 90px;
  width: 80%;
  border-radius: 5px;
  border: 3px solid #003169;
  display: flex;
  cursor: pointer;
  .info div {
    display: flex;
  }
  .info {
    display: flex;
    padding: 10px 20px;
    flex-direction: column;
    /* justify-content: center; */
    justify-content: space-between;
    font-size: 18px;
  }
  .linev {
    width: 2px;
    background: #003169;
    height: 100%;
    padding: none;
  }
  &:hover {
    transform: scale(1.05);
  }

  .img {
    display: flex;
    align-items: center;
    width: auto;
  }
  .img img {
    margin: 5px 35px;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    object-fit: cover;
    border: 2px solid #000;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
    .img img {
      margin: 0 5px;
    }
  }
`;
