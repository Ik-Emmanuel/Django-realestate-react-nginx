from .base import *
MY_ENV = "local"


# EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
EMAIL_BACKEND = "djcelery_email.backends.CeleryEmailBackend"  if MY_ENV == "docker" else "django.core.mail.backends.smtp.EmailBackend"


EMAIL_HOST = env("EMAIL_HOST") 
EMAIL_USE_TLS = True
EMAIL_PORT = env("EMAIL_PORT")
EMAIL_HOST_USER = env("EMAIL_HOST_USER")
EMAIL_HOST_PASSWORD = env("EMAIL_HOST_PASSWORD")
DEFAULT_FROM_EMAIL = "info@nuspace-realestate.com"
DOMAIN = env("DOMAIN") if MY_ENV == "docker" else env("DOMAIN_LOCAL")
SITE_NAME = "NewSpace Real Estate"



DATABASES = {
    "default": {
        "ENGINE": env("POSTGRES_ENGINE"),
        "NAME": env("POSTGRES_DB"),
        "USER": env("POSTGRES_USER"),
        "PASSWORD": env("POSTGRES_PASSWORD"),
        "HOST": env("POSTGRES_HOST") if MY_ENV == "docker" else env("POSTGRES_HOST_LOCAL"),
        "PORT": env("POSTGRES_PORT"),
    }
}



CELERY_BROKER_URL = env("CELERY_BROKER")
CELERY_RESULT_BACKEND = env("CELERY_BACKEND")
CELERY_TIMEZONE = "Africa/Lagos"
