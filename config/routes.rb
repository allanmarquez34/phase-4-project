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

  get "/item", to: "items#index"

end
