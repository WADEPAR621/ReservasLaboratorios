class HorasController < ApplicationController
  before_action :set_hora, only: %i[ show edit update destroy ]

  # GET /horas or /horas.json
  def index
    @horas = Hora.all
  end

  # GET /horas/1 or /horas/1.json
  def show
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

    respond_to do |format|
      if @hora.save
        format.html { redirect_to hora_url(@hora), notice: "Hora was successfully created." }
        format.json { render :show, status: :created, location: @hora }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @hora.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /horas/1 or /horas/1.json
  def update
    respond_to do |format|
      if @hora.update(hora_params)
        format.html { redirect_to hora_url(@hora), notice: "Hora was successfully updated." }
        format.json { render :show, status: :ok, location: @hora }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @hora.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /horas/1 or /horas/1.json
  def destroy
    @hora.destroy!

    respond_to do |format|
      format.html { redirect_to horas_url, notice: "Hora was successfully destroyed." }
      format.json { head :no_content }
    end
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
