class CreateBooks < ActiveRecord::Migration[7.1]
  def change
    create_table :books do |t|
      t.references :Student, null: false, foreign_key: true
      t.references :Tecnico, null: false, foreign_key: true
      t.references :Room, null: false, foreign_key: true
      t.string :RAZ_RES
      t.datetime :HOR_INI_RES
      t.datetime :HOR_FIN_RES
      t.boolean :EST_RES

      t.timestamps
    end
  end
end
