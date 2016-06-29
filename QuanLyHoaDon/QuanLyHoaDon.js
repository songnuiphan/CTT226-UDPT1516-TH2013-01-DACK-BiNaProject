
// node node-persis.js

// load module node-persist
var storage = require('node-persist');

// ham khoi tao
// load du lieu tren o dia
storage.initSync({
	dir: "BiNaHotel" // cau hinh noi luu tru du lieu nam trong thu muc
});

// ham lay danh sach hoa don
function getAllHoaDon()
{
	// lay danh sach hoa don tu noi luu tru
	var HoaDon = storage.getItemSync('BiNaHotel');

	// neu khong co hoa don nao thi tra ve mang rong
	if (typeof HoaDon === "undefined")
	{
		return [];
	}
	
	// nguoc lai se tra ve danh sach hoa don
	return HoaDon;
}

// ham lay chi tiet hoa don
function getHoaDon(id_HoaDon)
{
	// lay danh sach hoa don
	var HoaDon = getAllHoaDon();

	// bien luu tru hoa don duoc tim thay
	var temp = null;

	// lap de tim hoa don
	for (var i = 0; i < HoaDon.length; i++)
	{
		if (HoaDon[i].id == id_HoaDon)
		{
			temp == HoaDon[i];
			break;
		}
	}
	return temp;
}

// ham them mot hoa don
function addHoaDon(id, MaNV, MaKH, TongTien)
{
	var HoaDon = getAllHoaDon();
	HoaDon.push({
	id:		id,
	MaNV:		MaNV,
	MaKH:		MaKH,
	TongTien:	TongTien
	});
	storage.setItemSync('HoaDon', HoaDon);
}

// ham xoa mot hoa don
function removeHoaDon(id_HoaDon)
{
	var HoaDon = getAllHoaDon();
	for (var i = 0; i < HoaDon.length(); i++)
	{
		if (HoaDon[i].id === id_HoaDon)
			HoaDon.splice(i, 1);
	}
	storage.setItemSync('HoaDon', HoaDon);
}

// ham sua thong tin hoa don
function editHoaDon(id_HoaDon, MaNV, MaKH, TongTien)
{
	var HoaDon = getAllHoaDon();
	for (var i = 0; i < HoaDon.length; i++)
	{
		if (HoaDon[i].id === id_HoaDon)
		{
			HoaDon[i].MaNV = MaNV;
			HoaDon[i].MaKH = MaKH;
			HoaDon[i].TongTien = TongTien;
		}
	}
	storage.setItemSync('HoaDon', HoaDon);
}

// ham hien thi danh sach hoa don
function showHoaDon()
{
	var HoaDon = getAllHoaDon();
	HoaDon.forEach(function(hoadon){
		console.log('HoaDon: ' + hoadon.id + ' ' + hoadon.MaNV + ' ' + hoadon.MaKH + ' ' + TongTien);
	});
}

