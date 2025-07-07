#!/bin/bash

REMOTE_USER_HOST="enlinea.cloud"
REMOTE_PATH="/var/www/html/uniformesprofesionales.mx/store/"
LOCAL_BUILD_PATH="dist/myapp/browser/" # Asegúrate de que esta ruta sea correcta según tu angular.json

read -p "¿Desea hacer el deploy a uniformesprofesionales.mx/store? (yes/NO) " -r
echo
if [[ "$REPLY" =~ ^(yes|YES)$ ]]
then
    echo "Verificando directorio remoto..."
    # Verifica si el directorio remoto existe
    ssh "$REMOTE_USER_HOST" "test -d $REMOTE_PATH"
    if [ $? -eq 0 ]; then
        echo "Directorio remoto existe. Iniciando rsync..."
        # Realiza el rsync
        rsync -avz "$LOCAL_BUILD_PATH" "$REMOTE_USER_HOST":"$REMOTE_PATH"
        echo "Despliegue completado."
    else
        echo "Error: El directorio remoto ${REMOTE_PATH} no existe o no tienes permisos."
        exit 1
    fi
else
    echo "Despliegue cancelado."
fi
