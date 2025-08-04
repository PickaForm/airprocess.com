:: DELETE EXISTING OUTPUT FILES
del /Q "..\build.js"

:: BUNDLE THE buildLICATION RESOURCES
for /R "..\utils" %%f in (*.js) do type "%%f" >> ..\build.js
for /R "..\views" %%f in (*.js) do type "%%f" >> ..\build.js
for /R "..\blocks" %%f in (*.js) do type "%%f" >> ..\build.js