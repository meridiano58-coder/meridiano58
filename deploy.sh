#!/bin/bash

echo "Subiendo actualizaciones de Meridiano 58..."
git add .

# Si no le pasás un mensaje, usa "Actualización" por defecto
msg="Actualización de contenido"
if [ -n "$1" ]; then
    msg="$1"
fi

git commit -m "$msg"
git push

echo "¡Publicado con éxito!"

