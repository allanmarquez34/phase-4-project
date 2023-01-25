class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
    end

    def show 
        render json: current_user
    end

    def update
        user = logged_on_user.find(params[:id])
        user.update!(user_params)
        render json: user, status: :accepted
    end 

    def destroy
        user = logged_on_user.find(params[:id])
        user.destroy
        head :no_content 
    end

    def index 
        users = User.all 
        render json: users, status: :ok
    end

    private 

    def user_params 
        params.permit(:name, :image, :address, :email, :password)
    end 

    def logged_on_user
        User.where(:id => current_user.id)
    end

end
