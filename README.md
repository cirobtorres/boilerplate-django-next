# DJANGO - NEXT.JS BOILERPLATE

## Getting Started

1. Clone this repository:

   ```bash
   git clone git@github.com:cirobtorres/django-nextjs-boilerplate.git
   ```

2. `Make sure to rename **.env.example** to **.env** and config your keys, passwords etc`. Path: root_of_your_project\backend\dotenv\

3. Navigate to the same directory of docker-compose and do as follows:
   
   ```bash
   docker-compose up --build

   # or:

   docker-compose up -d --build # flag --detach
   ```

   #### Obs.: To stop containers, **ctrl + c** on terminal or, in case you have detached:

   ```bash
   docker-compose down
   ```

## Tips:

### While docker containers are up and running, you may:

1. Make use of some django commands like that:

   ```bash
   docker-compose run <service> python manage.py makemigrations

   docker-compose run <service> python manage.py migrate

   docker-compose run <service> python manage.py shell

   docker-compose run <service> python manage.py createsuperuser

   docker-compose run <service> python manage.py startapp <app_name> .\backend\djangoapp\apps\<app_folder>
   ```

   #### Obs.: swap <service> for **backend** in case you haven't stablished a custom **container_name** for your backend container inside **docker-compose.yml**. 

2. Access docker folders for any reason:

   ```bash
   docker exec -it <container_name> sh
   ```

3. Clear unused objects without a confirmation prompt: 

   ```bash
   docker system prune --all --force
   ```

   #### Obs.: Add --volumes in case you want to get rid of unused volumes as well.
