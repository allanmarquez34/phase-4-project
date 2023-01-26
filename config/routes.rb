Rails.application.routes.draw do
  resources :items, only:[:index, :show, :update]
  resources :estate_sales, only: [:index, :show]
  resources :users, only: [:update]

  get "/home", to: "items#liked"
  get "/cart", to: "items#cart"
  
  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
