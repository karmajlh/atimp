```bat
@echo off
title Instalar Libreria ONPE
color 0C

set "ARCHIVO=iofe.indecopi.gob.pe_TSL_tsl-pe.xml"
set "ORIGEN=%~dp0%ARCHIVO%"
set "DESTINO=C:\Users\FN\.firmaONPE\cache"

echo.
echo ==========================================
echo     INSTALAR LIBRERIA ONPE
echo ==========================================
echo.

:: Verificar si existe el archivo que se debe copiar
if not exist "%ORIGEN%" (
    echo.
    echo [ERROR] No se encontro el archivo necesario.
    echo.
    echo Debe descargar el archivo:
    echo.
    echo %ARCHIVO%
    echo.
    echo Coloque el archivo en la misma carpeta
    echo donde se encuentra este archivo .BAT
    echo.
    echo ==========================================
    echo AREA DE TECNOLOGIA DE LA INFORMACION - MP-FN
    echo ==========================================
    pause
    exit /b 1
)

:: Limpiar carpeta cache
del /Q "%DESTINO%\*.*" 2>nul

for /d %%i in ("%DESTINO%\*") do rd /S /Q "%%i"

:: Copiar archivo
copy "%ORIGEN%" "%DESTINO%" /Y >nul


color 0A
echo.
echo ==========================================
echo AREA DE TECNOLOGIA DE LA INFORMACION - MP-FN
echo ==========================================
echo.
echo La carpeta cache fue limpiada.
echo.
echo El archivo se copio correctamente:
echo %ARCHIVO%
echo.
echo ==========================================
echo.
pause
```
