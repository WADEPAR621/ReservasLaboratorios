class HorariosController < ApplicationController
  before_action :set_horario, only: %i[ show edit update destroy ]

  # GET /horarios or /horarios.json
  def index
    @horarios = Horario.all
    render json: @horarios
  end

  # GET /horarios/1 or /horarios/1.json
  def show
    render json: @horario
  end

  # GET /horarios/new
  def new
    @horario = Horario.new
  end

  # GET /horarios/1/edit
  def edit
  end

  # POST /horarios or /horarios.json
  def create
    @horario = Horario.new(horario_params)

      if @horario.save
        render json :show, status: :created, location: @horario
      else
        render json: @horario.errors, status: :unprocessable_entity
      end
  end

  # PATCH/PUT /horarios/1 or /horarios/1.json
  def update
      if @horario.update(horario_params)
        render json :show, status: :ok, location: @horario
      else
        render json: @horario.errors, status: :unprocessable_entity
      end
  end

  # DELETE /horarios/1 or /horarios/1.json
  def destroy
    @horario.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_horario
      @horario = Horario.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def horario_params
      params.require(:horario).permit(:hora_id, :Lunes, :Martes, :Miercoles, :Jueves, :Viernes, :room_id)
    end
end
