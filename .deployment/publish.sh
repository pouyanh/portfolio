#!/bin/bash

source .env
lftp -e "set ssl:verify-certificate no; set ftp:prefer-epsv yes; mirror -R --exclude-glob=.* --exclude-glob=.*/ --exclude-glob=*.md -n -e --delete-excluded -P=10 -v; quit" -u "${FTP_USERNAME}","${FTP_PASSWORD}" "${FTP_HOSTNAME}"
