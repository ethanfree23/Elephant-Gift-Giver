class Createcompanies < ActiveRecord::Migration[6.1]
  def change
    create_table :companies do |t|
      t.string :company_name
      t.string :address
      t.string :category1_name
      t.string :category2_name
      t.string :category3_name
    end
  end
end
