class HorarioAcademico < ApplicationRecord
  belongs_to :Room
  has_many :intervalo_horarios
end
