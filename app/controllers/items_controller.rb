class ItemsController < ApplicationController
    wrap_parameters format: []

    def index
        items = Item.all
        render json: items, status: :ok
    end

    def show
        item = Item.find(params[:id])
        render json: item, serializer: ItemSerializer
    end

    def update 
        item = Item.find(params[:id])
        item.update!(item_params)
        render json: item, status: :accepted 
    end

    def liked
        liked_items = Item.where(likes: true)
        render json: liked_items, status: :ok
    end

    def cart 
        cart_items = Item.where(cart: true)
        render json: cart_items, status: :ok 
    end

    private

    def item_params
        params.permit(:likes, :cart)
    end

end
