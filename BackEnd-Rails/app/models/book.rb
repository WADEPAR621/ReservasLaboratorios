class Book < ApplicationRecord
  belongs_to :Student
  belongs_to :Tecnico
  belongs_to :Room
end
