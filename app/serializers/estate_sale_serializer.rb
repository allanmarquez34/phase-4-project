class EstateSaleSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :created_at, :items 
end
