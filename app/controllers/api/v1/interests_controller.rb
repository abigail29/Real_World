class Api::V1::InterestsController < ApplicationController

  protect_from_forgery unless: -> {request.format.json?}

  def show
    @interests = User.find(params[:id]).interests
    render json: @interests
  end

  def index
    @interests = Interest.all
    render json: @interests
  end

  def new
    @interest = Interest.new
  end

  def update
  end

  def destroy
  end
  
  def create
    @interest = Interest.new(interest_params)

    if @interest.save
      render json: @interest
    else
      render json: @interest.errors.full_messages.join(" . ")
    end
  end

  def interest_params
    params.require(:interest).permit(:name, :description, :location, :date, :movie, :book).merge(user_id: current_user.id)
  end

end
