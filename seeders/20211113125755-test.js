"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert("rooms", [
			{
				id: 1,
				name: "산포리 펜션",
				description:
					"입실/퇴실 시간\n ㅁ 입실시간 : 오후 3시 ~ 오후 10시\n ㅁ 퇴실시간 : 익일 오전 11시 까지\n ㅁ 오후 10시 이후의 입실은 미리 연락부탁드립니다.",
				address: "경상북도 울진군 근남면 세포2길 1-21",
				university: "울진대학교",
				houseType: "펜션",
				pricePerDay: 30000,
				images: JSON.stringify([
					{
						url: "http://si.wsj.net/public/resources/images/OB-YO176_hodcol_H_20130815124744.jpg",
						key: "1"
					},
					{
						url: "https://image.pensionlife.co.kr/penimg/pen_1/pen_19/1977/9734f7418fcc01a2321ba800b1f2c7ee.jpg",
						key: 2
					}
				])
			},
			{
				id: 2,
				name: "House of card",
				description:
					"하우스 오브 카드(House of cards)는, 카드로 쌓은 집처럼 엉성하고 비현실적인 계획을 의미한다. 또한 미국 하원을 House라고 부른다는 점과 Cards가 도박을 의미한다는 점을 감안하면 권모술수가 판치는, 그래서 엉성하고 불안정한 하원을 은유하는 중의적 의미도 있다.",
				address: "미국",
				university: "외국대학교",
				houseType: "단독주택",
				pricePerDay: 40000,
				images: JSON.stringify([
					{
						url: "https://image.pensionlife.co.kr/penimg/pen_1/pen_19/1977/9734f7418fcc01a2321ba800b1f2c7ee.jpg",
						key: 1
					}
				])
			},
			{
				id: 3,
				name: "종이의 집",
				description:
					"넷플릭스에서 스트리밍 중인 스페인 드라마. 넷플릭스 드라마 전체를 통틀어 2위에 오른 기록이 있는 인기작이다. 2021년 9월 현재 파트 시즌 5 (1부)까지 나왔다. 장르는 범죄 스릴러로, 교수라고 불리는 한 천재가 8명의 범죄자들을 모아 금고를 터는 이야기다. 시즌 1, 2에서는 스페인 조폐국을 터는 내용으로 마무리 되고, 시즌 3, 4는 스페인 중앙 은행 지하에 보관되어 있는 금을 터는 내용으로 아직 마무리되지 않아 시즌 5로 이어는 중이다.",
				address: "스페인",
				university: "외국대학교",
				houseType: "단독주택",
				pricePerDay: 35000,
				images: JSON.stringify([
					{
						url: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile10.uf.tistory.com%2Fimage%2F999D4F4B5E847E422269D3",
						key: 1
					}
				])
			},
			{
				id: 4,
				name: "너와집",
				description:
					"너와집은 기와 대신 너와로 지붕을 이은 한국의 전통 집이다. 예전에 화전민이 사용했던 집으로, 맑은 날은 지붕 재료가 수축하여 통풍이 잘되고, 비오는 날은 습기를 빨아들여 빗물이 새는 것을 막는다. 지금은 보기가 힘들어졌다.원래 함경도 산촌에서 발달한 가옥 형태이다.",
				address: "서울특별시 서초구 서초3동 1573-14",
				university: "서울대학교",
				houseType: "아파트",
				pricePerDay: 20000,
				images: JSON.stringify([
					{
						url: "http://www.cha.go.kr/unisearch/images/imp_folklore_material/1633792.jpg",
						key: 1
					},
					{
						url: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Korea-Samcheok-Neowajip-Shingled_house-02.jpg",
						key: 2
					}
				])
			},
			{
				id: 5,
				name: "삼척 신리 너와집과 민속유물",
				description:
					"강봉문·김진호·윤영원 씨의 소유였던 너와집과 이들 집에 딸린 민속유물들을 가리킨다. '너와집'이란 굵은 소나무를 알맞은 크기로 잘라 지붕을 얹은 집을 말한다. 1970년대초까지 여러 종류의 집들이 있었으나, 대부분 개조되어 현재 문화재로 지정된 집만 옛 모습을 간직하고 있다.",
				address: "강원도 삼척시 도계읍 문의재로 1223-9 (신리)",
				university: "울진대학교",
				houseType: "아파트",
				pricePerDay: 50000,
				images: JSON.stringify([
					{
						url: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Korea-Samcheok-Neowajip-Shingled_house-02.jpg",
						key: 1
					}
				])
			},
			{
				id: 6,
				name: "펜트하우스",
				description:
					"직역하면 '옥상 가옥'이라는 의미다. 흔히 고층 건물의 꼭대기에 있는 최고급 주거 형태를 의미한다. 영화나 드라마를 보면 초고층 빌딩의 꼭대기에 위치해 사방이 탁 트인 고급 고층 주택이 등장하는 경우가 가끔 있는데 그것이 바로 펜트하우스의 한 유형이다.",
				address: "서울시 강남구 대치동",
				university: "서울대학교",
				houseType: "아파트",
				pricePerDay: 30000,
				images: JSON.stringify([
					{
						url: "https://w.namu.la/s/22567807e9be207debf3342f62bfd123b11f587bf7f8702e5056c4d5adf756542684e0c946e706e090972329397fad6c63e310d5967a80731dec8abea7c396587da152507ddaaa676ca421cfb4050b89d63321edca6d63ec4cd29f303632f2a0",
						key: 1
					}
				])
			},
			{
				id: 7,
				name: "프로방스 펜션",
				description:
					"저희 프로방스펜션은 북유럽스타일의 독채펜션으로 에버랜드, 양지리조트, 지산리조트, 곤지암리조트, 용인청소년수련원, 한국민속촌, 한택식물원등과 인접하여있습니다. 사랑하는 가족, 연인, 친구들과 함께 프로방스에서 예쁜 추억 만들어가세요.",
				address: "용인",
				university: "용인대학교",
				houseType: "펜션",
				pricePerDay: 32000,
				images: JSON.stringify([
					{
						url: "https://lh3.googleusercontent.com/proxy/TBlFS7LjGfoTqZ89FVlPnlc-ppU2RoKchJbMvfcEfK0ljBS-O2OhyTYAFg_65TO9rZ5yfhQ4TLwg7Dxrvj9gJX_X0SQ7GYxF5BOxXcMMROrNaMcHUNWJSHR2X4FGMWuOz8juUix_fIK5_XpgD80",
						key: 1
					}
				])
			},
			{
				id: 8,
				name: "엘리스 펜션",
				description:
					"꿈속으로 들어간 앨리스, 그 안에서 만나는 소중한 만남과 추억들... 천혜의 자연경관과 누가 더 많이라고 할 것도 없이 어울려 있는 앨리스에서 당신의 소중한 추억을 만들어 드립니다. 최고급 스파와 단독 바비큐장, 다른 이에게 방해받지 않는 프라이빗한 객실, 그리고 자연을 만끽하실 수 있습니다.",
				address: "경기도 양평군 서종면 서능로 92 (수능리)",
				university: "용인대학교",
				houseType: "펜션",
				pricePerDay: 30000,
				images: JSON.stringify([
					{
						url: "http://img.einet.kr/P202101014/popup/pvuyakgkdc.jpg",
						key: 1
					}
				])
			}
		]);
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
	}

	// down: async (queryInterface, Sequelize) => {
	// 	/**
	// 	 * Add commands to revert seed here.
	// 	 *
	// 	 * Example:
	// 	 * await queryInterface.bulkDelete('People', null, {});
	// 	 */
	// }
};
