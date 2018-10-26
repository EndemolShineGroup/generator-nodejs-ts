#!/usr/bin/env bash

for file in app build gitHooks github style; do
  cp -R "src/${file}/templates" "generators/${file}";
done;
unset file;
