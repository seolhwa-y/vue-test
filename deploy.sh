#!/usr/bin/env sh

# abort on errors
 set -e

# build
 npm run build

# navigate into the build output directory
 cd docs

# if you are deploying to a custom domain
#echo 'shy-cherish.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
 git push -f git@github.com:seolhwa-y/seolhwa-y.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
 git push -f git@github.com:seolhwa-y/vue-test.git main:gh-pages

cd -
