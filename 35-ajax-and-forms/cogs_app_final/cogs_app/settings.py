import os

ALLOWED_HOSTS    = []
BASE_DIR         = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEBUG            = True
LANGUAGE_CODE    = 'en-us'
ROOT_URLCONF     = 'cogs_app.urls'
SECRET_KEY       = '-onzqm!djdz)npsy^qr#f)e!335nc*_&g!^=!uyvq20rq)2!ht'
STATIC_URL       = '/static/'
TIME_ZONE        = 'UTC'
USE_I18N         = True
USE_L10N         = True
USE_TZ           = True
WSGI_APPLICATION = 'cogs_app.wsgi.application'

INSTALLED_APPS = [
  'django.contrib.auth',
  'django.contrib.contenttypes',
  'django.contrib.sessions',
  'django.contrib.messages',
  'django.contrib.staticfiles',
  'cogs',
  'cogs_html_api',
  'cogs_json_api',
]

MIDDLEWARE = [
  'django.middleware.security.SecurityMiddleware',
  'django.contrib.sessions.middleware.SessionMiddleware',
  'django.middleware.common.CommonMiddleware',
  'django.middleware.csrf.CsrfViewMiddleware',
  'django.contrib.auth.middleware.AuthenticationMiddleware',
  'django.contrib.messages.middleware.MessageMiddleware',
  'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

TEMPLATES = [
  {
    'BACKEND': 'django.template.backends.django.DjangoTemplates',
    'DIRS': [
      'cogs_app/templates',
      'cogs/templates',
      'cogs_html_api/templates',
      'cogs_json_api/templates',
    ],
    'APP_DIRS': True,
    'OPTIONS': {
      'context_processors': [
        'django.template.context_processors.debug',
        'django.template.context_processors.request',
        'django.contrib.auth.context_processors.auth',
        'django.contrib.messages.context_processors.messages',
      ],
    },
  },
]

DATABASES = {
  'default': {
    'ENGINE': 'django.db.backends.sqlite3',
    'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
  }
}
