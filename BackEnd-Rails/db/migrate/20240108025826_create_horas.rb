class CreateHoras < ActiveRecord::Migration[7.1]
  def change
    create_table :horas do |t|
      t.string :intervalo

      t.timestamps
    end
  end
end
