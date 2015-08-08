Rails.application.routes.draw do

  namespace :api do
    resources :posts, only: [:index, :create, :destroy, :update, :show]
    resources :comments, only: [:index, :create, :destroy, :update, :show]
  end
  root 'ember#bootstrap'
  get '/*path' => 'ember#bootstrap'
end
