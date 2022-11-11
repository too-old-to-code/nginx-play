#!/usr/bin/env bash
NAME_OF_DIR=${PWD##*/}
docker build . -t $NAME_OF_DIR