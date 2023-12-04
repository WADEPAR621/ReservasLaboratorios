######################## READ ME ###################
Para poder ejecutar este proyecto de manera correcta se deben instalar varias cosas

#REQUISITOS#
NODE.JS
RUBY
RAILS ON RUBY

si tiene todo esto, saltece al paso 3

1. Instalar node.js
macOS:
    Usando Homebrew (recomendado):

    Abrir la Terminal.
    Instalar Homebrew si aún no está instalado: /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    Ejecutar el comando para instalar Node.js: brew install node
    Usando el instalador oficial:

    Visitar nodejs.org.
    Descargar el instalador LTS.
    Ejecutar el instalador y seguir las instrucciones.
Linux:
    Usando el gestor de paquetes (por ejemplo, apt en Ubuntu):

    Abrir la Terminal.
    Actualizar el índice de paquetes: sudo apt update
    Instalar Node.js: sudo apt install nodejs
    Instalar npm: sudo apt install npm
    (Opcional) Instalar el paquete nodejs-legacy si es necesario: sudo apt install nodejs-legacy
    Usando NVM (Node Version Manager):

    Seguir las instrucciones en GitHub NVM.
    Instalar Node.js con NVM: nvm install node
Windows:
    Usando el instalador oficial:

    Visitar nodejs.org.
    Descargar el instalador LTS para Windows.
    Ejecutar el instalador y seguir las instrucciones.
    Usando Chocolatey (opcional, si tienes Chocolatey instalado):

    Abrir PowerShell como administrador.
    Instalar Node.js con Chocolatey: choco install nodejs
    Instalar npm: choco install npm
    Usando Scoop (opcional, si tienes Scoop instalado):

    Abrir PowerShell.
    Instalar Node.js con Scoop: scoop install nodejs
    Usando NVM para Windows (opcional):

    Seguir las instrucciones en GitHub NVM para Windows.

2. Instalar Rails on Ruby

macOS:
    Instalar Ruby:

    Abrir la Terminal.
    Instalar Ruby desde ruby-lang.org: /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    Instalar Rails:

    Ejecutar el siguiente comando: gem install rails
        Verificar la instalación:

    Ejecutar: rails -v
        Crear una nueva aplicación:

    Ejecutar: rails new mi_aplicacion
        Ingresar al directorio de la aplicación:

    Ejecutar: cd mi_aplicacion
        Iniciar el servidor:

    Ejecutar: rails server
        Ver la aplicación:

    Visitar http://localhost:3000 en el navegador.
Linux:
    Instalar Ruby:

    Abrir la Terminal.
    Actualizar el índice de paquetes: sudo apt update
    Instalar Ruby: sudo apt install ruby-full
    Instalar Rails:

    Ejecutar: gem install rails
        Verificar la instalación:

    Ejecutar: rails -v
        Crear una nueva aplicación:

    Ejecutar: rails new mi_aplicacion
        Ingresar al directorio de la aplicación:

    Ejecutar: cd mi_aplicacion
        Iniciar el servidor:

    Ejecutar: rails server
        Ver la aplicación:

    Visitar http://localhost:3000 en el navegador.
Windows:
    Instalar Ruby:

    Descargar e instalar Ruby desde ruby-lang.org.
        Instalar Rails:

    Abrir PowerShell como administrador.
    Ejecutar: gem install rails
        Verificar la instalación:

    Ejecutar: rails -v
        Crear una nueva aplicación:

    Ejecutar: rails new mi_aplicacion
        Ingresar al directorio de la aplicación:

    Ejecutar: cd mi_aplicacion
        Iniciar el servidor:
        Ejecutar: rails server

        Ver la aplicación:
        Visitar http://localhost:3000 en el navegador.
Estos pasos deben ser seguidos secuencialmente. Recuerda que es importante tener Ruby instalado antes de instalar Rails. Además, asegúrate de seguir las instrucciones específicas de instalación para tu sistema operativo.

3. En el Proyecto

Para colocar las dependencias respectivas al proyecto coloque en la consola

    npm install 

Asi se le genera una carpeta llamada "node_modules" donde contendra todas las dependencias del proyecto

4. Si ocurre algun problema o desperfecto comunicarse con uno de los colaboradores del repositorio.