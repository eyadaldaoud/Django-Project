from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('market/', views.market, name='market'),
    path('wallet/', views.wallet, name='wallet'),
]
