const { room } = require("../models");

async function roomList(req, res, next) {
	try {
		const pageNo = Number(req.query.pageNo || 1);
		const priceSort = req.query.sort;
		console.log(priceSort);
		const sorting = priceSort === "0" ? "desc" : "asc";
		console.log(sorting);
		const pageSize = Number(req.query.pageSize || 5);
		let offset = (pageNo - 1) * pageSize;

		let roomList = await room.findAll({
			order: [
				priceSort !== null
					? ["pricePerDay", sorting]
					: ["createdAt", "DESC"]
			],
			limit: pageSize,
			offset: offset
		});

		if (!roomList) throw new Error("존재하지 않는 페이지입니다.");
		let count = await room.count();
		const maxPageNo = Math.ceil(count / pageSize);

		res.status(200).json({
			maxPageNo,
			roomList
		});
	} catch (err) {
		if (err.message === "존재하지 않는 페이지입니다.") err.status = 404;
		next(err);
	}
}

async function roomInfo(req, res, next) {
	try {
		const roomsId = req.params.id;

		let roomInfo = await room.findOne({ roomsId });
		if (!roomInfo) throw new Error("존재하지 않는 페이지입니다.");

		res.status(200).json({ roomInfo });
	} catch (err) {
		if (err.message === "존재하지 않는 페이지입니다.") err.status = 404;
		next(err);
	}
}

module.exports = {
	roomList,
	roomInfo
};