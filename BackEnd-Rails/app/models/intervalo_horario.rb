class IntervaloHorario < ApplicationRecord
  belongs_to :horario_academico
  belongs_to :dia_semana
end
