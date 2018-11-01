class ZonesController < ApplicationController
  before_action :set_zone, only: [:show, :update, :destroy]

  def index
    zones = Zone.all
    render json: zones
  end

  def show
    render json: zone
  end

  def create
    zone = Zone.new(zone_params)

    if zone.save
      render json: zone
    else
      render json: zone.errors
    end
  end

  def update
    if zone.update(zone_params)
      render json: zone
    else
      render json: zone.errors
    end
  end

  def destroy
    zone.destroy
  end

  private
    def set_zone
      zone = Zone.find(params[:id])
    end

    def zone_params
      params.permit(:country, :state, :zip_code)
    end
end
