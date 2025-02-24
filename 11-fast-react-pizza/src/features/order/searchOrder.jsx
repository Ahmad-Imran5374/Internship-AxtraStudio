import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

function searchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function HandleSubmit(e){
    e.preventDefault();
    if(!query) return;
    navigate(`/order/${query}`);
    setQuery("");

  }
  return (
    <form onSubmit={(e)=>HandleSubmit(e)}>
      <input
        type="text"
        placeholder="Search Order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default searchOrder;
