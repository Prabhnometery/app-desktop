import styled from "styled-components";

export const StyledNavBar = styled.div`
  background-color: #e5e5e5;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const StyledNavMenu = styled.nav`
  background-color: #e5e5e5;
  width: 350px;
  height: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 10;
  transition: 850ms;

  ul {
    width: 100%;
  }

  span {
    margin-left: 16px;
  }

  .nav-text a {
    text-decoration: none;
    color: #a8b0b7;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border: 0 groove;
    border-radius: 75px 75px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 18px;
  }

  .nav-text {
    display: flex;
    justify-content: start;
    color: #a8b0b7;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 60px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 18px;
  }

  .nav-text a:hover {
    background: rgba(0, 132, 122, 0.1);
    color: #00847a;
    border-radius: 75px 75px;
    padding: 0 16px;
    text-align: center;
  }

  a {
    cursor: pointer;
  }
`;

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin-top: 40px;
  margin-left: 20%;
  padding: 40px;
  width: 75%;

  @media (max-width: 100px) {
    flex-direction: column;
  }
`;

export const StyledBoxOne = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin-top: 40px;
  margin-left: 20%;

  width: 695px;
  height: 540px;
`;

export const StyledBoxTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 20px;
  margin-top: 40px;
  margin-left: 50px;

  width: 695px;
  height: 540px;
`;

export const StyledTabs = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 15px;

  margin-top: 1px;
  margin-left: 20%;
  padding: 40px;
  width: 75%;

  @media (max-width: 100px) {
    flex-direction: column;
  }
`;

export const StyledBoxDataOne = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin-top: 90px;
  margin-left: 40%;

  width: 450px;
  height: 250px;
`;

export const StyledBoxDataTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 20px;
  margin-top: -250px;
  margin-left: 85%;

  width: 450px;
  height: 250px;
`;

export const StyledBoxDataThree = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 20px;
  margin-top: -250px;
  margin-left: 130%;

  width: 450px;
  height: 250px;
`;

export const StyledTab = styled.div`
  ul.nav {
    width: 60%;
    margin: 0 auto 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid rgba(0, 132, 122, 0.1);
    background-color: rgba(0, 132, 122, 0.1);
    border-radius: 2rem;
    @media (max-width: 768px) {
      width: 90%;
    }
  }
  ul.nav li {
    width: 50%;
    padding: 1rem;
    list-style: none;
    text-align: center;
    cursor: pointer;
    transition: all 0.7s;
    border-bottom-left-radius: 2rem;
    border-top-left-radius: 2rem;
  }
  ul.nav li:nth-child(2) {
    border-radius: 0;
    border-bottom-right-radius: 2rem;
    background: #00847a;
    border-top-right-radius: 2rem;
  }
  ul.nav li:hover {
    background: #00847a;
    color: white;
  }
  ul.nav li.active {
    background: #00847a;
  }

  .Tabs {
    width: 80%;
    height: auto;
    min-height: 400px;
    margin: 3.5rem 25rem 2.5rem;
    padding: 2rem 1rem;
    color: black;
    border-radius: 2rem;
    @media (max-width: 769px) {
      padding: 2rem 0;
    }
  }
`;
