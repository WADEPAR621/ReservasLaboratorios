class Room < ApplicationRecord
  belongs_to :Floor
  has_many :horarios
end
