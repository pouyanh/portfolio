#!/bin/bash

source .env
lftp -e "set ftp:ssl-allow no; mirror -R --exclude-glob=.* --exclude-glob=.*/ --exclude-glob=*.md -n -e --delete-excluded -P=10 -v; quit" -u "${USERNAME}","${PASSWORD}" "${HOSTNAME}"
