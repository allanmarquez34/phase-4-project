class ItemSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :description, :price, :availability, :likes, :cart
  has_one :user
  has_one :estate_sale
end
