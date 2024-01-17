class IntervaloHorariosController < ApplicationController
  before_action :set_intervalo_horario, only: %i[ show edit update destroy ]

  # GET /intervalo_horarios or /intervalo_horarios.json
  def index
    @intervalo_horarios = IntervaloHorario.all
    render json @intervalo_horarios
  end

  # GET /intervalo_horarios/1 or /intervalo_horarios/1.json
  def show
    render json @intervalo_horario
  end

  # GET /intervalo_horarios/new
  def new
    @intervalo_horario = IntervaloHorario.new
  end

  # GET /intervalo_horarios/1/edit
  def edit
  end

  # POST /intervalo_horarios or /intervalo_horarios.json
  def create
    @intervalo_horario = IntervaloHorario.new(intervalo_horario_params)

    respond_to do |format|
      if @intervalo_horario.save
        format.html { redirect_to intervalo_horario_url(@intervalo_horario), notice: "Intervalo horario was successfully created." }
        format.json { render :show, status: :created, location: @intervalo_horario }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @intervalo_horario.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /intervalo_horarios/1 or /intervalo_horarios/1.json
  def update
    respond_to do |format|
      if @intervalo_horario.update(intervalo_horario_params)
        format.html { redirect_to intervalo_horario_url(@intervalo_horario), notice: "Intervalo horario was successfully updated." }
        format.json { render :show, status: :ok, location: @intervalo_horario }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @intervalo_horario.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /intervalo_horarios/1 or /intervalo_horarios/1.json
  def destroy
    @intervalo_horario.destroy!

    respond_to do |format|
      format.html { redirect_to intervalo_horarios_url, notice: "Intervalo horario was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_intervalo_horario
      @intervalo_horario = IntervaloHorario.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def intervalo_horario_params
      params.require(:intervalo_horario).permit(:horario_academico_id, :dia_semana_id, :hora_inicio, :hora_fin, :descripcion)
    end
end
