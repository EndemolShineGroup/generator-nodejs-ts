#!/usr/bin/env bash

for file in build docs github node process repo services style typescript; do
  cp -R "src/${file}/templates" "generators/${file}";
done;
unset file;
