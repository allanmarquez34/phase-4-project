class EstateSalesController < ApplicationController

    def index 
        estate_sales = EstateSale.all
        render json: estate_sales, status: :ok 
    end

    def show 
        estate_sale = EstateSale.find(params[:id])
        render json: estate_sale, status: :ok 
    end
    
end
