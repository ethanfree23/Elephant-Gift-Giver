class Createorders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.string :giftee
      t.string :gift
      t.integer :user_id
      t.integer :gift_id
    end
  end
end
