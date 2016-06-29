
create database BiNaHotel
use BiNaHotel

create table NhanVien
(
	MaNV			nchar(5) primary key,
	Username		nchar(32),
	Pass			nchar(20),
	HoTen			nvarchar(50),
	NgaySinh		date,
	GioiTinh		nvarchar(5),
	DiaChi			nvarchar(100),
	SoDT			nchar(10),
	QuocTich		nvarchar(50)
);

create table KhachHang
(
	MaKH			nchar(5) not null primary key,
	Username		nchar(32),
	Pass			nchar(20),
	HoTen			nvarchar(50),
	NgaySinh		date,
	GioiTinh		nvarchar(5),
	DiaChi			nvarchar(100),
	SoDT			nchar(10),
	QuocTich		nvarchar(50)
);

create table Phong
(
	MaPhong			nchar(5) not null primary key,
	MoTa			ntext,
	LoaiPhong		nchar(5)				
);

create table LoaiPhong
(
	MaLoai			nchar(5) not null primary key,
	TenLoai			nvarchar(20),
	DienTich		float,
	SoNguoiO		int,
	GiaThue			float
);

create table PhieuDangKy
(
	MaDK			nchar(5) not null primary key,
	MaKH			nchar(5),
	MaPhong			nchar(5),
	SoNguoiThue		int,
	NgayDen			date,
	GioDen			time,
	NgayTra			date,
	GioTra			time
);

create table HoaDon
(
	MaHD			nchar(5) not null primary key,
	MaNV			nchar(5),
	MaKH			nchar(5),
	TongTien		float
);

create table ChiTietHoaDon
(
	MaCTHD			nchar(5) not null primary key,
	MaDK			nchar(5),
	MaHD			nchar(5),
	ThanhTien		float(5)
);

alter table Phong 
add constraint PhongThuocLoai foreign key (LoaiPhong)
references LoaiPhong(MaLoai)

alter table PhieuDangKy
add constraint KhachDatPhong foreign key (MaKH)
references KhachHang(MaKH)

alter table HoaDon
add constraint KhachThanhToan foreign key (MaKH)
references KhachHang(MaKH)

alter table HoaDon
add constraint NhanVienPT foreign key (MaNV)
references NhanVien(MaNV)

alter table ChiTietHoaDon
add constraint HoaDonChiTiet foreign key (MaHD)
references HoaDon(MaHD)

alter table ChiTietHoaDon
add constraint DatPhong foreign key (MaDK)
references PhieuDangKy(MaDK)