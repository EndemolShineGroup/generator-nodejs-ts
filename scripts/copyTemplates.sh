#!/usr/bin/env bash

for file in app build github node process repo services style typescript; do
  cp -R "src/${file}/templates" "generators/${file}";
done;
unset file;
