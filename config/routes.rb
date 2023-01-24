Rails.application.routes.draw do
  # resources :items, only:[:index, :show, :update]
  # resources :estate_sales, only: [:index, :show]
  resources :users, only:[:show, :update, :create]
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # update "/updateuser", to: "users#update"
end
