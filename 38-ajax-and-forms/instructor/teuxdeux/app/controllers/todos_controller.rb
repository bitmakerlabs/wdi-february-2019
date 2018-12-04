class TodosController < ApplicationController
  def index
    @todos = Todo.all
    @todo = Todo.new
  end

  def new
    @todo = Todo.new
  end

  def create
    @todo = Todo.new

    @todo.content = params[:todo][:content]

    if @todo.save
      redirect_to root_url
    end
  end
end
