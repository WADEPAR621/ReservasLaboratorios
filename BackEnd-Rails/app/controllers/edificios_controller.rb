class EdificiosController < ApplicationController
  before_action :set_edificio, only: %i[ show edit update destroy ]

  # GET /edificios or /edificios.json
  def index
    @edificios = Edificio.all
    render json: @edificios
  end

  # GET /edificios/1 or /edificios/1.json
  def show
    render json: @edificio
  end

  # GET /edificios/new
  def new
    @edificio = Edificio.new
  end

  # GET /edificios/1/edit
  def edit
  end

  # POST /edificios or /edificios.json
  def create
    @edificio = Edificio.new(edificio_params)

      if @edificio.save
        render json: @edificio, status: :created, location: @edificio
      else
        render json: @edificio.errors, status: :unprocessable_entity
      end
  end

  # PATCH/PUT /edificios/1 or /edificios/1.json
  def update
      if @edificio.update(edificio_params)
        render json:@edificio, status: :ok, location: @edificio
      else
        render json: @edificio.errors, status: :unprocessable_entity
      end
  end

  # DELETE /edificios/1 or /edificios/1.json
  def destroy
    @edificio.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_edificio
      @edificio = Edificio.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def edificio_params
      params.require(:edificio).permit(:descripcion)
    end
end
