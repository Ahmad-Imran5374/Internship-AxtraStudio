import { useState } from 'react';
import './App.css';

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];


export default function App(){

  const [addFriend,setAddFriend] = useState(false);
  const [friends,setFriends] = useState(initialFriends);
  const [selectedFriend,setSelectedFriend] = useState(null);
  function handleAddFriend(){
    setAddFriend(c=>!(c));
  }

  function handleFriendForm(x){
    setFriends(current=>[...current,x]);
    setAddFriend(false);
  }

  function handleSelectButton(x){
    setSelectedFriend(c=>c!==x?x:null);
    setAddFriend(false);
  }


function handleSplitBill(value){
  console.log(value);
  setFriends((friends)=>friends.map((friend)=>friend.id === selectedFriend.id?{...friend,balance: friend.balance+value}:friend));
  setSelectedFriend(null);
}

  return <div className='app'>
    <div className='sidebar'>
      <FriendList friendList={friends} handleSelectButton={handleSelectButton} selectedFriend={selectedFriend}/>
      {addFriend && <AddFriend setfriends={setFriends} friendss={friends} onAddForm={handleFriendForm}/>}
      <Button onclicK={handleAddFriend}>{addFriend?"Close": "Add Friend"}</Button>
    </div>


    
    {selectedFriend && (<FormSplitBill selectedFriend={selectedFriend} key={selectedFriend.id} handleSplitBill={handleSplitBill}/>)}
  </div>
}


function FriendList({friendList,handleSelectButton,selectedFriend}){
  return <ul>
    {friendList.map((friend,i)=><Friend friend={friend} key={friend.id} handleSelectButton={handleSelectButton} selectedFriend={selectedFriend}/>)}
  </ul>
}


function Friend({friend,handleSelectButton,selectedFriend}){
  const isSelected = friend.id === selectedFriend?.id;
  return <li className={isSelected?"selected":""}>
      <img src={friend.image} alt={friend.name}></img>
      <h3>{friend.name}</h3>
      {friend.balance>0 && <p className='green'>{friend.name} owes you {Math.abs(friend.balance)}$</p>}
      {friend.balance<0 && <p className='red'>You owe {friend.name} {Math.abs(friend.balance)}$</p>}
      {friend.balance===0 && <p>You and {friend.name} are even</p>}
      <Button onclicK={()=>handleSelectButton(friend)}>{isSelected?"Close":"Select"}</Button>
      
    </li>
}



function AddFriend({onAddForm}){

  const [friendName,setFriendName] = useState("");
  const [urlText,setUrlText] = useState("https://i.pravatar.cc/48");

  function handleAddFriendForm(e){
    e.preventDefault();

    if(!friendName || !urlText)  return;

    const Id = crypto.randomUUID();
    setUrlText(`${urlText}?=${Id}`)
    const friend = {id:Id,name: friendName,image : `${urlText}?=${Id}`,balance: 0};
    onAddForm(friend);

    setFriendName("");
    setUrlText("https://i.pravatar.cc/48");
  }

  return <form className='form-add-friend' onSubmit={handleAddFriendForm}>
    <label>👩🏻‍🤝‍👩🏻Friend name</label>
    <input type='text' value={friendName} onChange={(e)=>{setFriendName(e.target.value)}}></input>

    <label>🖼 Image URL</label>
    <input type='text' value={urlText} onChange={(e)=>{setUrlText(e.target.value)}}></input>

    <Button onclicK={handleAddFriendForm}>Add</Button>
  </form>
}


function FormSplitBill({selectedFriend,handleSplitBill}){

  const [bill,setBill] = useState("");
  const [paidByUser,setPaidByUser] = useState("");
  const [whoIsPaying,setWhoIsPaying] = useState("user")
  const paidByFriend = bill? bill-paidByUser : "";

  function handleSplitForm(e){
    e.preventDefault();

    if(!bill || !paidByUser) return;

    handleSplitBill(whoIsPaying === "user"? paidByFriend: selectedFriend.balance>=0?-paidByUser:paidByUser);

  }
  return <form className='form-split-bill' onSubmit={handleSplitForm}>
    <h2>Split a Bill with {selectedFriend.name}</h2>

    <label>💰 Bill Value</label>
    <input type='text' value={bill} onChange={(e)=>setBill(Number(e.target.value))}></input>

    <label>🧍‍♀️ Your Expenses</label>
    <input type='text' value={paidByUser} onChange={(e)=>setPaidByUser(Number(e.target.value)>bill?paidByUser:Number(e.target.value) )}></input>

    <label>🧍‍♂️ {selectedFriend.name}'s Expenses</label>
    <input type='text' value={paidByFriend}  disabled></input>


    <label>🤑 Who is Paying the Bill</label>
    <select value={whoIsPaying} onChange={(e)=>setWhoIsPaying(e.target.value)}>
      <option value="user">You</option>
      <option value="friend">{selectedFriend.name}</option>
    </select>
    <Button onclicK={handleSplitForm}>Split Bill</Button>
  </form>
}

function Button({children, onclicK}){
  return <button className='button' onClick={onclicK}>{children}</button>
}