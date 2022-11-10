import styled from "styled-components";

export const Toolbar = styled.div`
  overflow: hidden;
  background-color: #000;
  height: 12vh;
  padding: 20px;
  display: flex;
  img {
    width: 300px;
    margin-right: 50px;
  }

  a {
    /* height: 20px; */

    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    align-self: center;
    border-bottom: 5px solid #000;
    padding: 0px 0;
    margin: 0 15px;
    transition: 300ms;

    font-family: "Calibri";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 39px;
  }

  a:hover {
    opacity: 0.6;
  }

  a.active {
    opacity: 1;
    border-bottom: 5px solid #fff;
    color: white;
  }

  .icon {
    display: none;
  }
  button:hover {
    opacity: 0.5;
  }
  button {
    margin: 0 0 0 auto;
    align-self: center;

    background: none;
    width: min-content;
    height: min-content;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;

    font-family: "Calibri";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 39px;
    cursor: pointer;
    transition: 300ms;
  }
  button img {
    width: 30px;
    margin: 0;
    margin-right: 20px;
    /* display: none; */
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;
  height: 83vh;
  > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 33%;
    height: 90%;
  }
  div .content-1 p {
    font-family: "Calibri";
    font-style: normal;
    font-size: 20px;
    font-weight: 300;
    line-height: 29px;
    text-align: center;
  }
  div .content-1 h1 {
    margin: 20px 0;
  }
  div .content-1 img {
    width: 250px;
    height: 250px;
    border-radius: 100%;
    object-fit: cover;
    border: 2px solid #000;
  }
  div .content-1 {
    /* height: 100%; */
    width: 70%;
    text-align: center;
  }
  > div:nth-child(2) {
    border-right: 3px solid #000;
    border-left: 3px solid #000;
  }

  .content-2 {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .graph-captions .item {
    display: flex;
    align-items: center;
  }
  .content-2 .graph-captions > .item div {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  .content-2 .graph-captions > .item:nth-child(1) div {
    background-color: #24272a;
  }
  .content-2 .graph-captions > .item:nth-child(2) div {
    background-color: #74e0c1;
  }
  .content-2 .graph-captions > .item:nth-child(3) div {
    background-color: #70d44b;
  }
  .content-2 .graph-captions > .item:nth-child(4) div {
    background-color: #cad6e2;
  }
  .content-2 .graph-captions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-top: 40px;
  }
`;

export const Content = styled.div`
  .list-cards {
    width: 100%;
    overflow: hidden;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    &::-webkit-scrollbar {
      width: 7px;
    }
  
    /* Track */
    &::-webkit-scrollbar-track {
      /* box-shadow: inset 0 0 5px grey;  */
      background: #d9d9d9;
      border-radius: 10px;
    }
  
    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #000;
      border-radius: 10px;
    }
  
    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      opacity: 0.7;
    }
  }

  .card-emp + .card-emp {
    margin-top: 15px;
  }

  .card-emp .info div {
    display: flex;
  }
  .card-emp .info {
    display: flex;
    padding: 10px 20px;
    flex-direction: column;
    /* justify-content: center; */
    justify-content: space-between;
    font-size: 18px;
  }
  .card-emp .linev {
    width: 2px;
    background: #003169;
    height: 100%;
    padding: none;
  }
  .card-emp:hover {
 transform: scale(1.05);
  }
  .card-emp {
    transition: 300ms;
    /* cursor: pointer; */
    height: 90px;
    width: 80%;
    border-radius: 5px;
    border: 3px solid #003169;
    display: flex;
  }
  .card-emp .img {
    display: flex;
    align-items: center;
    width: auto;
  }
  .card-emp .img img {
    margin: 5px 35px;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    object-fit: cover;
    border: 2px solid #000;
  }

  @media screen and (max-width: 600px) {
    .container > div {
      width: 100%;
      margin: 20px 0;
    }
    .card-emp {
      width: 90%;
    }
    .card-emp .img img {
      margin: 0 5px;
    }
    .container > div:nth-child(2) {
      border: none;
    }
    .container {
      flex-direction: column;
    }
    .toolbar a:not(:first-child) {
      display: none;
      display: none;
    }
    .toolbar a.icon {
      float: right;
      display: block;
    }
    .toolbar button {
      display: none;
    }
    .toolbar.responsive {
      position: relative;
    }
    .toolbar.responsive .icon {
      position: absolute;
      right: 0;
      top: 0;
    }
    .toolbar.responsive a {
      float: none;
      display: block;
      text-align: left;
    }
  }
`;
