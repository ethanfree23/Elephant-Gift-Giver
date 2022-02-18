class Creategifts < ActiveRecord::Migration[6.1]
  def change
    create_table :gifts do |t|
      t.string :gift
      t.string :category
      t.integer :user_id
      t.integer :giftee_id
    end
  end
end
