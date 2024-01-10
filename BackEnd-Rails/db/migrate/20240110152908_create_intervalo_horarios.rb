class CreateIntervaloHorarios < ActiveRecord::Migration[7.1]
  def change
    create_table :intervalo_horarios do |t|
      t.references :horario_academico, null: false, foreign_key: true
      t.references :dia_semana, null: false, foreign_key: true
      t.time :hora_inicio
      t.time :hora_fin
      t.text :descripcion

      t.timestamps
    end
  end
end
