class RoomsController < ApplicationController
  before_action :set_room, only: %i[ show edit update destroy ]

  # GET /rooms or /rooms.json
  def index
    @rooms = Room.all
    render json: @rooms
  end

  # GET /rooms/1 or /rooms/1.json
  def show
    render json: @room
  end

  # get /rooms/by_floor/1
  def by_floor
    @rooms = Room.where(Floor_id: params[:floor_id])
    render json: @rooms
  end

  #get /rooms/by_disponible/1
  def by_disponible
    @rooms = Room.where(DIS_HAB: true)
    render json: @rooms
  end

  # GET /rooms/new
  def new
    @room = Room.new
  end

  # GET /rooms/1/edit
  def edit
  end

  # POST /rooms or /rooms.json
  def create
    @room = Room.new(room_params)
      if @room.save
        render json: @room, status: :created, location: @room
      else
        render json: @room.errors, status: :unprocessable_entity
      end
  end

  # PATCH/PUT /rooms/1 or /rooms/1.json
  def update
    if @room.update(room_params)
      render json: @room
    else
      render json: @room.errors, status: :unprocessable_entity
    end
  end

  # Método para obtener el horario de una sala específica
  def horario
    lab_id = params[:id] # ID del laboratorio
    room = Room.find_by(id: params[:id]) # Encuentra la sala por ID
    if room
      horario = room.horario # Suponiendo que tienes una relación o método para obtener el horario
      render json: horario # Devuelve el horario en formato JSON
    else
      render json: { error: 'Sala no encontrada' }, status: :not_found
    end
  end
  
  # DELETE /rooms/1 or /rooms/1.json
  def destroy
    @room.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_room
      @room = Room.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def room_params
      params.require(:room).permit(:id,:Floor_id, :NOM_HAB, :TIP_HAB, :CAP_HAB, :DIS_HAB, :Edificio_id)
    end
end
