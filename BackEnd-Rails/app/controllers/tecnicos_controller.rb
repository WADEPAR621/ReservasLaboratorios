class TecnicosController < ApplicationController
  before_action :set_tecnico, only: %i[ show update destroy ]

  # GET /tecnicos
  def index
    @tecnicos = Tecnico.all

    render json: @tecnicos
  end

  # GET /tecnicos/1
  def show
    render json: @tecnico
  end

  # POST /tecnicos
  def create
    @tecnico = Tecnico.new(tecnico_params)

    if @tecnico.save
      render json: @tecnico, status: :created, location: @tecnico
    else
      render json: @tecnico.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tecnicos/1
  def update
    if @tecnico.update(tecnico_params)
      render json: @tecnico
    else
      render json: @tecnico.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tecnicos/1
  def destroy
    @tecnico.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tecnico
      @tecnico = Tecnico.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def tecnico_params
      params.require(:tecnico).permit(:NOM_TEC, :APE_TEC,:NOM_USER_TEC, :FEC_NAC_TEC, :FEC_ING_TEC, :CON_TEC)
    end
end