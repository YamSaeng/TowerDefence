import stageOperator from "../../operator/stageOperator.js";
import { clearMonsters } from "../../Storages/monster.storage.js";
import { clearStage } from "../../Storages/stage.storage.js";
import { clearTower, createTowers } from "../../Storages/tower.storage.js";
import { spawnNormal } from "../monster/spawnNormal.js";

// 토큰 검증
export const stageStart = async (socket, payload, userId) => {
  try {
    clearStage(userId);
    clearMonsters(userId);
    clearTower(userId);

    // 시작 시 스테이지(스토리지) 생성
    await stageOperator.stageStart(socket, userId);

    // 시작 시 타워(스토리지) 생성
    createTowers(userId);

    spawnNormal(socket, userId);

    // 스테이지 변경함수 시작
    await stageOperator.stageChangeData(socket, userId);

    return { status: "success", Message: `스테이지 시작` };
  } catch (error) {
    console.log(error.message, error);
    return { status: "fail", Message: `스테이지 시작 중 에러 발생` };
  }
};
