from django.urls import path
from . import views

urlpatterns = [
    path('', views.post_list, name='post_list'),
    ## post/ means URL should begin with the word post followed by a /.
    ## <int:pk> means Django expects an integer value and will transfer it to a view a s a variable called pk
    ## / to finish the URL
    path('post/<int:pk>/', views.post_detail, name='post_detail'),
]