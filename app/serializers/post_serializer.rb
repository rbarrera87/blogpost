class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body
  embed :ids, include: true
  has_many :comments
end
