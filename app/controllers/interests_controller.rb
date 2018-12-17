class InterestsController < ApplicationController
  def index
    @interests = Interest.all
    render json: @interests
  end

  def show
    @interests = User.find(params[:id]).interests
    render json: @interests
  end

  def new
    @interest = Interest.new
  end

  def create
    @interest = Interest.new(interest_params)
    if @interest.save
      render json: @interest
    else
      render json: @interest.errors.full_messages.join(" . ")
    end
  end

  def destroy
		Interest.destroy(params[:id])
	end

  def update
    interest = Interest.find(params["_json"][0][:id])
    interest.completed = !interest.completed
  end


  private

  def authorize_delete?
		current_user == Interest.find(params[:id]).user || current_user.admin?
	end

  def interest_params
    params.require(:interest).permit(:name, :description, :location, :date, :movie, :book).merge(user_id: current_user.id)
  end
end
