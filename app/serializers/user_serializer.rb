class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :email, :password_digest, :address
end
