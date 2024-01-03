class ChangeCarUseTypeInStudents < ActiveRecord::Migration[7.1]
  def change
    change_column :students, :CAR_USE, :string
  end
end
