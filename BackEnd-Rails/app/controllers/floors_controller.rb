class FloorsController < ApplicationController
  before_action :set_floor, only: %i[ show edit update destroy ]

  # GET /floors or /floors.json
  def index
    @floors = Floor.all
    render json: @floors
  end

  # GET /floors/1 or /floors/1.json
  def show
    render json: @floor
  end

  # GET /floors/new
  def new
    @floor = Floor.new
  end

  # GET /floors/1/edit
  def edit
  end

  # POST /floors or /floors.json
  def create
    @floor = Floor.new(floor_params)

    if @floor.save
      render json: @floor, status: :created, location: @floor
    else
      render json: @floor.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /floors/1 or /floors/1.json
  def update
    if @floor.update(floor_params)
      render json: @floor
    else
      render json: @floor.errors, status: :unprocessable_entity
    end
  end

  # DELETE /floors/1 or /floors/1.json
  def destroy
    @floor.destroy!
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_floor
      @floor = Floor.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def floor_params
      params.require(:floor).permit(:NOM_PIS, :DES_PIS, :IMG_PIS)
    end
end
