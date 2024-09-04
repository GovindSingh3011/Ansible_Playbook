# Ansible Playbook for Nginx Installation

This repository contains an Ansible playbook to automate the installation and setup of Nginx on target hosts. 

## Prerequisites

- Ansible installed on your local machine or control node.
- Target hosts accessible via SSH with the appropriate permissions.
- An inventory file (`host.ini`) configured with the target hosts.

## Files in this Repository

- `nginx-setup.yml`: Ansible playbook to install and configure Nginx.
- `host.ini`: Inventory file containing the target hosts.
- `templates/nginx.conf.j2`: Jinja2 template for Nginx configuration.

## Usage

Follow the steps below to run the Ansible playbook:

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/GovindSingh3011/Ansible_Playbook.git
cd Ansible_Playbook
```

### 2. Run nginx-setup.yml

```bash
ansible-playbook -i host.ini nginx-setup.yml
```

![image](https://github.com/user-attachments/assets/1cea8407-d52d-411d-99a0-f50c5277d382)

