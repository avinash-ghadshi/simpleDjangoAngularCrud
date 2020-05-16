# simpleDjangoAngularCrud

This is simple application written in Python DRf (Django Rest Framework) and Angular 9.

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
$ git clone https://github.com/avinash-ghadshi/simpleDjangoAngularCrud.git
$ cd simpleDjangoAngularCrud/
$ . venv/bin/activate
$ cd djangocrud/
$ python manage.py runserver > /tmp/sdac.log 2>&1
$ cd ../frontend/django-crud
$ ng serve
```

Hit ``` http://127.0.0.1:4200 ``` on browser

**Enjoy!!!**

*Thanks for your contribution*
