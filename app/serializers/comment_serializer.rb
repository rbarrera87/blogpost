class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body
  def attributes
    data = super
    data[:post] = object[:post_id]
    data
  end
end
