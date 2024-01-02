Rails.application.routes.draw do
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check
  
  

  resources :students, only: [:index, :show, :destroy, :create] 
  resources :books, only: [:index, :show, :destroy, :create, :update] do
    collection do
      get 'by_user/:student_id', to: 'books#by_user', as: 'by_user'
      get 'by_technician/:tecnico_id', to: 'books#by_technician', as: 'by_technician'
      put 'update_est_res_to_true/:id', to: 'books#update_est_res_to_true'
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
end
