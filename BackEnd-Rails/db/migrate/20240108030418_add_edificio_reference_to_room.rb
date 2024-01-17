class AddEdificioReferenceToRoom < ActiveRecord::Migration[7.1]
  def change
    add_reference :rooms, :Edificio, foreign_key: true
  end
end
