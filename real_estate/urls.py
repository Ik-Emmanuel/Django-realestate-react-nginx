from django.contrib import admin
from django.urls import path, include
from django.conf  import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/v1/auth/", include("djoser.urls")),  #http://localhost:8000/api/v1/auth/users/
    path("api/v1/auth/", include("djoser.urls.jwt")), #login users at http://localhost:8000/api/v1/auth/jwt/create/
    path("api/v1/profile/", include("apps.profiles.urls")),
    path("api/v1/properties/", include("apps.properties.urls")),
    path("api/v1/ratings/", include("apps.ratings.urls")),
    path("api/v1/enquiries/", include("apps.enquiries.urls")),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)



admin.site.site_header = "Nuspace Real Estate Admin"
admin.site.site_title = "Real Estate Admin Portal"
admin.site.index_title = "Welcome to Nuspace real estate admin portal"


