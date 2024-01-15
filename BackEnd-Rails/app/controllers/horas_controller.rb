class HorasController < ApplicationController
  before_action :set_hora, only: %i[ show edit update destroy ]

  # GET /horas or /horas.json
  def index
    @horas = Hora.all
    render json: @horas
  end

  # GET /horas/1 or /horas/1.json
  def show
    render json: @hora
  end

  # GET /horas/new
  def new
    @hora = Hora.new
  end

  # GET /horas/1/edit
  def edit
  end

  # POST /horas or /horas.json
  def create
    @hora = Hora.new(hora_params)
      if @hora.save
        render json:show, status: :created, location: @hora
      else
        render json: @hora.errors, status: :unprocessable_entity
      end
  end

  # PATCH/PUT /horas/1 or /horas/1.json
  def update
      if @hora.update(hora_params)
        render json :show, status: :ok, location: @hora
      else
        render json: @hora.errors, status: :unprocessable_entity
      end
  end

  # DELETE /horas/1 or /horas/1.json
  def destroy
    @hora.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_hora
      @hora = Hora.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def hora_params
      params.require(:hora).permit(:intervalo)
    end
end
