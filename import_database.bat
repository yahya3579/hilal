@echo off
echo Starting MySQL import...
mysql -h shuttle.proxy.rlwy.net -u root -pOxLwLhBnpaChYBiobtMklTZaXWNsIcpX --port 41989 --protocol=TCP railway < hilal_backend_dump.sql
if %ERRORLEVEL% NEQ 0 echo Error: Import failed with error code %ERRORLEVEL%
pause
