class CreateDiaSemanas < ActiveRecord::Migration[7.1]
  def change
    create_table :dia_semanas do |t|
      t.string :nombre

      t.timestamps
    end
  end
end
