Rails.application.routes.draw do
  resources :students, only:[:index,:show,:create,:update,:destroy]
  resources :tutors, only:[:index,:show,:create,:update,:destroy]
  resources :courses, only:[:index,:create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
