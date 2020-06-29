# simpleDjangoAngularCrud

This is simple application written in Python DRf (Django Rest Framework) and Angular 9.
**This project needs python 3.6+ to run perfectly.**

### Pre-requisite
***You need to install following packages***
- NPM / NodeJS
    - for debian system
    - ``` $ sudo apt-get install npm ```
    - ``` $ sudo apt-get install node-*```
    - for centos system
    - ``` $ sudo yum install nodejs ```
    - ``` $ sudo yum install npm ```

- Angular Cli
    - for debian / centos system
    - ``` npm install -g @angular/cli ```

### Project Setup

```
$ sudo git clone https://github.com/avinash-ghadshi/simpleDjangoAngularCrud.git
$ sudo cd simpleDjangoAngularCrud/
$ sudo pip3 install -r Requirements.txt
$ sudo cd djangocrud/
$ sudo python3 manage.py runserver > /tmp/sdac.log 2>&1 &
$ sudo cd ../frontend/django-crud
$ sudo npm install
$ sudo ng build
$ sudo ng serve
```

***NOTE:***
*Change username and password in **frontend/django-crud/src/app/token.service.ts**  according to your django settings.*

Hit ``` http://127.0.0.1:4200 ``` on browser

**Enjoy!!!**

*Thanks for your contribution*
