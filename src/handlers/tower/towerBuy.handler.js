import {
  towerBuyGoldCheck,
  towerBuyLimitCheck,
  towerBuyMakeTower,
} from "../../operator/towerBuyOperator.js";

// 타워 구매
export const towerBuy = async (socket, payload, userId) => {
  try {
    // 타워 개수 체크
    if (await towerBuyLimitCheck(userId)) {
      return { status: "fail", Message: "타워 개수 제한" };
    }

    // 타워 골드 체크 및 골드 차감
    if (await towerBuyGoldCheck(payload.towerId, userId)) {
      return { status: "fail", Message: "골드 부족" };
    }

    // 타워 생성 및 생성된 타워 프론트엔드로 전달
    towerBuyMakeTower(payload.towerId, payload.timeStamp, userId, socket);

    return { status: "succues", Message: "타워 구매" };
  } catch (error) {
    console.log(error.message, error);
    return { status: "fail", Message: "타워 구매" };
  }
};
