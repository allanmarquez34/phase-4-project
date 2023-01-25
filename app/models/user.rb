class User < ApplicationRecord
    has_secure_password
    
    has_many :items 
    has_many :estate_sales, through: :items 
    
    validates_presence_of :name, :image, :email, :password, :address  

    validates :email, uniqueness: true
    validates :password, length: { in: 6..20 }

end