class Creategifts < ActiveRecord::Migration[6.1]
  def change
    create_table :gifts do |t|
      t.string :item_name
      t.string :category
      # t.integer :user_id
      t.integer :giftee_id
      t.integer :user_id
    end
  end
end
