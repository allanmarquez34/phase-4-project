class UsersController < ApplicationController
    # skip_before_action :authorize, only: :create

    def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
    end

    def show 
        render json: @current_user
    end

    def update
        user = find_user.update!(user_params)
        render json: user, status: :created
    end 


    private 
    # def find_user
    #     User.find(param[:id])
    # end
    def user_params 
        params.permit(:name, :image, :address, :email, :password)
    end 
end
