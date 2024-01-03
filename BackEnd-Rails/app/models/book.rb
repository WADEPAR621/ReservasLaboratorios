class Book < ApplicationRecord
  belongs_to :Student
  belongs_to :Tecnico
  belongs_to :Room

  def self.update_estados
    all.each do |book|
      estado = book.estado_actual
      book.update(EST_TIM_RES: estado)
    end
  end
  
  def estado_actual
    current_time = Time.now
    if current_time < self.FEC_INI_RES
      return "POR EMPEZAR"
    elsif current_time >= self.FEC_INI_RES && current_time <= self.FEC_FIN_RES
      return "EN CURSO"
    else
      return "TERMINADO"
    end
  end
  
end
