class AddColumnsToTecnicos < ActiveRecord::Migration[7.1]
  def change
    add_column :tecnicos, :NOM_USER_TEC, :string
    add_column :tecnicos, :CON_TEC, :string
  end
end
