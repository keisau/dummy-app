dummy-app
---

# briefing

this dummy app is a sample application used in our system. to set it up, you need an instance running Linux (e.g. Ubuntu 20.04 LTS), with SSH access.

# getting started

we assume the following setup:

1. Ubuntu 20.04 LTS
2. t3.micro instance (free-tier eligible)
3. a working SSH access


now remote to the machine using SSH and
```
# update your machine
sudo apt update
sudo apt upgrade -y

# install some packages
sudo apt install git wget curl vim nginx

# install node js
wget https://nodejs.org/dist/v12.18.2/node-v12.18.2-linux-x64.tar.xz -O node.tar.xz
sudo tar xf node.tar.xz --strip 1 -C /usr
rm -f node.tar.xz

# install yarnpkg
wget https://github.com/yarnpkg/yarn/releases/download/v1.22.4/yarn-v1.22.4.tar.gz -O yarn.tar.gz
sudo tar xf yarn.tar.gz --strip 1 -C /usr
rm -f yarn.tar.gz

# setup machine for the dummy app
sudo mkdir -p /var/app/logs
sudo chown -R ubuntu:ubuntu /var/app

# clone the dummy app
git clone https://github.com/LIST-Group-APAC/dummy-app.git /var/app/current

# change directory
cd /var/app/current

# setup nginx
sudo cp .deploy/nginx.conf /etc/nginx
sudo nginx -s reload

# setup systemd
sudo cp .deploy/dummy-app.service /etc/systemd/system
sudo systemctl daemon-reload

# setup logrotate
sudo cp .deploy/dummy-app /etc/logrotate.d/

# enable dummy-app
sudo systemctl enable dummy-app

# start dummy-app
sudo systemctl start dummy-app

# watch the logs
yarn log
```

# changelog

*8-Jul-2020* initial commit
