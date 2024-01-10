class CreateHorarioAcademicos < ActiveRecord::Migration[7.1]
  def change
    create_table :horario_academicos do |t|
      t.references :Room, null: false, foreign_key: true
      t.date :fecha_inicio
      t.date :fecha_fin

      t.timestamps
    end
  end
end
