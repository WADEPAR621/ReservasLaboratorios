class Room < ApplicationRecord
  belongs_to :Floor
  belongs_to :Edificio
  has_many :horarios
  has_many :horarios_academicos
end
