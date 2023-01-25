class EstateSaleItemsSerializer < ActiveModel::Serializer
    attributes :id, :name, :description, :created_at, :items 
    has_many :items 
end