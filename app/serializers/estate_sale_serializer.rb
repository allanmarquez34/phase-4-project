class EstateSaleSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :item_sold, :item_count
end
