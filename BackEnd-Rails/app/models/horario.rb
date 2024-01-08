class Horario < ApplicationRecord
  belongs_to :hora
  belongs_to :room
end
