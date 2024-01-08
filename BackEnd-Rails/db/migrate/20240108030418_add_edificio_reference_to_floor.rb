class AddEdificioReferenceToFloor < ActiveRecord::Migration[7.1]
  def change
    add_reference :floors, :edificio, foreign_key: true
  end
end
