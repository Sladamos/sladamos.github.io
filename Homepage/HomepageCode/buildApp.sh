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
echo 'Moving to parent dirr'
cd ..
echo 'Creating redirect file'
touch _redirects
echo '/*    /index.html   200' > _redirects
if [ "$#" -eq 1 ]; then
  echo 'Preparing commit'
  git add -A
  git commit -am "$1"
fi

