class AddEdificioReferenceToRoom < ActiveRecord::Migration[7.1]
  def change
    add_reference :rooms, :edificio, foreign_key: true
  end
end
