const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️",
    "What if I give you chocolates? 🍫",
    "I'll do anything! Just say yes! 🙏",
    "Imagine how cute we would be together! 😍",
    "I'll be the happiest person ever if you say yes! 😊",
    "Even the stars are waiting for your yes! ✨",
    "No pressure... but the universe wants you to say yes! 🌎",
    "Saying no would break my heart 💔",
    "One 'yes' = unlimited happiness! 😊",
    "This is your last chance... or is it? 😏",
    "Okay, okay... but what if I ask again nicely? 🥺",
    "Wouldn't it be amazing if we said yes to each other? 💕",
    "A 'yes' would make my day 1000x better! 😁",
    "You're running out of 'No' tokens... choose wisely! 🎟️",
    "I'm not saying I’ll cry if you say no... but I might. 😢",
    "Think about all the fun we'll have together! 😆",
    "Fine, I’ll stop asking... unless? 👀",
    "You + Me = Best decision ever! ❤️",
    "If I win a staring contest with you, you have to say yes! 😆",
    "Even Google says you should say yes! 🤖",
    "Do it for the memes! 😂",
    "I'll owe you one favor if you say yes! 🤝"
];


const imagesrc = [
    "https://i.pinimg.com/originals/b8/5e/67/b85e67f7524f8a04915aa9103991b12c.gif",
    "https://media.tenor.com/hdEi7qaRUKwAAAAM/bugcat-capoo.gif",
    "https://i.pinimg.com/originals/93/37/d3/9337d3b2192f1f28f641386c78146cd5.gif",
    "https://media.tenor.com/qzjLn_6vNhAAAAAj/capoo-bugcat.gif",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa_0zGGwrbtAS_fXrbqEcaoRgw1sCUQ84r0A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAtVPDqL7PQ6p8GQVxaTP93a2rlOJagQyV3g&s",
    "https://i.pinimg.com/originals/99/99/b9/9999b9b0fe39dbeb7ca6d13aca7c2353.gif",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmgPxUriQnyElzi3PkMM3CAjsJN9WB_hEXeA&s",
    "https://media.tenor.com/upsiP3YvcX8AAAAM/bugcat-capoo.gif",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZK0-SK8R9_oxgm5cqyoHIBbuDwRVLkntJCQ&s"
];


let messageIndex = 0, imageIndex = 0, fontSize = 1.5*16;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const gif = document.querySelector('.gif_container img');
    noButton.textContent = messages[messageIndex];
    gif.src = imagesrc[imageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    imageIndex = (imageIndex + 1) % imagesrc.length;
    fontSize *= 1.5;
    yesButton.style.fontSize = `${fontSize}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}