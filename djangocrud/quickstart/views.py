from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializers import MovieSerializer, MovieMiniSerializer
from .models import Movie


class MovieViewSet(viewsets.ModelViewSet):

    allowed_methods = ('GET', 'POST')
    permission_classes = (IsAuthenticated,)
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

    def list(self, request, *args, **kwargs):
        
        movies = Movie.objects.all()
        serializer = MovieMiniSerializer(movies, many=True)
        return Response(serializer.data);
