class UserEmergenciesController < ApplicationController
  before_action :set_user_emergency, only: [:show, :update, :destroy]

  # GET /user_emergencies
  def index
    @user_emergencies = UserEmergency.all

    render json: @user_emergencies
  end

  # GET /user_emergencies/1
  def show
    render json: @user_emergency
  end

  # POST /user_emergencies
  def create
    @user_emergency = UserEmergency.new(user_emergency_params)

    if @user_emergency.save
      render json: @user_emergency, status: :created, location: @user_emergency
    else
      render json: @user_emergency.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /user_emergencies/1
  def update
    if @user_emergency.update(user_emergency_params)
      render json: @user_emergency
    else
      render json: @user_emergency.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user_emergencies/1
  def destroy
    @user_emergency.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_emergency
      @user_emergency = UserEmergency.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_emergency_params
      params.fetch(:user_emergency, {})
    end
end
