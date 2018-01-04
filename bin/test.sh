#!/usr/bin/env bash

yarn run lint

if [ $? -eq 1 ]
then
   echo "Fix lint warnings before commit!"
   exit 1
fi

echo "Everything is awesome!"
