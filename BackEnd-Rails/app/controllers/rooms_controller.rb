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
    @room = Room.find(params[:id])
    @horario = obtener_horario_del_laboratorio(@room)
    render json: @horario
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


    def obtener_horario_del_laboratorio(room)
      # Lógica para obtener el horario del laboratorio
      # Puedes implementar esta lógica según tu modelo de datos
      # y cómo estás almacenando el horario del laboratorio en la base de datos
      # Debes devolver una estructura de datos que represente el horario
  
      # Por ejemplo, podrías tener una asociación en tu modelo Room
      # que te permita obtener el horario, algo así:
      # room.horario
  
      # Ajusta esta lógica según tus necesidades
      # Este es solo un ejemplo ficticio
      horario = [
        { dia: 'Lunes', horaInicio: '08:00', horaFin: '10:00' },
        { dia: 'Martes', horaInicio: '09:00', horaFin: '11:00' },
        # ... Otros días y horas ...
      ]
  
      horario
    end
    
    # Only allow a list of trusted parameters through.
    def room_params
      params.require(:room).permit(:id,:Floor_id, :NOM_HAB, :TIP_HAB, :CAP_HAB, :DIS_HAB, :Edificio_id)
    end
end
