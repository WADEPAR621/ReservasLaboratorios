class AddEstTimResToBooks < ActiveRecord::Migration[7.1]
  def change
    add_column :books, :EST_TIM_RES, :string
  end
end
