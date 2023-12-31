Rails.application.routes.draw do
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
end
