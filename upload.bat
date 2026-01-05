@echo off
echo Dang bat dau cap nhat code len GitHub...

git add .

set /p msg="Nhap loi nhan Commit (vi du: update code): "

git commit -m "%msg%"

git push

echo.
echo === Da xong! Nhan phim bat ky de thoat ===
pause