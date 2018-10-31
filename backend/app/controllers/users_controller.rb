class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  skip_before_action :authorized, only: [:create]

  def profile
    render json: current_user, status: accepted
  end

  # GET /users
  def index
    users = User.all
    render json: users
  end

  # GET /users/1
  def show
    render json: user
  end

  # POST /users
  def create
    user = User.create(user_params)
    render json: {
      user: user,
      token: encode_token({ user_id: user.id })
    }
  end

  # PATCH/PUT /users/1
  def update
    if user.update(user_params)
      render json: user
    else
      render json: user.errors
    end
  end

  # DELETE /users/1
  def destroy
    user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      
      user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.fetch(:user, {})
    end
end
