#!/usr/bin/env bash

yarn test

if [ $? -eq 1 ]
then
   echo "Fix tests before commit!"
   exit 1
fi

echo "Everything is awesome!"

lint-staged
