class CreateTecnicos < ActiveRecord::Migration[7.1]
  def change
    create_table :tecnicos do |t|
      t.string :NOM_TEC
      t.string :APE_TEC
      t.string :FEC_NAC_TEC
      t.date :FEC_ING_TEC

      t.timestamps
    end
  end
end
