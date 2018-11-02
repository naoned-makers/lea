#!/bin/bash

USER='naoned-makers'
REPO_BROKER='./lea-broker'
REPO_UI='./lea-ui'
REPO_TWITTER='./lea-twitter'
REPO_ARDUINO='./lea-arduino'
REPO_BRAIN='./lea-brain'

GIT=`which git`


rebuild_repo()
{
  REPO=$1
  # Only proceed if we have a valid repo.
  if [ ! -d ${REPO}/.git ]; then
    echo -e "\e[1;41m${REPO} is missing! Please install the repo before..." 

  else
    echo "${REPO} is not rebuild! Rebuilding..." 
    cd ${REPO}
    npm run build
    cd ..
  fi
}

echo -e "\e[1;32mStart of script..."
cd ..
rebuild_repo ${REPO_UI}
rebuild_repo ${REPO_TWITTER}
rebuild_repo ${REPO_ARDUINO}
rebuild_repo ${REPO_BRAIN}
echo "End of script..."
cd ./lea
