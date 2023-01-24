Rails.application.routes.draw do
  resources :items
  resources :estate_sales
  resources :users
  get '/hello', to: 'application#hello_world'
end
