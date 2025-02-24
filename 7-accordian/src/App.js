import React, { useState } from 'react';
import "./App.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {

  const [isopen, setIsOpen] = useState(null);
  return <div className="accordion">
    {faqs.map((f,i)=>(<Item title={f.title}  number={i} key={f.title} open={isopen} setOpen={setIsOpen}>{f.text}</Item>))}
    <Item title="Ahmad Imran" number="17" open={isopen} setOpen={setIsOpen}>Ahmad is a FAST University Student and doing BSCS. He is doing Final Year Project on Cyber Security</Item>
  </div>;
}

function Item({title,number, open,setOpen,children}){

  const isopen = number === open;
  function handleIconPress(){
    setOpen(isopen ? null : number);
  }
  return <div className = {`item ${isopen ? "open": ""}`}>
    <p className="number">{Number(number)<9 ? `0${number}`: Number(number)}</p>
    <p className="title">{title}</p>
    <p className="icon" onClick={()=>handleIconPress()}>{isopen ? "-" : "+"}</p>
    {isopen && (<div className="content-box">
      <ul>{children}</ul>
    </div>)}
  </div>
}