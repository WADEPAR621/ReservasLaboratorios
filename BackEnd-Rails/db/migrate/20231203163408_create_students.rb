class CreateStudents < ActiveRecord::Migration[7.1]
  def change
    create_table :students do |t|
      t.string :NOM_USE
      t.string :APE_USE
      t.string :COR_USE
      t.string :SEC_USE_digest
      t.date :CAR_USE

      t.timestamps
    end
  end
end
