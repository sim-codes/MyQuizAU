from django.urls import reverse_lazy
from django.views import generic
from django.contrib.auth import get_user_model

from .forms import CustomUserCreationForm, CustomLoginForm


from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib import messages


def user_login(request):
    if request.method == 'POST':
        form = CustomLoginForm(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            user = authenticate(request, 
                username=cd['username'],
                password=cd['password']
            )
            if user is not None:
                if user.is_active:
                    login(request, user)
                    messages.success(request, 'Login successfull')
                    return redirect('home')
                    # return HttpResponse('Authenticated successfully')
                else:
                    messages.error(request, 'Disabled account')
                    return redirect('login')
            else:
                messages.error(request, 'Invalid login')
                return redirect('login')
    else:
        form = CustomLoginForm()
    return render(request, 'account/login.html', {'form': form})


def create_user(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password1']
            email = form.cleaned_data['email']
            user = get_user_model().objects.create_user(username, email, password)
            return redirect('login')

    else:
        form = CustomLoginForm()

    return render(request, 'account/signup.html', {
        'form': form,
    })

class SignupPageView(generic.CreateView):
    form_class = CustomUserCreationForm
    success_url = reverse_lazy('login')
    template_name = 'signup.html'
