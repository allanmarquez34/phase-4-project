class User < ApplicationRecord
    has_many :items 
    has_many :estate_sales, through: :items 

    validates :name, presence: true, uniqueness: true
    validates :image, presence: true 
    validates :email, presence: true, uniqueness: true, email: true
    validates :password, presence: true, length: {in: 6..20}
    validates :address, presence: true, uniqueness: true 
end
