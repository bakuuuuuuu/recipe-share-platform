
function Recipes(...elements) {
  this.savedUserId = elements[0];
  this.No = elements[1];
  this.title = elements[2];
  this.content = elements[3];
  this.category = elements[4];
  this.imageUrl = elements[5];
}

export function initPostData() {
  let RecipeArray = JSON.parse(localStorage.getItem("recipes"));

  if (RecipeArray == null || RecipeArray.length === 0) {
    RecipeArray = new Array();
    console.log("initalize Recipes");
    RecipeArray.push(new Recipes(
      "admin",
      1,
      "닭가슴살 갈비구이",
      "퍽퍽한 닭가슴살 요리를 고민하시는 분들께 강추하는 닭가슴살 갈비구이~",
      "한식",
      "https://recipe1.ezmember.co.kr/cache/recipe/2015/08/10/d5c96833cc122cb13fbd057eefa5c3df1.jpg",
    ));

    RecipeArray.push(new Recipes(
      "admin",
      2,
      "2분 완성 초간단 토마토 스프~다이어트에 좋은 토마토 요리",
      `쿨캣이 자주 만들어 먹는 간단하고 맛있는 토마토 수프입니다.
      칼로리가 낮고 영양이 풍부해 다이어트에 좋은 토마토를
      먹기 좋은 수프 스타일로 만들었어요.
      토마토와 올리브오일이 어우러져 나오는 은근한
      단맛과 은은한 풍미가 제법 근사하답니다.
      그리고 무엇보다 좋은건 조리하는 시간이 달랑 2분~!!
      바쁜 아침에 뚝딱 만들어 밥 대신 먹으면 든든하니 좋아요.
      건강한 다이어트를 원하시는 분들께 강추합니다.`,
      "양식",
      "https://recipe1.ezmember.co.kr/cache/recipe/2019/06/12/f19feb55fd23730c1fae268515b913931.jpg",
    ));

    RecipeArray.push(new Recipes(
      "admin",
      3,
      "[간단 자취요리] 쯔유없이! 핵 맛있는 가츠동 만들기 / 돈가스 덮밥",
      `안녕하세요 구독자님들 ♥ 오늘은 가츠동을 만들었어요!
      몇몇 분들이 요청을 하셔서 찍어 봤는데요~
      요청해 주신 메뉴들 중 채널 컨셉과 너무 동떨어지지 않는 이상
      예(과다재료,비싼재료,복잡한요리) 해드리려고 하고 있어요!!
      가츠동 좋아하시는 분들 많으시죠?
      근데 가츠동에는 쯔유가 들어가는데 일반 자취생들 집에는
      쯔유가 거의 없죠... 그래서 쯔유 없이도 맛있게 가츠동 만들었어요!`,
      "일식",
      "https://recipe1.ezmember.co.kr/cache/recipe/2016/07/11/d893e9cb42200003911fdca7ed525d311.jpg"
    ));
    RecipeArray.push(new Recipes(
      "admin",
      4,
      "떠먹는 티라미수 만들기",
      `노오븐 베이킹`,
      "디저트",
      "https://recipe1.ezmember.co.kr/cache/recipe/2019/02/03/2b6a6806bba2f1ba5aef0854884710f91.png"
    ));
    RecipeArray.push(new Recipes(
      "user",
      5,
      "백선생, 백종원 중국집 짜장면 만들기~!",
      `집밥백선생의 짜장면 레시피를 보고 만들었습니다.`,
      "중식",
      "https://recipe1.ezmember.co.kr/cache/recipe/2015/11/25/1e26880e274893fb6df222bed4794bb51.jpg"
    ));

    localStorage.setItem("recipes", JSON.stringify(RecipeArray));
  }
}

