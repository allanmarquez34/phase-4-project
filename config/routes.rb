Rails.application.routes.draw do
  resources :items, only:[:index, :show, :update]
  resources :estate_sales, only: [:index, :show]
  resources :users

  get "/home", to: "items#liked"
  get "/cart", to: "items#cart"
  
  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  patch "/me", to: "users#update"
<<<<<<< HEAD
=======

  get "/item", to: "items#index"

>>>>>>> 69596e18e2d9b3e912e3cb5613f41ad2834b9d63
end
