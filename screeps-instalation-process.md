
# Guide
## Private server on Ubuntu using MongoDB and Redis
https://docs.screeps.com/contributed/ps_ubuntu.html

## configuring grunt
https://docs.screeps.com/contributed/advanced_grunt.html

## installing on windows
we need wsl ubuntu 16 (screeps uses old packages, like node 8 or 6 and more), it can be directly or with nvm

-- note install a node version 10, that will prevent some other errors

## resource
https://gist.github.com/xynova/87beae35688476efb2ee290d3926f5bb


## fix issue with installing mongodb-org
ln -T /bin/true /usr/bin/systemctl && apt-get update && apt-get install -y mongodb-org && rm /usr/bin/systemctl


## isolated-vm@2.1.0 install: `node-gyp rebuild --release -j 4` npm ERR! Exit status 1

solution#1
install correct python version also can use pyenv
first remove the existent python before using pyenv
https://www.liquidweb.com/kb/how-to-install-pyenv-on-ubuntu-18-04/

solution#2
source https://github.com/screeps/screeps/issues/122
in other worlds you can run the command

## fix to use node globally if using nvm
`n=$(which node);n=${n%/bin/node}; chmod -R 755 $n/bin/*; sudo cp -r $n/{bin,lib,share} /usr/local`

[source](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-with-nvm-node-version-manager-on-a-vps)


## share nvm and node with screeps
instead of creating the unpriviledge user fromt he guide use the following steps:

* step 1:
  `sudo adduser screeps <password>`

* step 2: create nvm and node global directories
  `mkdir /usr/local/nvm`
  `mkdir /usr/local/node`

* step 3: Add permissions to nvm and node directories 
  * `sudo chown -R root:screeps /usr/local/nvm`
  * `sudo chown -R root:screeps /usr/local/node`
  * `sudo chmod -R 775 /usr/local/nvm`
  * `sudo chmod -R 775 /usr/local/node`

* step 4: create a nvm profile
 `touch /etc/profile.d/nvm.sh` 

  ### then add the following
  > export NVM_DIR=/usr/local/nvm </br>
  > source /opt/nvm/nvm.sh (this could ~/.nvm/nvm.sh) </br>
  > export NPM_CONFIG_PREFIX=/usr/local/node </br>
  > export PATH="/usr/local/node/bin:$PATH" </br>

   

