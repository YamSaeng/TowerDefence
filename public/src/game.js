import Game from "../src/Client/Game.js";
import { Inhibitor } from "./base.js";
import { getLocalStorage } from "./Local/localStorage.js";
import UserSocket from "./Network/userSocket.js";

let game = new Game();

const NUM_OF_MONSTERS = 5;
const backgroundImage = new Image();
backgroundImage.src = "images/bg.webp";

const towerImage = new Image();
towerImage.src = "images/tower.png";

const inhibitorImage = new Image();
inhibitorImage.src = "images/base.png";

const pathImage = new Image();
pathImage.src = "images/path.png";

const monsterImages = [];
for (let i = 1; i <= NUM_OF_MONSTERS; i++) {
  const img = new Image();
  img.src = `images/monster${i}.png`;
  monsterImages.push(img);
}

GameStart();

async function GameStart() {
  // 이미지 로딩 완료 후 서버와 연결하고 게임 초기화
  await Promise.all([
    new Promise((resolve) => (backgroundImage.onload = resolve)),
    new Promise((resolve) => (towerImage.onload = resolve)),
    new Promise((resolve) => (inhibitorImage.onload = resolve)),
    new Promise((resolve) => (pathImage.onload = resolve)),
    ...monsterImages.map(
      (img) => new Promise((resolve) => (img.onload = resolve))
    ),
  ]).then(() => {
    UserSocket.GetInstance().Connect();
    UserSocket.GetInstance().SendEvent(1, {});

    game.GameStart({
      backgroundImage: backgroundImage,
      towerImage: towerImage,
      inhibitorImage: inhibitorImage,
      pathImage: pathImage,
      monsterImages: monsterImages,
      userGold: getLocalStorage("initGameDB").startGold, // 시작시 유저 골드
      inhibitorHp: getLocalStorage("initGameDB").baseHp, // 시작시 기지 체력
      highScore: getLocalStorage("initGameDB").serverHighScore, // 시작시 서버 최고 점수
      startTime: Date.now(), // 현재 시간
      elpsedTime: Date.now(), // 변경 시간
    });

    // 몬스터 생성 주기
    setInterval(() => {
      game.SpawnMonster();
    }, game.monsterSpawnInterval);

    game.GameLoop();
  });
}
