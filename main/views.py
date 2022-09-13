
from datetime import date
from unicodedata import category, name
from webbrowser import get
from django.shortcuts import render
from .models import Product
from .forms import loginForm
from datetime import date


# Create your views here.
def home(request):
    
    todayDate = date.today()

    getObjects = {'products':Product.objects.order_by('-id')[:4]}

    return render(request, 'MainParts/Home.html', getObjects)


def market(request):

    getObjects = {'Isekai':Product.objects.all().filter(category = 'Isekai collection'),
     'DigiDaigaku':Product.objects.all().filter(category = 'DigiDaigaku Genesis'),
     'Otherdeed':Product.objects.all().filter(category = 'Otherdeed'),
     'Invisible':Product.objects.all().filter(category = 'Invisible Friends'),
     'products':Product.objects.all().filter(category = 'Otherdeed')}

    return render(request, 'MainParts/Market.html', getObjects)
    



def wallet(request):

    if request.method == 'POST':
        data = loginForm(request.POST)
        if data.is_valid():
            data.save()


    return render(request, 'MainParts/Wallet.html', {'loginform':loginForm})