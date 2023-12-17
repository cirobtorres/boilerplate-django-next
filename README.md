# DJANGO - NEXT.JS BOILERPLATE

## Getting Started

1. Clone this repository:

   ```bash
   git clone git@github.com:cirobtorres/django-nextjs-boilerplate.git

   # or

   git clone git@github.com:cirobtorres/django-nextjs-boilerplate.git <repository_name>
   ```

2. Make sure to rename **.env.example** to **.env** and config your keys. Path to **dotenv**: backend\dotenv\

3. Navigate to docker-compose directory and do as follows:

   ```bash
   docker-compose up --build

   # or:

   docker-compose up -d --build # flag --detach
   ```

   #### Obs.: To stop containers, **ctrl + c** on terminal or, in case you have detached:

   ```bash
   docker-compose down
   ```

## Dockerizing:

### While docker containers are up and running, you may:

1. Make use of some django commands like that:

   ```bash
   docker-compose run <service> python manage.py makemigrations

   docker-compose run <service> python manage.py migrate

   docker-compose run <service> python manage.py shell

   docker-compose run <service> python manage.py createsuperuser

   docker-compose run <service> python manage.py startapp <app_name> .\backend\djangoapp\apps\<app_folder>
   ```

   #### Obs.: swap **<service>** for **backend** in case you haven't stablished a custom **container_name** for your backend container inside **docker-compose.yml**.

2. Access docker folders for any reason:

   ```bash
   docker exec -it <container_name> sh
   ```

   Obs.: if you don't know your container's name, type:

   ```bash
   docker-compose ps

   # or

   docker container ls # lists all running containers

   docker container ls -a # lists all containers you have
   ```

3. Clear unused objects without a confirmation prompt:

   ```bash
   docker system prune --all --force
   ```

   #### Obs.: Add --volumes in case you want to get rid of unused volumes as well.

   ```bash
   # Another trick:

   docker container rm $(docker container ls -aq)

   docker image rm $(docker image ls -aq)
   ```

## Installed Packages:

### Backend:

1. [Python Dotenv](https://github.com/theskumar/python-dotenv)
2. [Pillow](https://pillow.readthedocs.io/en/stable/installation.html)
3. [Faker](https://faker.readthedocs.io/en/master/index.html)
4. [Pytest](https://pytest-django.readthedocs.io/en/latest/)
5. [Coverage](https://coverage.readthedocs.io/en/6.5.0/)
6. [Selenium](https://selenium-python.readthedocs.io/installation.html#introduction)
7. [Django](https://www.djangoproject.com/download/)
8. [Django Cors Headers](https://pypi.org/project/django-cors-headers/)
9. [Django Rest Framework](https://www.django-rest-framework.org/#installation)
10. [Django Rest Framework Simple JWT](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/)
11. [Psycopg2 Binary](https://www.psycopg.org/docs/install.html#quick-install)

### Frontend:

1. [NextJS](https://nextjs.org/docs/getting-started/installation#automatic-installation)
2. [Tailwindcss](https://tailwindcss.com/docs/installation)

   [Tailwindcss Class Sorting](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)

   [Tailwind Scrollbar](https://adoxography.github.io/tailwind-scrollbar/getting-started)

   [Daisy UI](https://daisyui.com/docs/install/)

   [Flowbite](https://flowbite.com/docs/getting-started/next-js/#install-flowbite-react)

3. [Typescript](https://www.typescriptlang.org/download)
4. [Eslint](https://eslint.org/docs/latest/use/command-line-interface#miscellaneous)
5. [Prettier](https://prettier.io/docs/en/install)
6. [Husky](https://typicode.github.io/husky/getting-started.html)
7. [Framer Motion](https://www.framer.com/motion/introduction/##installation)
8. [React Icons](https://react-icons.github.io/react-icons/)

## Husky

### Usually husky is not shared accross github and I've decided not to configure it at a docker container. If you wish to install husky (optional), do carefully as follows:

```bash
npx husky-init
```

- **`npx husky-init`** must iniciate husky.sh inside **.git** rather than **frontend**.
- Do not run that command inside frontend. Navigate to root folder (same as .git should be in this repository) and run that command.
- Ensure **husky-init** has set **husky.sh** to the right folder before following next steps.

Folder structure:

```
.git
   ...
   hooks
      _
         husky.sh
   pre-commit (custom hooks are located here)
   ...
```

- **`Husky`** assumes **.git** folder to be located at same directory as **package.json**.
- It is needed we install husky. If you install husky with **`npm i`**, like that, you'll probably get an error on this folder setup.
- To get around this, configure a new **script** at **package.json** like so: **`"prepare": "cd .. && husky install .git/hooks"`**.
- Then, run:

```bash
npm run prepare
```

- Your custom hooks must start somewhat like this:

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

cd frontend

(...)
```

- Remember: custom hooks are supposed to be set inside **.git\hooks** and husky.sh inside **.git\hooks\\\_\husky.sh**. Thats where they belong.
