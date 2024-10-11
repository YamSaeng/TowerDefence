import towerAttackOperator from "../../operator/towerAttackOperator.js";

// 타워 공격
export const towerAttack = (io, socket, payload, userId) => {
  try {
    // 타워 공격 검증 함수
    towerAttackOperator.towerAttackCheck(
      payload.tower,
      payload.monsters,
      payload.inhibitor,
      userId
    );
    console.log("타워 공격/힐 처리 성공");

    return { status: "success", Message: "타워 공격" };
  } catch (error) {
    // 서버에서는 error 알 수 있음
    console.log("타워 공격 정보 처리 중 에러 발생", error);
    // 클라이언트에서는 fail만
    return { status: "fail", Message: "타워 공격" };
  }
};
