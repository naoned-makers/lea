#!/bin/bash

USER='naoned-makers'
REPO_BROKER='./lea-broker'
REPO_UI='./lea-ui'
REPO_TWITTER='./lea-twitter'
REPO_ARDUINO='./lea-arduino'
REPO_BRAIN='./lea-brain'

GIT=`which git`


install_repo()
{
  REPO=$1
  # Only proceed if we have a valid repo.
  if [ ! -d ${REPO}/.git ]; then
    echo "${REPO} is not install! Installing..." 
    ${GIT} clone https://github.com/${USER}/${REPO}.git
    echo "${REPO} is install"
    cd ${REPO}
    npm install
    cd ..
  else
    echo "${REPO} is an install repo! Nothing to do..." 
  fi
}

echo "Start of script..."
cd ..
install_repo ${REPO_BROKER}
install_repo ${REPO_UI}
install_repo ${REPO_TWITTER}
install_repo ${REPO_ARDUINO}
install_repo ${REPO_BRAIN}
echo "End of script..."
