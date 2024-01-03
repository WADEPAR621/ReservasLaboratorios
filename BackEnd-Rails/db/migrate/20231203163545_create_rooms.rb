class CreateRooms < ActiveRecord::Migration[7.1]
  def change
    create_table :rooms do |t|
      t.references :Floor, null: false, foreign_key: true
      t.string :NOM_HAB
      t.string :TIP_HAB
      t.integer :CAP_HAB
      t.boolean :DIS_HAB

      t.timestamps
    end
  end
end
