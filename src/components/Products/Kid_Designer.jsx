import { useState } from "react";
import styled from "styled-components";
import './Kid_Designer.css'
import { Link } from "react-router-dom";
const KidDesingerTitle = styled.div`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  letter-spacing: 0.4px;
  word-break: break-word;
  font-size: 28px;
  margin: 100px 0px 12px;
  text-align: center;
  color: #333;
`;
const KidDesingerBtn = styled.div`
  justify-content: space-between;
  display: flex;
  width: 150px;
  margin: auto;
  align-items: center;
  padding: 20px;
  margin: 15px auto 10px;
`;
const Botton = styled.button`
  text-align: center;
  border:0px;
  border-bottom: 1px solid #333;
  font-weight: 600;
  font-size: 14px;

  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
  
`;
const Split = styled.div`
  text-align: center;
  background-color: #d3cbcb;
  padding: 0.5px;
  height: 30px;
`;
const KidCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 9.5%;
`;

const Div = styled.div`
  background-color: #ffffff;
  padding: 35px 50px;
  width:240px;
`;
const DivTitle = styled.div`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.4px;
  text-align: center;
  margin-bottom: 35px;
`;
const ViewAll = styled.div`
  width: 72px;
  margin: 80px auto 0px;
  text-align: center;
  border-bottom: 1px solid #333;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

export const KidDesigner = () => {
  
  const kidB1 = [
    "DOLCE & GABBANA",
    "KENZO",
    "FENDI",
    "RALPH LAUREN",
    "BURBERRY",
    "DSQUARED2",
    "GOLDEN GOOSE DELUXE BRAND",
    "GIORGIO ARMANI",
  ];
  const kidB2 = [
    "DOLCE & GABBANA",
    "BURBERRY",
    "RALPH LAUREN",
    "TOMMY HILFIGER",
    "NIKE",
    "DSQUARED2",
    "MARNI",
    "GOLDEN GOOSE DELUXE BRAND",
  ];
  const kidB3 = [
    "DOLCE & GABBANA",
    "RALPH LAUREN",
    "NIKE",
    "TIMBERLAND",
    "DSQUARED2",
    "KENZO",
    "GIORGIO ARMANI",
    "GOLDEN GOOSE DELUXE BRAND",
  ];
  const kidG1 = [
    "DOLCE & GABBANA",
    "FENDI",
    "IL GUFO",
    "BURBERRY",
    "DSQUARED2",
    "GUCCI",
    "MARNI",
    "ROBERTO CAVALLI",
  ];
  const kidG2 = [
    "DOLCE & GABBANA",
    "MSGM",
    "IL GUFO",
    "RALPH LAUREN",
    "BURBERRY",
    "MARNI",
    "ROBERTO CAVALLI",
    "KARL LAGERFELD",
  ];
  const kidG3 = [
    "DOLCE & GABBANA",
    "MARNI",
    "KARL LAGERFELD",
    "RALPH LAUREN",
    "BURBERRY",
    "DSQUARED2",
    "MICHAEL KORS",
    "KENZO",
    ];
   
    const [tog, setTog] = useState(false)
 
  return (<div>
{tog? <div>
    <KidDesingerTitle>DESIGNERS</KidDesingerTitle>
    <KidDesingerBtn>
              <Botton onClick={() => {
                  
                  setTog((p)=>{return false})
      }}>GIRLS</Botton>
      <Split></Split>
      <Botton onClick={() => {
                  setTog((p)=>{return true})
      }}>BOYS</Botton>
    </KidDesingerBtn>
    <KidCard>
      <Div>
        <DivTitle>BABY 0-24 MONTHS</DivTitle>
        {kidB1.map((e, i) => {
          return (
            <Link  className="link"key={i} to="##">
              {" "}
              {e}
            </Link>
          );
        })}
        <ViewAll>VIEW ALL</ViewAll>
      </Div>
      <Div>
        <DivTitle>KIDS 3-8 YEARS</DivTitle>
        {kidB2.map((e, i) => {
          return (
            <Link  className="link"key={i} to="##">
              {" "}
              {e}
            </Link>
          );
        })}
        <ViewAll>VIEW ALL</ViewAll>
      </Div>
      <Div>
        <DivTitle>JUNIOR 9-16 YEARS</DivTitle>
        {kidB3.map((e, i) => {
          return (
            <Link  className="link"key={i} to="##">
              {" "}
              {e}
            </Link>
          );
        })}
        <ViewAll>VIEW ALL</ViewAll>
      </Div>
    </KidCard>
  </div>:<div>
  <KidDesingerTitle>DESIGNERS</KidDesingerTitle>
  <KidDesingerBtn>
  <Botton onClick={() => {
                  
                  setTog((p)=>{return false})
      }}>GIRLS</Botton>
      <Split></Split>
      <Botton onClick={() => {
                  setTog((p)=>{return true})
      }}>BOYS</Botton>
  </KidDesingerBtn>
  <KidCard>
    <Div>
      <DivTitle>BABY 0-24 MONTHS</DivTitle>
      {kidG1.map((e, i) => {
        return (
            <Link  className="link"key={i} to="##">
            {" "}
            {e}
          </Link>
        );
      })}
      <ViewAll>VIEW ALL</ViewAll>
    </Div>
    <Div>
      <DivTitle>KIDS 3-8 YEARS</DivTitle>
      {kidG2.map((e, i) => {
        return (
            <Link  className="link"key={i} to="##">
            {" "}
            {e}
          </Link>
        );
      })}
      <ViewAll>VIEW ALL</ViewAll>
    </Div>
    <Div>
      <DivTitle>JUNIOR 9-16 YEARS</DivTitle>
      {kidG3.map((e, i) => {
        return (
            <Link  className="link"key={i} to="##">
            {" "}
            {e}
          </Link>
        );
      })}
      <ViewAll>VIEW ALL</ViewAll>
    </Div>
  </KidCard>
</div>}</div>
  );
};
