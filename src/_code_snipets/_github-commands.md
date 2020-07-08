…or create a new repository on the command line
echo "# resolve" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/blackuiteam/resolve.git
git push -u origin master

…or push an existing repository from the command line
git remote add origin https://github.com/blackuiteam/resolve.git
git push -u origin master



git add .
yarn build
git commit -m 'changes'
yarn deploy
git push -u origin master
