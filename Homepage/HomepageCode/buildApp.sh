#!/bin/bash
echo 'Moving to parent dir'
cd ..
echo 'Removing files except code'
ls . | grep -v 'HomepageCode' | xargs rm -rf
echo 'Moving to HomepageCode'
cd HomepageCode
echo 'Building app'
npm run build
echo 'Copying files to parent dir'
cp -r dist/browser/* ..
if [ "$#" -eq 1 ]; then
  echo 'Preparing commit'
  git add -A
  git commit -am "$1"
fi

