class Createorders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.integer :user_id
      t.integer :gift_id
      t.string :gift
    end
  end
end
