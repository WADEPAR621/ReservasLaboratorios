class DiaSemanasController < ApplicationController
  before_action :set_dia_semana, only: %i[ show edit update destroy ]

  # GET /dia_semanas or /dia_semanas.json
  def index
    @dia_semanas = DiaSemana.all
  end

  # GET /dia_semanas/1 or /dia_semanas/1.json
  def show
  end

  # GET /dia_semanas/new
  def new
    @dia_semana = DiaSemana.new
  end

  # GET /dia_semanas/1/edit
  def edit
  end

  # POST /dia_semanas or /dia_semanas.json
  def create
    @dia_semana = DiaSemana.new(dia_semana_params)

    respond_to do |format|
      if @dia_semana.save
        format.html { redirect_to dia_semana_url(@dia_semana), notice: "Dia semana was successfully created." }
        format.json { render :show, status: :created, location: @dia_semana }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @dia_semana.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /dia_semanas/1 or /dia_semanas/1.json
  def update
    respond_to do |format|
      if @dia_semana.update(dia_semana_params)
        format.html { redirect_to dia_semana_url(@dia_semana), notice: "Dia semana was successfully updated." }
        format.json { render :show, status: :ok, location: @dia_semana }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @dia_semana.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /dia_semanas/1 or /dia_semanas/1.json
  def destroy
    @dia_semana.destroy!

    respond_to do |format|
      format.html { redirect_to dia_semanas_url, notice: "Dia semana was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_dia_semana
      @dia_semana = DiaSemana.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def dia_semana_params
      params.require(:dia_semana).permit(:nombre)
    end
end
