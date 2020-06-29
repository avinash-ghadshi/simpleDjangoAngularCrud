from django.urls import include, path
from django.contrib import admin
from rest_framework import routers
from quickstart import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


router = routers.DefaultRouter()
router.register(r'movies', views.MovieViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('admin/', admin.site.urls),
    path('token/obtain/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/', include(router.urls)),
    #path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
