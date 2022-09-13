from enum import auto
from operator import mod
from django.db import models


# Create your models here.



class Product(models.Model):

    list = [
        ('Isekai collection','Isekai collection'),
        ('DigiDaigaku Genesis','DigiDaigaku Genesis'),
        ('Otherdeed','Otherdeed'),
        ('Invisible Friends','Invisible Friends',)]

    name = models.CharField(max_length=20)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    content = models.TextField(max_length=300,null=True, blank=True)
    image = models.ImageField(upload_to='media/%y/%m/%d')
    category = models.CharField(max_length=25, choices=list, default='Choose a category')
    date = models.DateField("Date", auto_now=True)


    def __str__(self):
        return self.name

    class Meta:
        
        ordering = ['date']


class login(models.Model):

    username = models.CharField(max_length=20)
    password = models.CharField(max_length=25)