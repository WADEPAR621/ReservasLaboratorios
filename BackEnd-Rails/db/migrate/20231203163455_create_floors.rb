class CreateFloors < ActiveRecord::Migration[7.1]
  def change
    create_table :floors do |t|
      t.string :NOM_PIS
      t.string :DES_PIS
      t.string :IMG_PIS

      t.timestamps
    end
  end
end
