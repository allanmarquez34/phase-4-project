class EstateSale < ApplicationRecord
    has_many :items 
    has_many :users, through: :items
end
