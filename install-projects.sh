#!/bin/bash

USER='lynchmaniac'
REPO_BROKER='./lea-broker'
REPO_UI='./lea-ui'
REPO_TWITTER='./lea-twitter'
REPO_ARDUINO='./lea-arduino'

GIT=`which git`
cd ..

# Only proceed if we have a valid repo.
if [ ! -d ${REPO_BROKER}/.git ]; then
  echo "${REPO_BROKER} is not install! Installing..." 
  ${GIT} clone https://github.com/naoned-makers/lea-broker.git
  echo "${REPO_BROKER} is install"
  cd ${REPO_BROKER}
  npm install
else
  echo "${REPO_BROKER} is an install repo! Nothing to do..." 
fi

cd ..

# Only proceed if we have a valid repo.
if [ ! -d ${REPO_UI}/.git ]; then
  echo "${REPO_UI} is not install! Installing..." 
  ${GIT} clone https://github.com/naoned-makers/lea-ui.git
  echo "${REPO_UI} is install" 
  cd ${REPO_UI}
  npm install
else
  echo "${REPO_UI} is an install repo! Nothing to do..." 
fi

cd ..

# Only proceed if we have a valid repo.
if [ ! -d ${REPO_TWITTER}/.git ]; then
  echo "${REPO_TWITTER} is not install! Installing..." 
  ${GIT} clone https://github.com/naoned-makers/lea-twitter.git
  echo "${REPO_TWITTER} is install" 
  cd ${REPO_TWITTER}
  npm install
else
  echo "${REPO_TWITTER} is an install repo! Nothing to do..." 
fi

cd ..

# Only proceed if we have a valid repo.
if [ ! -d ${REPO_ARDUINO}/.git ]; then
  echo "${REPO_ARDUINO} is not install! Installing..." 
  ${GIT} clone https://github.com/naoned-makers/${REPO_ARDUINO}.git
  echo "${REPO_ARDUINO} is install" 
  cd ${REPO_ARDUINO}
  npm install
else
  echo "${REPO_ARDUINO} is an install repo! Nothing to do..." 
fi