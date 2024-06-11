
# Description

Don't want to describe the project just yet, for safety and development reasons.

## objective

Teachers playground project 

## Technologies
    - Backend   - python (version used: 3.11.0)
                - django
    - Frontend  - ?

# Project File Structure and Functionality

This section provides an overview of the key files and directories within our Python Django project, explaining their purposes and functions. It serves as a useful reference for developers working on the project to understand how different components are structured and organized.


## Project Directory Structure

```plaintext
{project_name}/
│
├── manage.py
├── {project_name}/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│
├── app_name/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── views.py
|   │   ├──  mananged  
│   ├── urls.py
│   ├── templates/
│   ├── migrations/
│
├── static/
│   ├── css/
│   ├── js/
│   ├── images/
│
├── templates/
│
├── media/
```

Project Files
-------------

### `manage.py`

*   Purpose: The Django management script.
*   Function: Provides commands for managing various aspects of the project, including running the development server, creating database tables, and more.

### `{project_name}/`

#### `__init__.py`

*   Purpose: Marks the directory as a Python package.
*   Function: Allows Python to treat this directory as a package.

#### `settings.py`

*   Purpose: Configuration settings for the project.
*   Function: Contains various settings like database configuration, application configuration, middleware, and more.

#### `urls.py`

*   Purpose: URL routing configuration for the project.
*   Function: Maps URL patterns to views, allowing Django to handle HTTP requests.

#### `wsgi.py`

*   Purpose: WSGI (Web Server Gateway Interface) entry point.
*   Function: Provides an entry point for web servers to communicate with the Django application.

### `app_name/`

#### `__init__.py`

*   Purpose: Marks the app directory as a Python package.
*   Function: Allows Python to treat this directory as a package.

#### `admin.py`

*   Purpose: Configuration for the Django admin interface.
*   Function: Defines how the app's models are displayed and managed in the admin interface.

#### `apps.py`

*   Purpose: App configuration.
*   Function: Contains settings related to the app, such as the app's name and label.

#### `models.py`

*   Purpose: Define database models.
*   Function: Contains the data models for the app, specifying the structure of the database tables.

#### `views.py`

*   Purpose: Define views and their logic.
*   Function: Contains functions that handle HTTP requests, perform actions, and render templates.

#### `urls.py`

*   Purpose: URL routing configuration for the app.
*   Function: Maps URL patterns to views specific to the app.

#### `templates/`

*   Purpose: Directory for HTML templates.
*   Function: Contains templates used by the app's views for rendering web pages.

#### `migrations/`

*   Purpose: Directory for database schema migrations.
*   Function: Stores migration files that manage changes to the database schema over time.

### `static/`

*   Purpose: Directory for static files (CSS, JavaScript, images, etc.).
*   Function: Stores static files used in the project, which can be served directly by the web server.

### `templates/`

*   Purpose: Directory for project-wide HTML templates.
*   Function: Contains templates that can be reused across multiple apps or views in the project.

### `media/`

*   Purpose: Directory for user-uploaded media files.
*   Function: Stores user-generated files, such as images and documents.



# Installation

## create virtual environment  
- on vs code (recommended):
    - (ctrl+shift+p)
    - search 'environment'
    - create venv (should activate automatically)

- on cli/cmd line: 
    - python -m venv venv
    - source venv/bin/activate

- create environment on different directory 
    - **Redirect to correct document**


## Install django


#### step 1
- ``` pip install django ```



- If you went for different directory environment method or just want Django beginner guides watch the following ---  [1 hour]: https://www.youtube.com/watch?v=rHux0gMZ3Eg

#### step 2
- ```django-admin startproject evaluator_project .```


#### step 3
- ```python manage.py runserver```
- ```python manage.py runserver {port}```


## install poppler on system
- windows
    - https://github.com/oschwartz10612/poppler-windows/releases/
    - https://stackoverflow.com/questions/18381713/how-to-install-poppler-on-windows

- Linux
    - **coming soon**


