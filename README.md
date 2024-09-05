# Ansible Playbooks for Web Server Deployment

This repository contains an Ansible playbook to automate the installation and setup of Nginx on target hosts. 

## Prerequisites

- Ansible installed on your local machine or control node.
- Target hosts accessible via SSH with the appropriate permissions.
- An inventory file (`host.ini`) configured with the target hosts.

## Files in this Repository
 - `apache/AnsibleKey.pem`: Key pair for connect to server.
 - `apache/apache-setup.yml`:Ansible playbook to install and configure Apache.
 - `apache/host.ini`:Inventory file containing the target hosts.

- `nginx/nginx-setup.yml`: Ansible playbook to install and configure Nginx.
- `nginx/host.ini`: Inventory file containing the target hosts.
- `nginx/templates/nginx.conf.j2`: Jinja2 template for Nginx configuration.

## Usage

Follow the steps below to run the Ansible playbook:

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/GovindSingh3011/Ansible_Playbook.git
cd Ansible_Playbook
```

### 2. Run Ansible Playbook for Apache Installation

```bash
cd apache
ansible-playbook -i host.ini apache-setup.yml
```
![Screenshot 2024-09-05 114305](https://github.com/user-attachments/assets/5e2c4318-4bac-40bd-b66c-4935057d1cc9)

### 3. Run Ansible Playbook for Nginx Installation

```bash
cd nginx
ansible-playbook -i host.ini nginx-setup.yml
```

![image](https://github.com/user-attachments/assets/1cea8407-d52d-411d-99a0-f50c5277d382)

