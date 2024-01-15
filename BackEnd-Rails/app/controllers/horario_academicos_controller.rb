class HorarioAcademicosController < ApplicationController
  before_action :set_horario_academico, only: %i[ show edit update destroy ]

  # GET /horario_academicos or /horario_academicos.json
  def index
    @horario_academicos = HorarioAcademico.all
  end

  # GET /horario_academicos/1 or /horario_academicos/1.json
  def show
  end

  # GET /horario_academicos/new
  def new
    @horario_academico = HorarioAcademico.new
  end

  # GET /horario_academicos/1/edit
  def edit
  end

  # POST /horario_academicos or /horario_academicos.json
  def create
    @horario_academico = HorarioAcademico.new(horario_academico_params)

    respond_to do |format|
      if @horario_academico.save
        format.html { redirect_to horario_academico_url(@horario_academico), notice: "Horario academico was successfully created." }
        format.json { render :show, status: :created, location: @horario_academico }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @horario_academico.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /horario_academicos/1 or /horario_academicos/1.json
  def update
    respond_to do |format|
      if @horario_academico.update(horario_academico_params)
        format.html { redirect_to horario_academico_url(@horario_academico), notice: "Horario academico was successfully updated." }
        format.json { render :show, status: :ok, location: @horario_academico }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @horario_academico.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /horario_academicos/1 or /horario_academicos/1.json
  def destroy
    @horario_academico.destroy!

    respond_to do |format|
      format.html { redirect_to horario_academicos_url, notice: "Horario academico was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_horario_academico
      @horario_academico = HorarioAcademico.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def horario_academico_params
      params.require(:horario_academico).permit(:Room_id, :fecha_inicio, :fecha_fin)
    end
end
