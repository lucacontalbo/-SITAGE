#!/bin/bash
value=$(jq '.access_token' ./accesstoken.json)
#echo ${value:1:-1} > ./prova.json
curl -X GET https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${value:1:-1} > ./accesstoken.json

