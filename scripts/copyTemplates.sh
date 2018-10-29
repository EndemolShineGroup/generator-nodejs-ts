#!/usr/bin/env bash

for file in build github node process repo services style typescript; do
  cp -R "src/${file}/templates" "generators/${file}";
done;
unset file;
