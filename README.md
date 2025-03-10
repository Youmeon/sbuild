# commersialsitebuild

git add .

git commit -m "add test"

git add .

git commit -m "изменил 3 тест"

** изменил файл реадми.md **

git add README.md -- добавить файлы к коммиту

git commit -m "изменил реадми.мд, добавил h1 заголовок" -- зафиксировать изменения

git push -- отправить коммит в удаленный репозиторий

git checkout -- переместиться в другую ветку

git branch -- посмотреть, в какой ветке мы находимся

git merge -- слияние веток (
** как работает **
допустим мы сейчас в ветке AI-chat
git branch
// \* AI-chat
main
webbuild
(если нет) {
git checkout AI-chat
}

git add .
git commit "add test"
git push

git checkout main
git branch
//
AI-chat \* main
webbuild
git pull
git merge AI-chat
git add .
git commit -m "merge"
git push
)
