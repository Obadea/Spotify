"use strict";

// note: Contents

const section1Content1 = document.querySelector(".section--1__content");
const section2Content = document.querySelector(".section--2");
const section3Content = document.querySelector(".section--3");
const sectionNav2 = document.querySelector(".section__nav--2");
const greeting__text = document.querySelector(".greeting__text");
const section2ContentElement = document.querySelectorAll(
  ".section--2__content"
);

const content1Titles = {
  titles: [
    "Cinematic",
    "Owl City",
    "Succession",
    "Rave & Roses(Ultra)",
    "Jon Bellion",
    "Burna Boy",
  ],

  images: [
    "./section_1_pic/Cinematic.jpeg",
    "./section_1_pic/Owl_City.jpeg",
    "./section_1_pic/succession.jpeg",
    "./section_1_pic/RaveRoses.jpeg",
    "./section_1_pic/JonBellion.jpeg",
    "./section_1_pic/BurnaBoy.jpeg",
  ],
};
// todo: Section
const content2DailyMix = [
  "img1",
  "img2",
  "img3",
  [
    "Studio Yuraki, Shir...",

    "Eve, Kiro Akiyama, Vicke and more",
    "Twenty One Pilots,SAIN...",
    "Nicolas Britell, Jeff Bea...",
    "Rema, Kizz Daniel, Blaqbonez and more",
  ],
  [
    "./musicCover/Yuraki.jpeg",

    "./musicCover/EveKiro.jpeg",
    "./musicCover/TwentyOne.jpeg",
    "./musicCover/NicolasBritell.jpeg",
    "./musicCover/rema.jpeg",
  ],
];

//Note: scetion3 details

const content3obj = {
  content3Mix: ["J-Pop", "Afrobeats", "Pop", "R&B", "Moody"],

  content3MusicCover: [
    "./musicCover/KiroAkiama.jpeg",
    "./musicCover/VictonyZinoleesky.jpeg",
    "./musicCover/Owl_City.jpeg",
    "./musicCover/Bixst.jpeg",
    "./musicCover/JuiceWRLD.jpeg",
  ],
};
const content3Artist = [
  "Kiro Akiama, KANAKA...",
  "Victony, Zinoleesky, Sark...",
  "Owl City, Miley Cyrus, Justin...",
  "Bixst and more",
  "Juice WRLD, Rod Wave...",
];

const navArtist = {
  artist: [
    "Obadea",
    "Owl City",
    "Rema",
    "ArrDee",
    "Zak Abel",
    "This is LiSA",
    "Jon Bellion",
    "Juice WRLD",
    "Lil Tecca",
    "Future",
    "Davido",
    "Post Malone",
    "Wizkid",
    "Runtown",
    "Tekno",
    "Drake",
    "Asake",
    "Chris Brown",
  ],
  profilePic: [
    "./artist_images/obadea.jpg",
    "./artist_images/Owl_City.jpeg",
    "./artist_images/Rema.jpeg",
    "./artist_images/ArrDee.jpeg",
    "./artist_images/Zak_Abel.jpeg",
    "./artist_images/This_is_LiSA.jpeg",
    "./artist_images/JonBellion.jpeg",
    "./artist_images/JuiceWRLD.jpeg",
    "./artist_images/LilTecca.jpeg",
    "./artist_images/Future.jpeg",
    "./artist_images/Davido.jpeg",
    "./artist_images/PostMalone.jpeg",
    "./artist_images/Wizkid.jpeg",
    "./artist_images/Runtown.jpeg",
    "./artist_images/Tekno.jpeg",
    "./artist_images/Drake.jpeg",
    "./artist_images/Asake.jpeg",
    "./artist_images/ChrisBrown.jpeg",
  ],
  songtitle: [
    "Working on my song😄",
    "Lucid Dream",
    "HOV",
    "Home For My Heart",
    "Be Kind",
    "とんぼ",
    "iRobot🤖",
    "Fast",
    "Ransom",
    "WAIT FOR U",
    "FIA",
    "Sunflower🌻",
    "Joy😄",
    "Mad Over You",
    "Jogodo",
    "In My Feelings",
    "Lonely At The Top🔝",
    "Go Crazy😜",
  ],
};

let greeting;
function getGreeting() {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const userLanguage = navigator.language || "en";

  if (currentHour <= 12) {
    greeting = "Good morning!";
  } else if ((currentHour > 13) & (currentHour < 18)) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }

  // Customize greetings for different languages
  if (userLanguage.startsWith("es")) {
    greeting = "¡Buenos días!";
  } else if (userLanguage.startsWith("fr")) {
    greeting = "Bonjour!";
  }

  return greeting;
}

getGreeting();

greeting__text.textContent = greeting;

// Note:functions

const displayNavContent = () => {
  navArtist.artist.forEach((cur) => {
    const html = `<div title="${cur}" class="nav__img"></div>`;
    sectionNav2.insertAdjacentHTML("beforeend", html);
    const navContentElement = document.querySelectorAll(".nav__img");
    // console.log(navContentElement);
    navContentElement.forEach((cur, i) => {
      //   console.log(cur);
      cur.style.backgroundImage = `url(${navArtist.profilePic[i]})`;
    });
  });
};

const displayContent1 = () => {
  section1Content1.innerHTML = "";

  content1Titles.titles.forEach((cur, i, arr) => {
    const content1Details = `<div data-title-data="${content1Titles.titles[i]}" class="section--1__content__info">
    <img src="${content1Titles.images[i]}" />
    <span>${cur}</span>
    <div class="section--1__content__play__button">
      <svg
        width="18"
        height="18"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.333374 18.8703V2.06645C0.333279 1.78534 0.417485 1.50919 0.577489 1.26587C0.737492 1.02256 0.967629 0.820696 1.24466 0.680669C1.52169 0.540642 1.83581 0.467408 2.1553 0.468362C2.47479 0.469317 2.78834 0.544425 3.06428 0.686103L19.4334 9.0896C19.7073 9.23036 19.9345 9.43178 20.0924 9.67382C20.2503 9.91586 20.3334 10.1901 20.3334 10.4692C20.3334 10.7482 20.2503 11.0224 20.0924 11.2645C19.9345 11.5065 19.7073 11.7079 19.4334 11.8487L3.06428 20.2506C2.78834 20.3923 2.47479 20.4674 2.1553 20.4683C1.83581 20.4693 1.52169 20.3961 1.24466 20.256C0.967629 20.116 0.737492 19.9141 0.577489 19.6708C0.417485 19.4275 0.333279 19.1514 0.333374 18.8703Z"
          fill="black"
        />
      </svg>
    </div>
  </div>`;

    section1Content1.insertAdjacentHTML("beforeend", content1Details);
  });
};

const displaySection2Content = () => {
  // section2Content.innerHTML = "";
  content2DailyMix.forEach((cur, i, arr) => {
    const html = `<div class="section--2__content">
        <div class="daily__mix--design__img--container">
          <img src="./Group ${i + 1}.png" />
          <span class="daily__mix--text">Daily Mix ${i + 1}</span>
          <div class="scetion2__play--button">
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.333374 18.8703V2.06645C0.333279 1.78534 0.417485 1.50919 0.577489 1.26587C0.737492 1.02256 0.967629 0.820696 1.24466 0.680669C1.52169 0.540642 1.83581 0.467408 2.1553 0.468362C2.47479 0.469317 2.78834 0.544425 3.06428 0.686103L19.4334 9.0896C19.7073 9.23036 19.9345 9.43178 20.0924 9.67382C20.2503 9.91586 20.3334 10.1901 20.3334 10.4692C20.3334 10.7482 20.2503 11.0224 20.0924 11.2645C19.9345 11.5065 19.7073 11.7079 19.4334 11.8487L3.06428 20.2506C2.78834 20.3923 2.47479 20.4674 2.1553 20.4683C1.83581 20.4693 1.52169 20.3961 1.24466 20.256C0.967629 20.116 0.737492 19.9141 0.577489 19.6708C0.417485 19.4275 0.333279 19.1514 0.333374 18.8703Z"
                fill="black"
              />
            </svg>
          </div>
          <p id="head__textID" class="head__text">Daily Mix ${i + 1}</p>
            <p class="text__artist">${arr[3][i]}</p>
        </div>
      </div>`;
    section2Content.insertAdjacentHTML("beforeend", html);

    const content2musicCover = document.querySelectorAll(
      ".daily__mix--design__img--container"
    );
    content2musicCover.forEach((cur, i) => {
      cur.style.backgroundImage = `url(${arr[4][i]})`;
    });
  });
};

let randomNumber1;
let randomNumber2;
let randomNumber3;
const displaySection3Content = () => {
  //inserting content 3 elements
  section3Content.innerHTML = "";

  content3obj.content3Mix.forEach((cur, i, arr) => {
    const randomNum = () => {
      randomNumber1 = Math.trunc(Math.random() * 255) + 1;
      randomNumber2 = Math.trunc(Math.random() * 255) + 1;
      randomNumber3 = Math.trunc(Math.random() * 255) + 1;
    };
    randomNum();
    const html = ` <div class="section--3__content">
    <div class="section--3__content__img--container">
      <img src="${content3obj.content3MusicCover[i]}" />
      <span class="Mix--text" style="box-shadow: 0 2px 4px rgb(${randomNumber1}, ${randomNumber3}, ${randomNumber2});">${cur} Mix</span>
      <div class="scetion3__play--button">
        <svg
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.333374 18.8703V2.06645C0.333279 1.78534 0.417485 1.50919 0.577489 1.26587C0.737492 1.02256 0.967629 0.820696 1.24466 0.680669C1.52169 0.540642 1.83581 0.467408 2.1553 0.468362C2.47479 0.469317 2.78834 0.544425 3.06428 0.686103L19.4334 9.0896C19.7073 9.23036 19.9345 9.43178 20.0924 9.67382C20.2503 9.91586 20.3334 10.1901 20.3334 10.4692C20.3334 10.7482 20.2503 11.0224 20.0924 11.2645C19.9345 11.5065 19.7073 11.7079 19.4334 11.8487L3.06428 20.2506C2.78834 20.3923 2.47479 20.4674 2.1553 20.4683C1.83581 20.4693 1.52169 20.3961 1.24466 20.256C0.967629 20.116 0.737492 19.9141 0.577489 19.6708C0.417485 19.4275 0.333279 19.1514 0.333374 18.8703Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
    <p class="head__text">${cur} Mix</p>
    <p class="text__artist">${content3Artist[i]}</p>
  </div>`;
    section3Content.insertAdjacentHTML("beforeend", html);

    // note:Different color
    const section3Img = section3Content.querySelectorAll("img");

    section3Img.forEach((cur) => {
      randomNum();
      cur.style.borderBottom = `5px solid rgb(${randomNumber1}, ${randomNumber3}, ${randomNumber2})`;
    });
  });
};

displayNavContent();
displayContent1();
displaySection2Content();
displaySection3Content();

// });
/////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Note: anniamtion

const section1HoverInfo = document.querySelectorAll(
  ".section--1__content__info"
);

const section1 = document.querySelector(".section--1");

section1HoverInfo.forEach((cur) => {
  cur.addEventListener("mouseenter", () => {
    const randomNumberScetion1 = Math.trunc(Math.random() * 82) + 1;
    const randomNumberSection2 = Math.trunc(Math.random() * 82) + 1;

    section1.style.background = `linear-gradient(180deg, rgb(${randomNumberScetion1}, 40, ${randomNumberSection2}), #1a1a1a)`;
  });
});
///////////////////////////////////////////////////////////////////////
//Todo: playing song beat animation
const pausebtn = document.querySelector(".pause");
const pausebtnTriangle = document.querySelector(".trianglepause");
const palyingAnimation = document.querySelector(".loader");
const circlePause = document.querySelector(".circlePause");

pausebtn.addEventListener("click", () => {
  pausebtnTriangle.classList.toggle("hide");

  // palyingAnimation.classList.toggle("hide");

  if (pausebtnTriangle.classList.contains("hide")) {
    palyingAnimation.style.display = "flex";
  } else {
    palyingAnimation.style.display = "none";
  }
});
palyingAnimation.addEventListener("mouseenter", function () {
  circlePause.style.transform = "scale(1.2)";
});

palyingAnimation.addEventListener("mouseleave", function () {
  circlePause.style.transform = "scale(1)";
});

// circle
circlePause.addEventListener("mouseenter", function () {
  circlePause.style.transform = "scale(1.2)";
});

circlePause.addEventListener("mouseleave", function () {
  circlePause.style.transform = "scale(1)";
});

///////////////////////////////////////////////////////////////////////

const musicLine = document.querySelector(".music__line");
const interval = document.createElement("div");
const intervalDot = document.createElement("div");

let timer;
let timer2;
let hasBeenCalled = false;
// play controler
const play = function () {
  if (!hasBeenCalled) {
    interval.classList.add("interval");
    intervalDot.classList.add("intervalDot");
    musicLine.appendChild(interval);
    musicLine.appendChild(intervalDot);

    let start = 0;
    const add = 1;
    const end = 100;
    let start2;

    timer = setInterval(() => {
      start = start + add;
      player(start);
      console.log(start);
      if (start === end) {
        intervalDot.style.marginLeft = "100%";
        pausebtnTriangle.classList.remove("hide");
        palyingAnimation.style.display = "none";
        interval.dataset.currentTime = 0;
        interval.dataset.currentPause = 0;
        console.log("end");
        clearTimeout(timer);
      }
    }, 200);

    const player = (start) => {
      interval.setAttribute("data-current-time", start);
      interval.style.width = `${start}%`;
      intervalDot.style.marginLeft = `${start}%`;
    };

    pausebtn.addEventListener("click", function (e) {
      // to playnote:
      if (pausebtnTriangle.classList.contains("hide")) {
        start2 = Number(interval.dataset.currentTime);
        const add2 = 1;
        const end2 = 100;
        timer2 = setInterval(() => {
          start2 = start2 + add2;
          interval.setAttribute("data-current-pause", start2);
          interval.style.width = `${start2}%`;
          intervalDot.style.marginLeft = `${start2}%`;
          if (start2 === end2) {
            pausebtnTriangle.classList.remove("hide");
            palyingAnimation.style.display = "none";
            interval.dataset.currentTime = 0;
            interval.dataset.currentPause = 0;
            console.log("end");
            intervalDot.style.marginLeft = "100%";
            clearTimeout(timer2);
            start2 = 0;
          }
          if (interval.dataset.currentTime >= "90") {
            clearTimeout(timer2);
          }
        }, 150);
      }

      // to pause note:
      if (
        !pausebtnTriangle.classList.contains("hide") &&
        Number(interval.getAttribute("data-current-pause")) == 0
      ) {
        clearTimeout(timer);
        console.log(interval.dataset.currentPause);
      }
      if (
        !pausebtnTriangle.classList.contains("hide") &&
        !Number(interval.getAttribute("data-current-pause")) == 0
      ) {
        clearTimeout(timer2);
        console.log(interval.dataset.currentPause);
        start2 = 0;
        interval.dataset.currentTime = interval.dataset.currentPause;
      }
    });

    interval.style.width = "0%";
    hasBeenCalled = true;
  }
};
//////////////////////////////////////
// note:display current song playingtodo:

const sideBarNavArtists = document.querySelectorAll(".nav__img");
const content1 = document.querySelectorAll(".section--1__content__info");
const content2 = document.querySelectorAll(".section--2__content");
const content3 = document.querySelectorAll(".section--3__content");
const playingSongContainer = document.querySelector(".playing__song--title");
const nextbtn = document.querySelector(".next");

// note: current song playing todo:

const curPlaySongImg = document.querySelector(".curPlaySongImg");
const curSongTitle = document.querySelector(".current__song--title--1");
const curSongArtist = document.querySelector(".current__song--title--2");

// note: side nav play click
sideBarNavArtists.forEach((cur, i) => {
  cur.addEventListener("click", function () {
    if (cur.title === navArtist.artist[i]) {
      curPlaySongImg.src = navArtist.profilePic[i];
      curSongTitle.textContent = `${navArtist.songtitle[i]}`;
      curSongArtist.textContent = `by ${cur.title}`;
      interval.dataset.currentPause = 0;
      like.classList.remove("music__control__love__iconToggle");
      play();

      like.addEventListener("click", function () {
        cur.setAttribute("data-liked-song-data", "liked");
      });
      if (cur.dataset.likedSongData === "liked") {
        like.classList.add("music__control__love__iconToggle");
      } else {
        like.classList.remove("music__control__love__iconToggle");
      }
    }
  });
});

// note:content1 play click

content1.forEach((cur, i) => {
  cur.addEventListener("click", function () {
    if ((cur.dataset.dataTitleData = content1Titles.titles[i])) {
      curPlaySongImg.src = content1Titles.images[i];
      curSongTitle.textContent = `${content1Titles.titles[i]}`;
      // clearTimeout(timer);
      // clearTimeout(timer2);
      // play();
      // palyingAnimation.style.display = "flex";
      // pausebtnTriangle.classList.add("hide");

      like.classList.remove("music__control__love__iconToggle");

      like.addEventListener("click", function () {
        cur.setAttribute("data-liked-song-data", "liked");
      });
      if (cur.dataset.likedSongData === "liked") {
        like.classList.add("music__control__love__iconToggle");
      } else {
        like.classList.remove("music__control__love__iconToggle");
      }
    }
  });
});

// note:content2 play click
// console.log(content2);
content2.forEach((cur, i) => {
  cur.addEventListener("click", function () {
    curPlaySongImg.src = content2DailyMix[4][i];
    curSongTitle.textContent = `Dialy Mix${i + 1}`;
    curSongArtist.textContent = `by ${content2DailyMix[3][i].split(",", 1)}...`;
    // clearTimeout(timer);
    // clearTimeout(timer2);
    // play();
    // palyingAnimation.style.display = "flex";
    // pausebtnTriangle.classList.add("hide");

    like.classList.remove("music__control__love__iconToggle");

    like.addEventListener("click", function () {
      cur.setAttribute("data-liked-song-data", "liked");
    });
    if (cur.dataset.likedSongData === "liked") {
      like.classList.add("music__control__love__iconToggle");
    } else {
      like.classList.remove("music__control__love__iconToggle");
    }
  });
});

// note:content3 play click

content3.forEach((cur, i, arr) => {
  cur.addEventListener("click", function () {
    curPlaySongImg.src = content3obj.content3MusicCover[i];
    curSongTitle.textContent = content3obj.content3Mix[i];
    curSongArtist.textContent = content3Artist[i].split(",", 1);
    // clearTimeout(timer);
    // clearTimeout(timer2);
    // play();
    // palyingAnimation.style.display = "flex";
    // pausebtnTriangle.classList.add("hide");

    like.classList.remove("music__control__love__iconToggle");

    like.addEventListener("click", function () {
      cur.setAttribute("data-liked-song-data", "liked");
    });
    if (cur.dataset.likedSongData === "liked") {
      like.classList.add("music__control__love__iconToggle");
    } else {
      like.classList.remove("music__control__love__iconToggle");
    }
  });
});

/////////////////////////////////////////////////////////////////////////
// sectionNav2.addEventListener("click");
///////////////////////////////////////////////////////////////////////

// note: liked song controls(control aniamtions)
const like = document.querySelector(".music__control__love__icon2");
like.addEventListener("click", () => {
  like.classList.toggle("music__control__love__iconToggle");
});

//Note:Sepaker
const speakerSVG = document.querySelector(".speakerSVG");
const circleSpeaker = speakerSVG.querySelectorAll("circle");
const speakerBodySvg = speakerSVG.querySelector("rect");
const speakerSVG__container = document.querySelector(".speakerSVG__container");
const volumeRange = document.querySelector(".volume__range");

// Play Button
speakerSVG.addEventListener("click", () => {
  circleSpeaker.forEach((cur) => {
    cur.classList.toggle("circlespeakerSVG__on__off");
  });

  speakerBodySvg.classList.toggle("rectspeakerSVG__on__off");
  speakerSVG__container.classList.toggle("speakerSVG__container__on__off");
  volumeRange.classList.toggle("volume__range__animation__off");
  volumeRange.classList.toggle("volume__range__animation__on");
});

///////////////////////////////////////
// Modal windownote:
let firstName;
let lastName;

const userIcon = document.querySelector(".user__svg");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const okBtn = document.querySelector(".btn");
const modalForm = document.querySelector(".modal__form");
const usernameElement = modalForm.querySelectorAll("input");
const madeForYou = document.querySelector(".madeForYou");
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");

  lastName = usernameElement[0].value;
  firstName = usernameElement[1].value;
  const username = `${lastName} ${firstName}`;
  userIcon.setAttribute("title", username);
  if (typeof username === "string" && username !== " ") {
    madeForYou.textContent = `Made for ${username}`;
    madeForYou.classList.remove("hide");
  }
};
userIcon.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
okBtn.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
  if (e.key === "Enter" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

///////////////////////////////////////
