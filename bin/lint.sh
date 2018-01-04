#!/usr/bin/env bash

eslint .

if [ $? -eq 1 ]
then
   echo "Error linting files"
   exit 1
fi

echo "Everything is awesome!"
