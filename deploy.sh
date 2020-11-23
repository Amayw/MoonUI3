rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@gitee.com:wen_yue_wang/moonui3-website.git &&
#git remote add origin git@github.com:Amayw/MoonUI3-website.git &&
git push -f -u origin main &&
cd -
