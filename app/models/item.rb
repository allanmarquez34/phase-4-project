class Item < ApplicationRecord
  belongs_to :user
  belongs_to :estate_sale
end
