
# Controls

Don't want to describe the project just yet, for safety and development reasons.

## Python:

Start server
```
    python manage.py runserver
```

stops server
```
    -Ctrl C 
```

Start new django application
```
    python manage.py startapp "name"
```

## Database:


migrate [DATABASE START]:
```
    * python manage.py makemigrations "app name" [STEP 1]
    * python manage.py migrate [STEP 2]
        
    * python manage.py sqlmigrate "app name" "id nr"
    * python manage.py migrate "__app name__" 
    
```

For further details: https://www.youtube.com/watch?v=dONYOtb2ySIhttps://www.youtube.com/watch?v=dONYOtb2ySI
    


WRITE SQL COMMANDS & MORE    
```
    python manage.py shell 
```


create superuser for database access, create username and password
example below:
```
python manage.py createsuperuser
    admin (user)
    admin1234 (password)
```

## Clear Static files:

```
    python manage.py collectstatic --noinput --clear
```
#### on chrome browsers
    chrome: Ctrl + Shift + Del


