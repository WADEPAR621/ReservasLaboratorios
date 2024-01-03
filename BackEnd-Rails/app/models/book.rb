class Book < ApplicationRecord
  belongs_to :Student
  belongs_to :Tecnico
  belongs_to :Room

  # Callback que se ejecuta antes de guardar una instancia de Book
  before_save :actualizar_estado

  def actualizar_estado
    current_time_with_zone = Time.zone.now
    if current_time_with_zone < self.HOR_INI_RES
      self.HOR_TIM_RES = "POR EMPEZAR"
    elsif current_time_with_zone.between?(self.HOR_INI_RES, self.HOR_FIN_RES)
      self.EST_TIM_RES = "EN CURSO"
    else
      self.EST_TIM_RES = "TERMINADO"
    end
  end
  
end
