let con = document.getElementById("container");
let div;


//user data 
let data = [
  {
    name: "Mark Weber",
    avatar: "./assets/profile/avatar-mark-webber.webp",
    data: "reacted to your resent post",
    refrence: "My first tournament todaty!",
  },

  { name: "Angela Gray", 
  avatar: "./assets/profile/avatar-angela-gray.webp", 
  data: "followed you", 
  refrence: "" ,
  refrence_src:"",},

  {
    name: "Jacob Thompson",
    avatar: "./assets/profile/avatar-jacob-thompson.webp",
    data: "has joined your group",
    rference: "Chess Club",
    refrence_src:"",
  },

  {
    name: "Rizky Hasanuddin",
    avatar: "./assets/profile/avatar-rizky-hasanuddin.webp",
    data: "sent you a private message",
    refrence: "",
    refrence_src:"",
  },
  {
    name: "Kimberly Smith",
    avatar: "./assets/profile/avatar-kimberly-smith.webp",
    data: "commented on your picture",
    refrence: "",
    refrence_src:"",
  },
  {
    name: "Nathan Peterson",
    avatar: "./assets/profile/avatar-nathan-peterson.webp",
    data: "reacted to your resent post ",
    refrence: "5 end-game stratages to increase your win rate",
    refrence_src:"",
  },

  {
    name: "Anna Kim",
    avatar: "./assets/profile/avatar-anna-kim.webp",
    data: "left the group",
    refrence: "Chess club",
    refrence_src:"./assets/profile/image-chess.webp"
  },
];







//create div element and add text
new_div = () => {
  div = document.createElement("div");
  div.className = "new_notification";
  con.appendChild(div);
};

new_p = (x) => {
  if (!x) {
    x = "hello";
  }
  let paragraph = document.createElement("p");
  paragraph.className = "name";
  let text = document.createTextNode(x);
  paragraph.appendChild(text);
  div.append(paragraph);
};

let user1 = data[1].age;

function notification(x) {
  new_div();
  new_p(x);
}

function new_notification() {
  for (let i = 0; i < data.length; i++) notification(data[i].name);
  console.log(all_notification);
}


let all_notification=document.getElementsByClassName('new_notification');

let btn = document
  .querySelector("#btn")
  .addEventListener("click", new_notification);

let read_btn=document.querySelector('#read_btn').addEventListener("click",read_all)


function read_all(){
  all_notification.className='read_notification';
}