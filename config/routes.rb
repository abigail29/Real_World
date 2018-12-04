Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  resources :interests
  resources :users

  namespace :api do
    namespace :v1 do
      resources :interests
      resources :users

      resources :users do
          get 'current_user', on: :collection
      end
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
