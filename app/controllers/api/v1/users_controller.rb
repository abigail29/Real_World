class Api::V1::UsersController < ApplicationController

  protect_from_forgery unless: -> {request.format.json?}

  def index
    @users = User.all
    render json: @users
  end

  def new
  end

  def show
  end 

  def current_user
    render json: current_user
  end

end
