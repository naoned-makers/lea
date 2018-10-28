# lea
lea launcher and supervisor with ui and broker

**What's inside**
* A pm2 configuration file [ecosystem.config.js](ecosystem.config.js) who define all im rpi running process
* An express web server [index.js](index.js) who expose an lea ui on http://localhost:8082/ 


**Install**
If you don't have node installed on your machine
```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install nodejs
sudo npm install -g pm2
```

Then install lea project
```
sudo npm install
```
The npm install clone all the project neccessary for Lea => lea-broker, lea-ui, lea-twitter and lea-arduino

**RUN**

npm run dev

npm run prod
