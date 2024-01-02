Rails.application.routes.draw do
<<<<<<< HEAD
  resources :books, only: [:index,:show,:destroy]
  resources :rooms, only: [:index,:show,:destroy, :new] do
    collection do
      get 'rooms/by_floor/:floor_id', to: 'rooms#by_floor', as: 'rooms_by_floor'
    end
  end
  resources :floors, only: [:index,:show,:destroy]
  resources :students, only: [:index,:show,:destroy]
  resources :tecnicos, only: [:index,:show,:destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
=======
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check
  
  

  resources :students, only: [:index, :show, :destroy, :create] 
  resources :books, only: [:index, :show, :destroy, :create] do
    collection do
      get 'by_user/:student_id', to: 'books#by_user', as: 'by_user'
    end
  end
  resources :floors, only: [:index, :show, :destroy]
  resources :tecnicos, only: [:index, :show, :destroy, :create]
  
  resources :rooms, only: [:index, :show, :destroy, :create] do
    collection do
      get 'by_disponible', to: 'rooms#by_disponible'
      get 'by_floor/:floor_id', to: 'rooms#by_floor', as: 'by_floor'
    end
  end
  # Defines the root path route ("/")
  # root "posts#index"
>>>>>>> 1cdc86cbf24890ed9479e0d38229b2d89531aec4
end
