class CreateHorarios < ActiveRecord::Migration[7.1]
  def change
    create_table :horarios do |t|
      t.references :hora, null: false, foreign_key: true
      t.string :Lunes
      t.string :Martes
      t.string :Miercoles
      t.string :Jueves
      t.string :Viernes
      t.references :Room, null: false, foreign_key: true

      t.timestamps
    end
  end
end
