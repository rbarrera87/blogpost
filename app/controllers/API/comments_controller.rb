module API
  class CommentsController < ApplicationController
    def index
      render json: Comment.all, status: :ok
    end

    def create
      comment = Comment.new comment_params
      if comment.save
        render json: comment, status: 201
      else
        render json: comment.errors, status: 422
      end
    end

    private
    def comment_params
      params.require(:comment).permit(:body)
    end
  end
end