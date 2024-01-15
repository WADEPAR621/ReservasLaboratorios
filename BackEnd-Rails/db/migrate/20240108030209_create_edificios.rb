class CreateEdificios < ActiveRecord::Migration[7.1]
  def change
    create_table :edificios do |t|
      t.string :descripcion

      t.timestamps
    end
  end
end
